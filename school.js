var school = {
  students: [],
  addStudent: function(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].indexOf(year) >= 0) {
      var student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent: function(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode})
  },

  addGrade: function(student, courseName, grade) {
    var course = student.listCourses().filter(function(course) {
      return course.code === courseName;
    })[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard: function(student) {
    student.listCourses().forEach(function(course) {
      if (course.grade) {
        console.log(course.name + ': ' + String(course.grade));
      } else {
        console.log(course.name + ': In progress');
      }
    });
  },

  courseReport: function(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(function(course) {
        return course.name === courseName;
      })[0];
    }

    var courseStudents = this.students.map(function(student) {
      var course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(function(student) {
      return student.grade
    });

    if (courseStudents.length > 0) {
      console.log('=' + courseName + ' Grades=');

      var average = courseStudents.reduce(function(total, student) {
        console.log(student.name + ': ' + String(student.grade));
        return total + student.grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log('Course Average: ' + String(average));
    }
  },
};


function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(this.name + " is a " + this.year + " year student");
    },
    
    listCourses: function() {
      return this.courses;
    },
    
    addCourse: function(course) {
      this.courses.push(course);
    },
    
    addNote: function(courseCode, note) {
      var course = this.courses.filter(function(course) {
        return course.code === courseCode;
      })[0];
      
      if (course) {
        if (course.note) {
          course.note += '; ' + note;
        } else {
          course.note = note;
        } 
      }

    },
    
    viewNotes: function() {
      this.courses.forEach(function(course) {
        if (course.note) {
          console.log(course.name + ': ' + course.note);
        }
      });
    },
    
    updateNote: function(courseCode, note) {
      var course = this.courses.filter(function(course) {
        return course.code === courseCode;
      })[0];
      
      if (course) {
        course.note = note;
      }
    },
  };
}

var foo = createStudent('foo', 3);
foo.addCourse(101, 'Math');
foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
[];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();

console.log(school.getReportCard(foo));
console.log(school.courseReport('Math'));

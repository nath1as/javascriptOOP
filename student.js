function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(this.name + " is a " + this.year + " student");
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


var foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
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



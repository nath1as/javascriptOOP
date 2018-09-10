var invoices = {
  unpaid: [],
  add: function (name, owed) {
    this.unpaid.push({
      name: name,
      amount: owed,
    });
  },
  totalDue: function () {
    var sum = 0;
    var i;

    for (i = 0; i < this.unpaid.length; i++) {
      sum += this.unpaid[i].amount;
    }
    return sum;
  },
};

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
console.log(invoices.totalDue());

console.log(invoices);

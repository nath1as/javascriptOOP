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
  paid: [],
  payInvoice: function(name) {
    var unpaid = [];
    var i;

    for (i = 0; i < this.unpaid.length; i++) {
      if (name === this.unpaid[i].name) {
        this.paid.push(this.unpaid[i]);
      } else {
        unpaid.push(this.unpaid[i]);
      }
    }

    this.unpaid = unpaid;
  },
  totalPaid: function () {
    var sum = 0;
    var i;

    for (i = 0; i < this.paid.length; i++) {
      sum += this.paid[i].amount;
    }
    return sum;
  },
};

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");

console.log(invoices.totalDue());
console.log(invoices.totalPaid());
console.log(invoices);

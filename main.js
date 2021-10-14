var person = {
  name : 'alex',
  lastName : 'kucher',
  fullName : function (a) {
    return this.name + ' ' + this.lastName + a;

  }
}
console.log(person.fullName('dfsf'))

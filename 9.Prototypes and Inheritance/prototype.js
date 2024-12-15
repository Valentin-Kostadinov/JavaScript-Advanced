function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.write = function (message) {
  console.log(`Person wrote: ${message}`);
};

const myPerson = (Person.prototype = new Person("John", "Abbot"));
const otherPerson = (Person.prototype = new Person("Peter", "Jackson"));

console.log(myPerson);
console.log(myPerson.hasOwnProperty("write"));

myPerson.write("hello world!");
otherPerson.write("hi!");

console.log(myPerson.write == otherPerson.write);

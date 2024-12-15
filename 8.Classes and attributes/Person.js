class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    console.log(
      `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    );
  }
}

let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");

person.toString();

console.log(person instanceof Person);
console.log(person instanceof String);

export default class Person {
  constructor(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
  }
  getFullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}

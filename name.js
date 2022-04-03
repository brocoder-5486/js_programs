class Name {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  get Fullname() {
    return `${this.fname} ${this.lname}`;
  }
  get Initials() {
    return `${this.fname[0]}.${this.lname[0]}`;
  }
}
const person = new Name("sai", "kiran");
console.log(person.Fullname);
console.log(person.Initials);

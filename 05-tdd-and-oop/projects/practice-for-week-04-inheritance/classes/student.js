const Person = require('./person');

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName)
    this.GPA = GPA
    this.major = major;
  }
  static compareGPA(s1, s2) {
    return s1.GPA > s2.GPA ? `${s1.firstName} ${s1.lastName} has the higher GPA.` : s1.GPA === s2.GPA ? `Both students have the same GPA` : `${s2.firstName} ${s2.lastName} has the higher GPA.`
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}

const Employee = require(`./employee`);

class Manager extends Employee {
  constructor(name, salary, title, manager, employees = []) {
    super(name, salary, title, manager)
    this.employees = employees;
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  calculateBonus(multiplier) {
    let bonus = (this.salary + this._totalSubSalary()) * multiplier
    return bonus;
  }
  _totalSubSalary() {
    let sum = 0;
    this.employees.forEach(emp => {
      if (emp instanceof Manager) {
        sum += (emp.salary + emp._totalSubSalary());
      }
      else if (emp instanceof Employee) {
        sum += emp.salary;
      }
    })
    return sum;
  }
}



module.exports = Manager;

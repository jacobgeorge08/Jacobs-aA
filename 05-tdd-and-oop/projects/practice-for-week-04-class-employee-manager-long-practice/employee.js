class Employee {
  constructor(name, salary, title, manager) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    if (manager === undefined) {
      this.manager = null;
    }
    else manager.addEmployee(this);
  }
  calculateBonus(multiplier) {
    return (this.salary) * multiplier;
  }
}





module.exports = Employee;

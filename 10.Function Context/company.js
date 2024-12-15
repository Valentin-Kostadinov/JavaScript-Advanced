class Company {
  constructor() {
    this.departments = [];
    this.index = {};
  }

  addEmployee(username, salary, position, department) {
    this._validateParam(username);
    this._validateParam(position);
    this._validateParam(department);
    this._validateParam(salary);

    if (salary < 0) {
      throw new Error("Invalid Input!");
    }

    let current = this.departments[this.index[department]];

    if (current === undefined) {
      current = {
        name: department,
        employees: [],
      };
      this.departments.push(current);
      this.index[department] = this.departments.length - 1;
    }

    current.employees.push({
      username,
      salary,
      position,
    });

    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  bestDepartment() {
    const best = this.departments
      .map((d) => ({
        name: d.name,
        employees: d.employees.slice(),
        averageSalary: d.employees.reduce(getAverage, 0) / d.employees.length,
      }))
      .sort((a, b) => b.averageSalary - a.averageSalary)[0];

    if (best !== undefined) {
      best.employees.sort(
        (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
      );
      const result = [
        `Best Department is: ${best.name}`,
        `Average salary: ${best.averageSalary.toFixed(2)}`,
      ];
      best.employees.forEach((e) =>
        result.push(`${e.username} ${e.salary} ${e.position}`)
      );
      return result.join("\n");
    }

    function getAverage(p, c) {
      return p + c.salary;
    }
  }
  _validateParam(param) {
    if (param === "" || param === undefined || param === null) {
      throw new Error("Invalid Input!");
    }
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

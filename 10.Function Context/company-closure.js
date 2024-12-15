function Company() {
    const departments = [];
    const index = {};

        const company = {
            departments,
            index,
            addEmployee,
            bestDepartment,
        };

        return company;

    function addEmployee(username, salary, position, department) {

        _validateParam(username);
        _validateParam(position);
        _validateParam(department);
        _validateParam(salary);

        if (salary < 0) {
            throw new Error("Invalid Input!");
        }

        let current = departments[index[department]];
        
        if (current === undefined) {
            current = {
                name: department,
                employees: []
            };
            departments.push(current);
            index[department] = departments.length - 1;
        }

        
        current.employees.push({
            username,
            salary,
            position
        })

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    function bestDepartment() {
        const best = departments.map(d => ({
            name: d.name,
            employees: d.employees.slice(),
            averageSalary: d.employees.reduce(getAverage, 0) / d.employees.length,
        })).sort((a, b) => b.averageSalary - a.averageSalary)[0];


        if (best !== undefined) {
            best.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
            const result = [
                `Best Department is: ${best.name}`,
                `Average salary: ${best.averageSalary.toFixed(2)}`,
            ];
            best.employees.forEach(e =>  result.push(`${e.username} ${e.salary} ${e.position}`));
            return result.join('\n');
        }

        function getAverage(p, c) {
            return p + c.salary;
        }
    }
    function _validateParam(param) {
        if (param === '' || param === undefined || param === null) {
            throw new Error("Invalid Input!");
        }
    }
}




let c = Company();

const myAddEmployee = c.addEmployee;
myAddEmployee("Stanimir", 2000, "engineer", "Construction");
myAddEmployee("Pesho", 1500, "electrical engineer", "Construction");
myAddEmployee("Slavi", 500, "dyer", "Construction");
myAddEmployee("Stan", 2000, "architect", "Construction");
myAddEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
myAddEmployee("Pesho", 1000, "graphical designer", "Marketing");
myAddEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

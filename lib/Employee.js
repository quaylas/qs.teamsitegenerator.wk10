class Employee {
    constructor(name, id, email) {
        this.empName = name;
        this.empId = id;
        this.empEmail  = email;
    }

    // method to return the employee's name
    getName() {
        return this.empName;
    };

    // method to return the employee's id
    getId() {
        return this.empId;
    }
};

module.exports = Employee;
class Employee {
    constructor(name, id, email) {
        this.empName = name;
        this.empId = id;
        this.empEmail  = email;
        this.empRole = 'Employee';
    }

    // method to return the employee's name
    getName() {
        return this.empName;
    };

    // method to return the employee's id
    getId() {
        return this.empId;
    }

    // method to return the employee's role (this method is overwritten on many child classes).
    getRole() {
        return this.empRole;
    };
};

module.exports = Employee;
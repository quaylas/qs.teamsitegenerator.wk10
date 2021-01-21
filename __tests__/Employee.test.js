const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee('Eunice','1234','eunice1234@test.com');

    expect(employee.empName).toBe('Eunice');
    expect(employee.empId).toBe('1234');
    expect(employee.empEmail).toBe('eunice1234@test.com');
});

test('gets employee\'s name', () => {
    const employee = new Employee('Eunice','1234','eunice1234@test.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.empName));
});

test('gets employee\'s id',() => {
    const employee = new Employee('Eunice','1234','eunice1234@test.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.empId));
});
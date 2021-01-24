const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee('Eunice',1234,'eunice1234@test.com');

    expect(employee.empName).toBe('Eunice');
    expect(employee.empId).toEqual(expect.any(Number));
    expect(employee.empEmail).toEqual(expect.stringContaining('@'));
});

test('gets employee\'s name', () => {
    const employee = new Employee('Eunice','1234','eunice1234@test.com');

    expect(employee.getName()).toEqual(employee.empName);
});

test('gets employee\'s id',() => {
    const employee = new Employee('Eunice','1234','eunice1234@test.com');

    expect(employee.getId()).toEqual(employee.empId);
});

test('gets employee\'s role', () => {
    const employee = new Employee('Eunice','1234','eunice1234@test.com');

    expect(employee.getRole()).toEqual('Employee');
});
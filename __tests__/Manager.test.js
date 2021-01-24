const Manager = require('../lib/Manager');

test('creates a new manager', () => {
    const manager = new Manager('Amelia',7241937,'ameliaa@test.com', 1937);

    expect(manager.officeNumber).toEqual(expect.any(Number)); //all other properties are tested by Employee tests
});

test('gets a manager\'s role and returns Manager', () => {
    const manager = new Manager('Amelia', 7241937 , 'ameliaa@test.com', 1937);

    expect(manager.getRole()).toEqual('Manager');
});
const Engineer = require('../lib/Engineer');

test('creates a new Engineer', () => {
    const engineer = new Engineer('Eleanor','10111884', 'eleanorr@test.com', 'wellbeforerigby');

    expect(engineer.github).toEqual(expect.any(String)); //all other properties are tested by Employee tests
});

test('gets an engineer\'s role', () => {
    const engineer = new Engineer('Eleanor','10111884', 'eleanorr@test.com', 'wellbeforerigby');

    expect(engineer.getRole()).toEqual('Engineer');
});
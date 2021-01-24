const Intern = require('../lib/Intern');

test('creates a new intern', () => {
    const intern = new Intern('mary', 8301797,'marys@test.com', 'The Burr, Sir');

    expect(intern.school).toEqual(expect.any(String)); //all other properties are tested by Employee tests
});

test('gets an intern\'s role and returns Intern', () => {
    const intern = new Intern('mary', 8301797,'marys@test.com', 'The Burr, Sir');

    expect(intern.getRole()).toEqual('Intern');
});

test('gets an intern\'s school', () => {
    const intern = new Intern('mary', 8301797,'marys@test.com', 'The Burr, Sir');

    expect(intern.getSchool()).toEqual(intern.school);
});
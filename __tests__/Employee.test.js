const Employee = require('../lib/Employee');
 
describe('Employee tests', () => {
  it('Should return a name', () => {

    const exampleName = "Max"
    const exampleId = 72
    const exampleEmail = "something@something.com"
    const exampleTitle = "CEO"

    const testing = new Employee(exampleName, exampleId, exampleEmail, exampleTitle)
    
    expect(testing.name).toEqual(exampleName)
  });
  it('Should return an Id', () => {

    const exampleName = "Max"
    const exampleId = 72
    const exampleEmail = "something@something.com"
    const exampleTitle = "CEO"

    const testing = new Employee(exampleName, exampleId, exampleEmail, exampleTitle)
    
    expect(testing.id).toEqual(exampleId)
  });
  it('Should return an email', () => {

    const exampleName = "Max"
    const exampleId = 72
    const exampleEmail = "something@something.com"
    const exampleTitle = "CEO"

    const testing = new Employee(exampleName, exampleId, exampleEmail, exampleTitle)
    
    expect(testing.email).toEqual(exampleEmail)
  });
  it('Should return a title', () => {

    const exampleName = "Max"
    const exampleId = 72
    const exampleEmail = "something@something.com"
    const exampleTitle = "CEO"

    const testing = new Employee(exampleName, exampleId, exampleEmail, exampleTitle)
    
    expect(testing.title).toEqual(exampleTitle)
  });
  it('Should return a type of employee', () => {

    const exampleName = "Max"
    const exampleId = 72
    const exampleEmail = "something@something.com"
    const exampleTitle = "CEO"

    const testing = new Employee(exampleName, exampleId, exampleEmail, exampleTitle)
    
    expect(testing.getRole()).toEqual("Employee")
  });

  

});
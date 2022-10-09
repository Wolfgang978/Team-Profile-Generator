const Manager = require('../lib/Manager');
 
describe('Manager tests', () => {
  
  it('Should return a title', () => {

    const exampleName = "Max"
    const exampleId = 72
    const exampleEmail = "something@something.com"
    const exampleOfficeNumber = 7624

    const testing = new Manager(exampleName, exampleId, exampleEmail, exampleOfficeNumber)
    
    expect(testing.officeNumber).toEqual(exampleOfficeNumber)
  });
  it('Should return a type of manager', () => {

    const exampleName = "Max"
    const exampleId = 72
    const exampleEmail = "something@something.com"
    const exampleOfficeNumber = 7624

    const testing = new Manager(exampleName, exampleId, exampleEmail, exampleOfficeNumber)
    
    expect(testing.getRole()).toEqual("Manager")
  });

  

});
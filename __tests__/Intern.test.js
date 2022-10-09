const Intern = require('../lib/Intern');
 
describe('Intern tests', () => {
  
  it('Should return a title', () => {

    const exampleName = "Max"
    const exampleId = 72
    const exampleEmail = "something@something.com"
    const exampleSchool = "Ohio State University"

    const testing = new Intern(exampleName, exampleId, exampleEmail, exampleSchool)
    
    expect(testing.school).toEqual(exampleSchool)
  });
  it('Should return a type of intern', () => {

    const exampleName = "Max"
    const exampleId = 72
    const exampleEmail = "something@something.com"
    const exampleSchool = "Ohio State University"

    const testing = new Intern(exampleName, exampleId, exampleEmail, exampleSchool)
    
    expect(testing.getRole()).toEqual("Intern")
  });

  

});
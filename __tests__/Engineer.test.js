const Engineer = require('../lib/Engineer');
 
describe('Engineer tests', () => {
  
  it('Should return a title', () => {

    const exampleName = "Max"
    const exampleId = 72
    const exampleEmail = "something@something.com"
    const exampleGithub = "ThisisaGithub"

    const testing = new Engineer(exampleName, exampleId, exampleEmail, exampleGithub)
    
    expect(testing.github).toEqual(exampleGithub)
  });
  it('Should return a type of engineer', () => {

    const exampleName = "Max"
    const exampleId = 72
    const exampleEmail = "something@something.com"
    const exampleGithub = "ThisisaGithub"

    const testing = new Engineer(exampleName, exampleId, exampleEmail, exampleGithub)
    
    expect(testing.getRole()).toEqual("Engineer")
  });

  

});
const Engineer = require("../lib/engineer")
test("Can set GitHub via constructor", () => {
    const testGitHub = "username"
    const employee = new Engineer("Janée", 1, "janee@janee.com", testGitHub)
    expect(employee.github).toBe(testGitHub)
});
test("Can return Engineer via getRole()", () => {
    const testRole = "Engineer"
    const employee = new Engineer("Janée", 1, "janee@janee.com", "Engineer")
    expect(employee.getRole()).toBe(testRole)
});
test("Can return GitHub username via getGithub()", () => {
    const testUserName = "githubname"
    const employee = new Engineer("Janée", 1, "janee@janee.com", testUserName)
    expect(employee.getGithub()).toBe(testUserName)
});

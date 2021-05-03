const Intern = require("../lib/intern")
test("Can set school name via constructor", () => {
    const testSchool = "school"
    const employee = new Intern("Janée", 1, "janee@janee.com", testSchool)
    expect(employee.school).toBe(testSchool)
});
test("Can return Intern via getRole()", () => {
    const testRole = "Intern"
    const employee = new Intern("Janée", 1, "janee@janee.com", "Intern")
    expect(employee.getRole()).toBe(testRole)
});
test("Can return school name via getSchool()", () => {
    const testSchoolName = "testschool"
    const employee = new Intern("Janée", 1, "janee@janee.com", testSchoolName)
    expect(employee.getSchool()).toBe(testSchoolName)
});

const Manager = require("../lib/manager")
test("Can set office number via constructor", () => {
    const officeNumber = "officenumber"
    const employee = new Manager("Janée", 1, "janee@janee.com", officeNumber)
    expect(employee.officeNumber).toBe(officeNumber)
});
test("Can return Manager via getRole()", () => {
    const testRole = "Manager"
    const employee = new Manager("Janée", 1, "janee@janee.com", "Manager")
    expect(employee.getRole()).toBe(testRole)
});
test("Can return office number via getOfficeNumber()", () => {
    const testNumber = "testOfficeNumber"
    const employee = new Manager("Janée", 1, "janee@janee.com", testNumber)
    expect(employee.getOfficeNumber()).toBe(testNumber)
});
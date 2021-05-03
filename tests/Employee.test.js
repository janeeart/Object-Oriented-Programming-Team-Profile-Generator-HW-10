const Employee = require("../lib/employee")
test("Create new employee", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe('object')
});

test("Can set name via constructor", () => {
    const name = "Janée"
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
});

test("Can set ID via constructor", () => {
    const id = 1
    const employee = new Employee("Janée", id)
    expect(employee.id).toBe(id)
});

test("Can set email via constructor", () => {
    const email = "janee@janee.com"
    const employee = new Employee("Janée", 1, email)
    expect(employee.email).toBe(email)
});

test("Can get name via getName()", () => {
    const testName = "Mary";
    const employee = new Employee(testName)
    expect(employee.getName()).toBe(testName)
});

test("Can get ID via getId()", () => {
    const testID = "1";
    const employee = new Employee("Janée", testID)
    expect(employee.getId()).toBe(testID)
});

test("Can get email via getEmail()", () => {
    const testEmail = "janee@janee.com";
    const employee = new Employee("Janée", 1, testEmail)
    expect(employee.getEmail()).toBe(testEmail)
});

test("Can get role via getRole()", () => {
    const testRole = "Employee";
    const employee = new Employee("Janée", 1, "janee@janee.com")
    expect(employee.getRole()).toBe(testRole)
});



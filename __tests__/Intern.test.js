const Intern = require("../lib/Intern");

describe("Intern", () => {
  let intern;

  beforeEach(() => {
    intern = new Intern("Fae", 3, "test3@gmail.com", "CU");
  });

  test("creates an instance of Intern", () => {
    expect(intern.getName()).toBe("Fae");
    expect(intern.getId()).toBe(3);
    expect(intern.getEmail()).toBe("test3@gmail.com");
    expect(intern.getSchool()).toBe("CU");
    expect(intern.getRole()).toBe("Intern");
  });
});
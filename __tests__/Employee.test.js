const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Should have a name, id, and email.', () => {
        const e = new Employee("Jeremy", 1, "test@gmail.com");
        expect(e.name).toBe("Jeremy");
        expect(e.id).toBe(1);
        expect(e.id).toBe("test@gmail.com");
    });

    it('Can receive a name via the getName() prompt.', () => {
        const testName = "Jeremy";
        const e = new Employee(testName, 1, 'test@gmail.com');
        expect(e.getName()).toBe(testName);
    });

    it('Can receive an ID via the getId() prompt.', () => {
        const testId = 1;
        const e = new Employee('Jeremy', testId, 'test@gmail.com');
        expect(e.getId()).toBe(testId);
    });

    it('Can receive an email via the getEmail() prompt.', () => {
        const testEmail = 'test@gmail.com';
        const e = new Employee('Jeremy', 1, testEmail);
        expect(e.getEmail()).toBe(testEmail);
    });

    it("Should return 'Employee' role when using getRole().", () => {
        const e = new Employee('Jeremy', 1, 'test@gmail.com');
        expect(e.getRole()).toBe("Employee");
    });
});
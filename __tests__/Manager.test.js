const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Can receive a name via the getName() prompt.', () => {
        const testName = "Jeremy";
        const e = new Manager(testName, 1, 'test@gmail.com', 42);
        expect(e.getName()).toBe(testName);
    });

    it('Can receive an ID via the getId() prompt.', () => {
        const testId = 1;
        const e = new Manager('Jeremy', testId, 'test@gmail.com', 42);
        expect(e.getId()).toBe(testId);
    });

    it('Can receive an email via the getEmail() prompt.', () => {
        const testEmail = 'test@gmail.com';
        const e = new Manager('Jeremy', 1, testEmail, 42);
        expect(e.getEmail()).toBe(testEmail);
    });

    it('Can receive an office number via the getOfficeNumber() prompt.', () => {
        const testOffice = 42;
        const e = new Manager('Jeremy', 1, 'test@gmail.com', testOffice);
        expect(e.getOfficeNumber()).toBe(testOffice);

    });

    it("Should return 'Manager' role when using getRole().", () => {
        const e = new Manager('Jeremy', 1, 'test@gmail.com', 42);
        expect(e.getRole()).toBe("Manager");
    });
});
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Should have a name, id, and email.', () => {
        const e = new Engineer("Mark", 2, "test2@gmail.com", "Markman2");
        expect(e.name).toBe("Mark");
        expect(e.id).toBe(2);
        expect(e.email).toBe("test2@gmail.com");
        expect(e.github).toBe("Markman2");
    });

    it('Can receive a name via the getName() prompt.', () => {
        const testName = "Mark";
        const e = new Engineer(testName, 2, 'test2@gmail.com', "Markman2");
        expect(e.getName()).toBe(testName);
    });

    it('Can receive an ID via the getId() prompt.', () => {
        const testId = 2;
        const e = new Engineer('Mark', testId, 'test2@gmail.com', "Markman2");
        expect(e.getId()).toBe(testId);
    });

    it('Can receive an email via the getEmail() prompt.', () => {
        const testEmail = 'test2@gmail.com';
        const e = new Engineer('Mark', 2, testEmail, "Markman2");
        expect(e.getEmail()).toBe(testEmail);
    });

    it('Can receive an email via the getGithub() prompt.', () => {
        const testGithub = 'Markman2';
        const e = new Engineer('Mark', 2, 'test2@gmail.com', testGithub);
        expect(e.getGitHub()).toBe(testGithub);
    });

    it("Should return 'Engineer' role when using getRole().", () => {
        const e = new Engineer('Mark', 2, 'test2@gmail.com', "Markman2");
        expect(e.getRole()).toBe("Engineer");
    });
});
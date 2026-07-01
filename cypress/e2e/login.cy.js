import LoginPage from "../pages/LoginPage";
describe("Login Tests", () => {
    const login = new LoginPage();

    beforeEach(() => {
        cy.visit('/');
    });

    it("should login valid user successfully", () =>{
        cy.fixture("users").then((user) => {
            login.login(
                user.standardUser.username,
                user.standardUser.password
            );

            cy.url().should("include", "/inventory.html");
            cy.get('[data-test="title"]').should('be.visible').and('have.text', 'Products');
        });
    });

    it("should show error for invalid user", () => {
        cy.fixture("users").then((user) => {
            login.login(
                user.lockedOutUser.username,
                user.lockedOutUser.password
            );
        });
    });
});
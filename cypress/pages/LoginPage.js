class LoginPage{
    //Login Page locators 
    usernameField() {
        return cy.get('[data-test="username"]');
    }
    passwordField() {
        return cy.get('[data-test="password"]');
    }
    loginButton() {
        return cy.get('#login-button');
    }
    loginErrorMsg() {
        return cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    }

    //Login Page methods
    enterUsername(username) {
        this.usernameField().clear().type(username);
    }
    enterPassword(password) {
        this.passwordField().clear().type(password);
    }
    clickLogin() {
        this.loginButton().click();
    }
    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
    loginErrorMessage() {
        this.loginErrorMessage().should('be.visible');
    }

    //            cy.get('[data-test="title"]').should('be.visible').and('have.text', 'Products');


}
export default LoginPage;
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
}
export default LoginPage;
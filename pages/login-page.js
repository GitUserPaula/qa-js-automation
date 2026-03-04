class LoginPage {
  constructor() {
    this.url = 'https://the-internet.herokuapp.com/login';

    // Selectors
    this.usernameField = '#username';
    this.passwordField = '#password';
    this.loginButton = 'button[type="submit"]';
    this.successMessage = '#flash.success';
    this.errorMessage = '#flash.error';
  }

  /**
   * Navigates to the login page
   */
  visit() {
    cy.visit(this.url);
  }

  /**
   * Enters username in the input field
   * @param {string} username - The username to enter
   */
  enterUsername(username) {
    cy.get(this.usernameField).type(username);
  }

  /**
   * Enters password in the input field
   * @param {string} password - The password to enter
   */
  enterPassword(password) {
    cy.get(this.passwordField).type(password);
  }

  /**
   * Clicks the login button
   */
  clickLogin() {
    cy.get(this.loginButton).click();
  }

  /**
   * Performs a complete login action
   * @param {string} username
   * @param {string} password
   */
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  /**
   * Asserts that the success message is visible and contains expected text
   */
  verifySuccessMessage() {
    cy.get(this.successMessage)
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  }

  /**
   * Asserts that the error message is visible and contains expected text
   */
  verifyErrorMessage(expectedText) {
    cy.get(this.errorMessage)
      .should('be.visible')
      .and('contain', expectedText);
  }
}

export default LoginPage;
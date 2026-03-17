// pages/login-page.js
class LoginPage {
  constructor() {
    this.url = 'https://the-internet.herokuapp.com/login';

    // Selectors
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button[type="submit"]';
    this.successFlash = '#flash.success';
    this.errorFlash = '#flash.error';
    this.secureHeader = 'h2';
  }

  /**
   * Navigate to the login page
   */
  visit() {
    cy.visit(this.url);
  }

  /**
   * Enter username
   * @param {string} username
   */
  enterUsername(username) {
    cy.get(this.usernameInput).clear().type(username);
  }

  /**
   * Enter password
   * @param {string} password
   */
  enterPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  /**
   * Click the login button
   */
  submit() {
    cy.get(this.loginButton).click();
  }

  /**
   * Complete login flow
   * @param {string} username
   * @param {string} password
   */
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.submit();
  }

  /**
   * Verify successful login
   */
  verifySuccessMessage() {
    cy.url().should('include', '/secure');
    cy.get(this.successFlash)
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
    cy.get(this.secureHeader)
      .should('be.visible')
      .and('contain', 'Secure Area');
  }

  /**
   * Verify error message
   * @param {string} expectedText
   */
  verifyErrorMessage(expectedText) {
  cy.get(this.errorFlash)
    .should('be.visible')
    .and('contain', expectedText);
}

  /**
   * Take screenshot on failure (optional helper)
   */
  takeScreenshotOnFailure(name) {
    cy.screenshot(`failure-${name}`, { capture: 'fullPage' });
  }
}

export default LoginPage;
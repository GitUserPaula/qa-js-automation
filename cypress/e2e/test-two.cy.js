describe('Cypress Test', () => {
  it('should visit the login page and check the title', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    // Recommended way: search by visible text (more stable)
    cy.contains('Login Page')
      .should('be.visible')
      .and('have.text', 'Login Page');

    cy.log('First test passed successfully! 🌙✨ Hello from Little Moon!');
  });
});
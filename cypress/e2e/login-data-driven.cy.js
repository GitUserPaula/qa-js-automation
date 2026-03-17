import LoginPage from '../../pages/login-page';

describe('Data-Driven Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should handle multiple login scenarios from fixture', () => {
    cy.fixture('users').then((users) => {
      users.forEach((user) => {
        cy.log(`Testing user: ${user.username} - Expected: ${user.expected}`);

        loginPage.login(user.username, user.password);

        if (user.expected === 'success') {
          loginPage.verifySuccess();
        } else {
          loginPage.verifyErrorMessage(user.errorMessage);
        }

        // Reset for next iteration (volver al login page)
        loginPage.visit();
      });
    });
  });
});
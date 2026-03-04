import LoginPage from '../../pages/login-page';

describe('Login Page Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should show error with invalid credentials', () => {
    loginPage.login('wronguser', 'wrongpass');
    loginPage.verifyErrorMessage('Your username is invalid!');
  });

  it('should login successfully with valid credentials', () => {
    loginPage.login('tomsmith', 'SuperSecretPassword!');
    loginPage.verifySuccessMessage();
  });
});
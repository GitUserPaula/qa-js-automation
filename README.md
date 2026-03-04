# QA Automation Practice with Cypress

Personal project to strengthen my QA Automation skills using **Cypress** (JavaScript).

## What I'm practicing
- End-to-End UI testing
- Page Object Model (POM) for clean and reusable code
- Assertions and error handling
- Screenshots on failure
- Structured test organization

## Project Structure

```plaintext
qa-js-automation/
├── cypress/                    # Cypress configuration and tests
│   ├── e2e/                    # All end-to-end test files (.cy.js)
│   ├── fixtures/               # Test data files (if needed)
│   ├── support/                # Custom commands and setup
│   └── ...                     # Other Cypress folders
├── pages/                      # Page Object Model classes
│   └── login-page.js           # Example: Login page actions and assertions
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked versions (optional to commit)
├── cypress.config.js           # Cypress configuration
└── README.md                   # This file!

## How to run
```bash
# Install dependencies
npm install

# Open Cypress interactive runner
npx cypress open

# Run all tests in headless mode
npx cypress run
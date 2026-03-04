# QA Automation Practice with Cypress

Personal project to strengthen my QA Automation skills using **Cypress** (JavaScript).

## What I'm practicing
- End-to-End UI testing
- Page Object Model (POM) for clean and reusable code
- Assertions and error handling
- Screenshots on failure
- Structured test organization

## Project Structure
qa-js-automation/
├── cypress/
│   └── e2e/                  ← All my test files (.cy.js)
├── pages/                    ← Page Objects (reusable page classes)
├── package.json
└── README.md

## How to run
```bash
# Install dependencies
npm install

# Open Cypress interactive runner
npx cypress open

# Run all tests in headless mode
npx cypress run
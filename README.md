This repository contains an end-to-end UI automation framework built using Playwright with TypeScript.The framework is designed to automate and validate different UI interactions on the QA Playground website, following Page Object Model (POM) best practices.


Tech Stack-
Playwright
TypeScript
Node.js
Page Object Model (POM)
CSV-based test data
Soft Assertions
Playwright HTML Reporting


QA-PLAYGROUND-PLAYWRIGHT-POC
│
├── .github/                 # GitHub workflows (CI/CD if enabled)
├── node_modules/            # Dependencies
├── playwright-report/       # Playwright HTML reports
├── test-results/            # Test execution artifacts
│
├── src/
│   ├── config/
│   │   └── dataConfig.ts    # Test data configuration utilities
│
│   ├── data/
│   │   ├── qaplayground.csv # Test data file
│   │   └── UploadFileInAutomation.jpg # File upload test data
│
│   ├── helpers/
│   │   ├── config.json      # Environment configuration
│   │   └── LoginSetup.ts    # URL & environment setup
│
│   ├── logging/             # Logging utilities
│
│   ├── pages/
│   │   ├── QAPlayGroundPage.ts       # Home page actions
│   │   └── QAPlayGroundAppsPage.ts   # Application-level actions
│
│   ├── reporting/           # Custom reporting logic
│
│   ├── tests/
│   │   └── E2EQAPlayground.spec.ts   # End-to-end test cases
│
│   └── utils/
│       └── commonReusables.ts        # Common reusable methods
│
├── playwright.config.ts     # Playwright configuration
├── package.json             # Project dependencies & scripts
├── .gitignore
└── README.md                # Project documentation

Installation 
npm install
npx playwright install

Run Test Cases
npx playwright test

Run Test in Headed Mode
npx playwright test --headed

#Features Covered#

Page Object Model (POM)
Dynamic iframe handling
New tab & popup handling
File upload using setInputFiles
Soft assertions
Shadow DOM handling
Progress bar validation
Role-based locators (getByRole)
CSV-driven test data
Reusable utilities & helper

Best Practices Used

Playwright recommended locators (getByRole, getByText)
Clean separation of test logic and page logic
Reusable utility methods
Environment-based configuration

Cross-browser ready

#Author#
Avanish Srivastava


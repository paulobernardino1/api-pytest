# Playwright E2E Testing Suite

A comprehensive end-to-end testing framework built with Playwright, featuring continuous integration through GitHub Actions and code quality monitoring with SonarCloud.

## Getting Started

Follow these steps to set up and run the testing suite:

### Prerequisites

- **Node.js** (version 20.x or higher) - [Download here](https://nodejs.org/)

### Installation & Setup

1. **Install Project Dependencies**
   ```bash
   npm i --save-dev
   ```

2. **Install Playwright Browsers**
   ```bash
   npx playwright install
   ```

### Running Tests

#### Execute Complete Test Suite
```bash
npm run ci
```

#### View Test Reports
```bash
npm run show-report
```

### Artifact Management

All test execution artifacts are stored in the `./artifacts` directory. To clean up these files:

```bash
npm run clean
```

## ZeroStep AI Integration

This project supports AI-powered testing capabilities through ZeroStep integration.

### Configuration

To enable ZeroStep AI features:

1. Create a `zerostep.config.json` file in the project root
2. Add your ZeroStep token to the configuration file

Example configuration:
```json
{
  "token": "your_zerostep_token_here"
}
```

## Project Architecture

The project follows a structured approach to organize test components:

```
project-root/
├── scenarios/           # Test scenario mapping
├── support/            # Project structure files
│   ├── elements/       # Element mapping for each screen
│   ├── fixtures/       # Data configuration files
│   └── pages/          # Page logic and actions
├── artifacts/          # Test execution artifacts
└── zerostep.config.json # ZeroStep AI configuration
```

### Directory Structure Details

- **Scenarios**: Contains test scenario definitions and mapping
- **Support**: Core project infrastructure
  - **Elements**: Screen element selectors and mappings
  - **Fixtures**: Test data configuration and setup files
  - **Pages**: Page Object Model implementation with test actions and logic

## Key Features

- **Modern E2E Testing**: Built with Playwright for reliable cross-browser testing
- **CI/CD Integration**: Automated testing through GitHub Actions
- **Code Quality**: Continuous monitoring with SonarCloud
- **AI-Powered Testing**: Optional ZeroStep AI integration for enhanced test capabilities
- **Comprehensive Reporting**: Detailed test reports with visual artifacts
- **Clean Architecture**: Well-organized project structure following best practices

## Available Scripts

- `npm run ci` - Execute the complete test suite
- `npm run show-report` - Display test reports
- `npm run clean` - Remove all test artifacts

## Getting Help

For issues or questions:
- Check the GitHub Actions workflow for CI/CD status
- Review SonarCloud reports for code quality metrics
- Refer to the [Playwright documentation](https://playwright.dev/) for framework-specific guidance
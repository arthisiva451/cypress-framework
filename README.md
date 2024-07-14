# README #

Welcome to Cypress Test Automation Suite !!

## Description
This project is aimed at automating end-to-end regression scenarios using Cypress. It provides a comprehensive test suite that ensures the functionality and stability of the Cypress Test project. 

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: The project is built with Cypress, which runs on Node.js. You must have Node.js installed to run the tests. We recommend using Node.js version 20.x or higher for optimal compatibility. You can download Node.js from [https://nodejs.org/](https://nodejs.org/).

- **npm**: npm (Node Package Manager) is used to install the dependencies. It comes bundled with Node.js, so installing Node.js should also install npm. Ensure you have npm version 10.x or higher.

- **Cypress**: While Cypress will be installed as part of the project dependencies, having a global installation can be beneficial for running Cypress commands directly. This is optional. To install Cypress globally, run `npm install -g cypress`.


Ensure all the prerequisites are properly installed and set up before proceeding to clone the repository and install project dependencies.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone `
2. Install the required dependencies by running the below commands
```
chmod +x setup.sh
```

```
./setup.sh
```
 
 OR

 ```
 npm install
 ```


## Running Tests

### Running All Tests

To execute all tests, use the following command:

```
npm run test
```
This command runs the entire suite of tests using the default configuration.

### Running Tests Headlessly

For continuous integration or to run tests without the Cypress Test Runner's GUI, use the headless mode:

```bash
npm run test -- --headless
```

This command runs the tests in the background without opening the Cypress GUI.

### Running Specific Tests

If you wish to run a specific test file, use the Cypress command followed by the path to the test file:

```bash
npx cypress run --spec "cypress/integration/path/to/your/test_file.spec.js"
```

Replace `"cypress/integration/path/to/your/test_file.spec.js"` with the actual path to your test file.

### Running Tests in a Specific Browser

Cypress supports running tests in different browsers installed on your machine. To run tests in a specific browser, use the `--browser` flag with the `npm run test` command, followed by the name of the browser. For example:

```bash
npm run test -- --browser chrome
```

This command runs the tests in Chrome. You can replace `chrome` with `firefox`, `edge`, or any other browser that Cypress supports and is installed on your machine.

Note: Ensure the browser you intend to use is installed on your system and is supported by Cypress.


## Visual Testing

Visual testing is a crucial aspect of automated testing that focuses on verifying the visual appearance of a web application. It ensures that the UI elements, layouts, and styles remain consistent across different browsers and devices.

To perform visual testing in the Cypress Test Automation Suite, we use a powerful dependency called cypress-visual-regression. This captures screenshots of the application's UI during test execution and compares them against baseline images.

Here's how you can update baselines and see the difference images:

1. **Updating Baselines**: When you make intentional changes to the UI, such as updating styles or modifying layouts, you need to update the baseline images to reflect these changes. To update the baselines, follow these steps:

    - Run the tests using the command `npm run test`.
    - After the test execution, navigate to the `./cypress/snapshots/base` directory.
    - Locate the relevant snapshot folder for the test case you want to update.
    - Replace the existing baseline image with the new screenshot image that represents the updated UI.

2. **Viewing Difference Images**: When a visual regression test runs, Cypress generates difference images that highlight the areas where the UI has changed compared to the baseline. To view the difference images, follow these steps:

    - Navigate to the `./cypress/reports/mochareports/snapshots/diff` directory.
    - Locate the relevant snapshot folder for the test case that has visual differences.
    - The difference image will show the visual variances between the baseline and the current UI state, making it easier to identify the specific changes.

By regularly updating baselines and reviewing the difference images, you can ensure that any un intentional UI changes are captured and validated during the visual testing process. This helps maintain the visual consistency and quality of the Cypress Test project across different browsers and devices.

Remember to communicate any intentional UI changes to the relevant stakeholders and update the baselines accordingly to avoid false positives in the visual testing results.

## Page object model (POM)
In the Cypress Test Automation Suite, we follow the Page Object Model (POM) design pattern to enhance test maintainability and reusability. The POM allows us to represent each page of the application as a separate class, encapsulating the page elements and their corresponding actions.

To implement the POM, follow these steps:
1. Create a separate JavaScript file for each page of the application under ./page-object folder
2. Define a class for each page, representing the page elements and actions.
3. Use Cypress commands to interact with the page elements and perform actions.
4. Export the page class from the file.

Here's an example of a simplified page class for the login page:

```javascript
class LoginPage {
    // Page elements
    get usernameInput() {
        return cy.get('#username');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get loginButton() {
        return cy.get('button[type="submit"]');
    }

    // Page actions
    enterUsername(username) {
        this.usernameInput.type(username);
    }

    enterPassword(password) {
        this.passwordInput.type(password);
    }

    clickLoginButton() {
        this.loginButton.click();
    }
}

export default new LoginPage();
```

By following this approach, you can create concise and reusable page classes that facilitate efficient test development and maintenance.

Remember to import the page classes into your test scripts and use them to interact with the application's pages.


## Data Driven Testing

In the Cypress Test Automation Suite, we leverage the power of data-driven testing by fetching test data from JSON files located in the `fixtures` folder. This approach allows us to easily manage and update test data without modifying the test scripts themselves. By separating the test data from the test logic, we ensure better maintainability and reusability of our test suite.

To use test data from a JSON file, follow these steps:
1. Create a JSON file in the `fixtures` folder with the required test data.
2. In your test script, import the JSON file and access the test data as needed.
3. Use the fetched test data in your test scenarios to validate different test cases and expected outcomes.

By adopting this data-driven approach, we can efficiently test various scenarios and ensure comprehensive coverage of our application's functionality.

Remember to update the test data JSON files whenever there are changes in the application's requirements or test scenarios.

## Report Generation
In the Cypress Test Automation Suite, we have integrated the Cypress Mochawesome reporter to generate detailed test reports. This allows you to easily track the test results and identify any failures or issues.

To generate the test report, follow these steps:
1. After running the tests using the command `npm run test`, navigate to the `./reports/mochareports` directory.
2. Open the `report.html` file in a web browser to view the detailed test results.
3. The report provides a comprehensive overview of the test execution, including the number of passed and failed tests, test duration, and any error messages or stack traces.

By regularly reviewing the test reports, you can gain insights into the stability and functionality of the Cypress Test project. This helps in identifying areas that require improvement and ensures the overall quality of the software.

Remember to share the test reports with the relevant stakeholders to keep them informed about the test results and progress of the automation suite.

## Lint and formatting

This project utilizes ESLint and Prettier for linting and code formatting.

### ESLint

ESLint is a widely used JavaScript linter that helps identify and report code quality issues. It enforces coding standards and best practices, ensuring consistency across the codebase. The ESLint configuration for this project can be found in the `.eslintrc` file.

To run ESLint and check for any linting errors, use the following command:

```
npm run lint
```

### Prettier

Prettier is an opinionated code formatter that automatically formats code according to a set of predefined rules. It helps maintain a consistent code style throughout the project. The Prettier configuration for this project can be found in the `.prettierrc` file.

To format the code using Prettier, use the following command:

```
npm run format
```

Running the `format` command will automatically format all the files in the project based on the Prettier rules.

Remember to regularly run the linting and formatting commands to ensure code quality and consistency.

## Husky

Husky is a powerful tool used for improving code quality by automating tasks such as linting, formatting, and running tests before committing code changes. It integrates seamlessly with Git hooks, allowing you to enforce code quality standards and prevent bad commits.

To edit Husky configuration, follow these steps:

1. Locate the `.husky` folder in the root directory of your project.
2. Inside the `.husky` folder, you will find various hook files such as `pre-commit`, `pre-push`, etc. These files contain the commands that will be executed when the corresponding Git hook is triggered.
3. Open the desired hook file in a text editor.
4. Modify the commands as per your requirements. For example, you can add or remove linting or formatting commands, or include additional tests to be run before committing.
5. Save the changes to the hook file.

Once you have edited the Husky configuration, the updated commands will be executed automatically when the corresponding Git hook is triggered. This ensures that your code meets the defined quality standards before it is committed.




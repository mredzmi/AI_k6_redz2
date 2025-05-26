# AI-Powered Test Automation Framework (Playwright BDD & k6)

## Overview

This framework provides a comprehensive solution for automated testing, integrating UI testing with Playwright and Cucumber (BDD), and performance testing with k6. It also leverages OpenAI's GPT models to generate both Gherkin feature files for UI tests and k6 scripts for performance tests.

The primary goal is to accelerate the test creation process and provide a robust platform for ensuring application quality.

**Target Application:** `https://redz.izzone.net/testcase/`

**Technologies Used:**
*   Node.js
*   Playwright (for UI browser automation)
*   Cucumber.js (for Behavior-Driven Development - BDD)
*   k6 (for performance and load testing)
*   OpenAI (for AI-assisted test script generation)

## Directory Structure

*   `features/`: Contains Gherkin `.feature` files, which describe UI test scenarios in a human-readable format.
    *   `features/generated/`: Default location for AI-generated Gherkin feature files.
*   `step_definitions/`: Holds the JavaScript implementation (step definitions) for the Gherkin steps defined in `.feature` files.
*   `support/`: Contains helper files for the UI tests, such as:
    *   `hooks.js`: Manages browser lifecycle for Playwright tests.
    *   (Future) Page Object Models (POMs) or other reusable utility functions.
*   `performance_tests/`: Stores k6 JavaScript files for performance testing.
    *   `performance_tests/generated/`: Default location for AI-generated k6 performance test scripts.
*   `scripts/`: Contains various helper scripts, including:
    *   `generateUiTests.js`: Script to generate Gherkin feature files using OpenAI.
    *   `generatePerformanceTests.js`: Script to generate k6 performance test scripts using OpenAI.
*   `cucumber.js`: Configuration file for Cucumber.js.
*   `package.json`: Node.js project metadata and script definitions.
*   `.gitignore`: Specifies files and directories to be ignored by Git.
*   `.env.example`: Template for environment variables.
*   `README.md`: This documentation file.

## Setup Instructions

1.  **Clone the Repository:**
    ```bash
    git clone <your-repository-url>
    cd <project-directory-name>
    ```

2.  **Node.js:**
    Ensure you have Node.js installed (preferably the latest LTS version). You can download it from [nodejs.org](https://nodejs.org/).

3.  **Install Dependencies:**
    Install all project dependencies using npm:
    ```bash
    npm install
    ```

4.  **OpenAI API Key Setup:**
    An OpenAI API key is required for using the AI-powered test generation features.
    *   Copy the example environment file:
        ```bash
        cp .env.example .env
        ```
    *   Open the newly created `.env` file in a text editor.
    *   Replace `your_openai_api_key_here` with your actual OpenAI API key:
        ```env
        OPENAI_API_KEY=your_actual_openai_api_key_here
        ```
    *   Save the `.env` file. This file is included in `.gitignore` and will not be committed to the repository.

5.  **k6 Installation:**
    k6 is used for performance testing and needs to be installed separately as it's not an npm package.
    *   Follow the official installation instructions for your operating system: [k6 Installation Guide](https://k6.io/docs/getting-started/installation/).

## Running UI Tests (Playwright & Cucumber)

To execute the UI automation tests defined in the `.feature` files:
```bash
npm run test:ui
```
This command runs Cucumber.js, which will parse the feature files, find matching step definitions, and execute them using Playwright to interact with the browser. By default, tests run headlessly. You can change `headless: true` to `headless: false` in `support/hooks.js` to watch the browser execution.

## Generating UI Tests (AI-Powered)

Generate Gherkin feature files for UI tests using OpenAI:
```bash
npm run generate:ui -- --description "User registration with various data inputs" --output "features/generated/registration_tests.feature"
```
**Arguments:**
*   `--description "Your feature description"`: Provide a clear and concise description of the feature or user story you want to test. The AI will use this to generate relevant scenarios.
*   `--output "features/generated/my-feature.feature"`: Specify the path and filename for the generated `.feature` file. It's recommended to save generated files in the `features/generated/` directory.

After generation, you will need to implement any new step definitions in the `step_definitions/` directory if they don't already exist.

## Running Performance Tests (k6)

1.  **Basic Load Test:**
    To run the example performance test script provided:
    ```bash
    npm run test:performance
    ```
    This executes `performance_tests/basic-load-test.js`, which runs a simple load test against the target application.

2.  **Running Other k6 Scripts:**
    To run any other k6 script located in `performance_tests/` or its subdirectories:
    ```bash
    k6 run performance_tests/your_script_name.js
    ```
    Replace `your_script_name.js` with the actual name of your k6 script.

## Generating Performance Tests (AI-Powered)

Generate k6 performance test scripts using OpenAI:
```bash
npm run generate:perf -- --requirements "Simulate 50 users ramping up over 1 minute, maintaining load for 3 minutes, then ramping down over 1 minute. Focus on API endpoint /api/data." --output "performance_tests/generated/data_endpoint_load_test.js"
```
**Arguments:**
*   `--requirements "Your performance test requirements"`: Describe the desired load profile, target virtual users, duration, stages (ramp-up, peak, ramp-down), specific API endpoints, or any other relevant performance criteria.
*   `--output "performance_tests/generated/my-perf-test.js"`: Specify the path and filename for the generated k6 `.js` script. It's recommended to save generated files in the `performance_tests/generated/` directory.

Always review and, if necessary, adjust the AI-generated k6 scripts to ensure they accurately reflect your testing needs and target environment.

## Customization

This framework is designed to be extensible:

*   **UI Tests:**
    *   Write new `.feature` files manually or generate them using the AI script.
    *   Implement corresponding step definitions in `step_definitions/` using the Playwright API.
    *   Create Page Object Models (POMs) in the `support/` directory for better test maintenance and reusability.
    *   Modify the prompts in `scripts/generateUiTests.js` to fine-tune the AI's output for Gherkin generation.
*   **Performance Tests:**
    *   Write custom k6 scripts directly in the `performance_tests/` directory.
    *   Modify the prompts in `scripts/generatePerformanceTests.js` to tailor the AI-generated k6 scripts to specific performance testing scenarios or reporting requirements.
*   **Configuration:**
    *   Adjust Cucumber settings in `cucumber.js`.
    *   Modify Playwright browser launch options in `support/hooks.js`.

By combining manual test creation with AI-assisted generation, you can efficiently build a comprehensive test suite.
---

**Project Title Placeholder:** The initial line "# Project Title (Replace with actual title)" in the previous README was generic. I've replaced it with "# AI-Powered Test Automation Framework (Playwright BDD & k6)" as specified.
All other sections have been created or updated according to the subtask requirements.The `README.md` file has been updated and consolidated with all the required sections and information.

I will now submit the subtask report.

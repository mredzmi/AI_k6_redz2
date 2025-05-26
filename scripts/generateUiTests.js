require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateAndSaveFeatureFile(featureDescription, outputFilePath) {
  if (!process.env.OPENAI_API_KEY) {
    console.error('Error: OPENAI_API_KEY not found in .env file.');
    process.exit(1);
  }

  const prompt = `You are an expert test automation engineer. Generate a Gherkin feature file for Playwright UI automation.
The tests should be for the website: https://redz.izzone.net/testcase/
The feature to test is: ${featureDescription}

Ensure the Gherkin follows standard conventions (Given, When, Then).
Focus on creating realistic and testable scenarios.
Provide a clear Feature title and Scenario names.
Do not include step definitions, only the Gherkin syntax.
Example of desired output format:
Feature: User Login
  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid username "testuser" and password "password123"
    And the user clicks the login button
    Then the user should be redirected to the dashboard`;

  try {
    console.log('Generating Gherkin feature file...');
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const gherkinContent = response.choices[0].message.content.trim();
    
    // Ensure the output directory exists
    const outputDir = path.dirname(outputFilePath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputFilePath, gherkinContent);
    console.log(`Successfully generated and saved Gherkin feature file to: ${outputFilePath}`);
  } catch (error) {
    console.error('Error generating or saving Gherkin feature file:', error);
    if (error.response) {
      console.error('API Response Error Data:', error.response.data);
    }
    process.exit(1);
  }
}

// Command-line argument parsing
const args = process.argv.slice(2);
let featureDescription = '';
let outputFilePath = '';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--description' && i + 1 < args.length) {
    featureDescription = args[i + 1];
  } else if (args[i] === '--output' && i + 1 < args.length) {
    outputFilePath = args[i + 1];
  }
}

if (!featureDescription || !outputFilePath) {
  console.log('Usage: node scripts/generateUiTests.js --description "Your feature description" --output "features/generated/your_feature.feature"');
  process.exit(1);
}

generateAndSaveFeatureFile(featureDescription, outputFilePath);

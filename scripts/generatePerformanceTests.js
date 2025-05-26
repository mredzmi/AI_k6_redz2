require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateAndSaveK6Script(performanceRequirements, outputFilePath) {
  if (!process.env.OPENAI_API_KEY) {
    console.error('Error: OPENAI_API_KEY not found in .env file.');
    process.exit(1);
  }

  const prompt = `You are an expert performance test engineer. Generate a k6 JavaScript test script.
The target application is the backend of: https://redz.izzone.net/testcase/
The performance test requirements are: ${performanceRequirements}

Ensure the k6 script follows standard conventions.
Include imports like 'k6/http', 'k6'.
Define 'options' with stages for ramp-up, peak load, and ramp-down if specified or appropriate.
Include at least one HTTP request (e.g., GET or POST to a relevant endpoint). If no specific endpoint is given, use the base URL (https://redz.izzone.net/testcase/).
Include basic checks for response status (e.g., status 200).
Include thresholds for common metrics like http_req_failed and http_req_duration if appropriate.

Example of desired output format:
import http from 'k6/http';
import { sleep, check, group } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 50 }, // ramp up to 50 users
    { duration: '2m', target: 50 }, // stay at 50 users
    { duration: '1m', target: 0 },  // ramp down to 0 users
  ],
  thresholds: {
    'http_req_failed': ['rate<0.01'], // http errors should be less than 1%
    'http_req_duration': ['p(95)<200'], // 95% of requests should be below 200ms
  },
};

export default function () {
  group('User Authentication', function () {
    // If the requirements mention specific API endpoints or actions, model them here.
    // For example, a POST request for a login:
    // const loginPayload = JSON.stringify({ email: 'testuser@example.com', password: 'password123' });
    // const loginParams = { headers: { 'Content-Type': 'application/json' } };
    // const loginRes = http.post('https://redz.izzone.net/testcase/api/login', loginPayload, loginParams); // Adjust endpoint as needed
    // check(loginRes, {
    //   'login successful': (r) => r.status === 200,
    // });

    // If no specific endpoint is given, a simple GET request to the base URL is fine.
    const res = http.get('https://redz.izzone.net/testcase/');
    check(res, {
      'status is 200': (r) => r.status === 200,
      'response time is < 500ms': (r) => r.timings.duration < 500,
    });
  });
  sleep(1);
}

Do not include explanations, only the k6 script code.`;

  try {
    console.log('Generating k6 performance test script...');
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    let k6ScriptContent = response.choices[0].message.content.trim();

    // Remove potential markdown code block fences
    if (k6ScriptContent.startsWith('```javascript')) {
      k6ScriptContent = k6ScriptContent.substring('```javascript'.length);
    }
    if (k6ScriptContent.startsWith('```')) {
        k6ScriptContent = k6ScriptContent.substring('```'.length);
    }
    if (k6ScriptContent.endsWith('```')) {
      k6ScriptContent = k6ScriptContent.substring(0, k6ScriptContent.length - '```'.length);
    }
    k6ScriptContent = k6ScriptContent.trim();
    
    // Ensure the output directory exists
    const outputDir = path.dirname(outputFilePath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputFilePath, k6ScriptContent);
    console.log(`Successfully generated and saved k6 script to: ${outputFilePath}`);
  } catch (error) {
    console.error('Error generating or saving k6 script:', error);
    if (error.response) {
      console.error('API Response Error Data:', error.response.data);
    }
    process.exit(1);
  }
}

// Command-line argument parsing
const args = process.argv.slice(2);
let performanceRequirements = '';
let outputFilePath = '';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--requirements' && i + 1 < args.length) {
    performanceRequirements = args[i + 1];
  } else if (args[i] === '--output' && i + 1 < args.length) {
    outputFilePath = args[i + 1];
  }
}

if (!performanceRequirements || !outputFilePath) {
  console.log('Usage: node scripts/generatePerformanceTests.js --requirements "Your performance requirements" --output "performance_tests/generated/your_k6_script.js"');
  process.exit(1);
}

generateAndSaveK6Script(performanceRequirements, outputFilePath);

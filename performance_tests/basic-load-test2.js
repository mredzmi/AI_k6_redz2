import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "/report/bundle.js";
import { textSummary } from "/report/index.js";

export const options = {
  stages: [
    { duration: '5s', target: 1 },   // Ramp up to 50 VUs over 5 minutes
    { duration: '5s', target: 2 },   // Ramp up to 50 VUs over 5 minutes
 /*   { duration: '5m', target: 50 },   // Ramp up to 50 VUs over 5 minutes
    { duration: '10m', target: 500 }, // Ramp up to 500 VUs over 10 minutes
    { duration: '20m', target: 1000 }, // Ramp up to 1000 VUs over 20 minutes
    { duration: '40m', target: 2000 }, // Ramp up to 2000 VUs over 40 minutes
    { duration: '60m', target: 4000 }, // Ramp up to 4000 VUs over 60 minutes
 */
  ],
};

// Track stage start time for better stage identification
let testStartTime = Date.now();

// Function to determine current stage based on elapsed time
function getCurrentStage() {
  const elapsed = (Date.now() - testStartTime) / 1000; // Convert to seconds
  
  if (elapsed <= 5) return 'Stage-1';
  if (elapsed <= 10) return 'Stage-2';
  if (elapsed <= 315) return 'Stage-3'; // 5m + 5s + 5s
  if (elapsed <= 915) return 'Stage-4'; // 10m + previous
  if (elapsed <= 2115) return 'Stage-5'; // 20m + previous
  if (elapsed <= 4515) return 'Stage-6'; // 40m + previous
  return 'Stage-7'; // 60m + previous
}

export default function () {
  const currentStage = getCurrentStage();
  const endpoint = 'https://redz.izzone.net/testcase/';
  
  const res = http.get(endpoint, {
    tags: { 
      stage: currentStage,
      endpoint: endpoint
    }
  });
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is < 500ms': (r) => r.timings.duration < 500,
  }, { stage: currentStage });
  
  sleep(1);
}

// ✅ Auto-generate HTML report with timestamp + JSON for dashboard
export function handleSummary(data) {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-');
  const htmlFileName = `./report/k6-testcase-report-${timestamp}.html`;
  const jsonFileName = `./report/k6-testcase-data-${timestamp}.json`;

  // Add stage configuration to summary data
  data.stageConfig = options.stages;
  data.testInfo = {
    timestamp: timestamp,
    testType: 'staged-load-test',
    totalStages: options.stages.length
  };

  return {
    [htmlFileName]: htmlReport(data),
    [jsonFileName]: JSON.stringify(data, null, 2),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}

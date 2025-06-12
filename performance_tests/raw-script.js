import http from 'k6/http';
import { sleep, group } from 'k6';
import { htmlReport } from '/report/bundle.js';
import { textSummary } from '/report/index.js';
import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';

export const options = { vus: 10, duration: '5m' };

let testStartTime = Date.now();
function getCurrentStage() {
  const elapsed = (Date.now() - testStartTime) / 1000;
  return `Stage-${Math.floor(elapsed / 60) + 1}`;
}

export default function main() {
  const currentStage = getCurrentStage();
  let formData, response;
  const vars = {};

  // The following groups are generated from the raw recorder script
  // and have been omitted here for brevity. Paste the remaining
  // recorded groups below following the same structure.

  // TODO: Insert remaining groups here

  sleep(1);
}

export function handleSummary(data) {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-');
  const htmlFileName = `./report/k6-testcase-report-${timestamp}.html`;
  const jsonFileName = `./report/k6-testcase-data-${timestamp}.json`;

  data.stageConfig = options.stages ? options.stages : [{ vus: options.vus, duration: options.duration }];
  data.testInfo = {
    timestamp: timestamp,
    testType: 'raw-script-formatted',
    totalStages: data.stageConfig.length,
  };

  return {
    [htmlFileName]: htmlReport(data),
    [jsonFileName]: JSON.stringify(data, null, 2),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}

import http from 'k6/http';
import { sleep, check, group } from 'k6';
import { htmlReport } from "/report/bundle.js";
import { textSummary } from "/report/index.js";

export const options = {
  stages: [
    { duration: '1m', target: 1 },   // Ramp up to 1 VU over 5 seconds
    { duration: '2m', target: 2 },   // Ramp up to 2 VUs over 5 seconds
    { duration: '3m', target: 3 },   // Ramp up to 2 VUs over 5 seconds
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
  let response;

  // Page 1 - Homepage with all resources
  group('page_1 - https://sayalive.io/', function () {
    response = http.get('https://sayalive.io/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
      tags: { stage: currentStage, endpoint: 'homepage' }
    });
    
    check(response, {
      'homepage status is 200': (r) => r.status === 200,
      'homepage response time < 500ms': (r) => r.timings.duration < 500,
    }, { stage: currentStage });

    // Load CSS files
    http.batch([
      ['GET', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', null, { tags: { stage: currentStage, type: 'css' } }],
      ['GET', 'https://sayalive.io/assets/front/css/flaticon.css', null, { tags: { stage: currentStage, type: 'css' } }],
      ['GET', 'https://sayalive.io/assets/front/css/fontawesome.5.9.0.min.css', null, { tags: { stage: currentStage, type: 'css' } }],
      ['GET', 'https://sayalive.io/assets/front/css/bootstrap.4.5.3.min.css', null, { tags: { stage: currentStage, type: 'css' } }],
      ['GET', 'https://sayalive.io/assets/front/css/style.css?v=20250504_1551', null, { tags: { stage: currentStage, type: 'css' } }],
    ]);

    // Load JavaScript files
    http.batch([
      ['GET', 'https://sayalive.io/assets/front/js/jquery.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
      ['GET', 'https://sayalive.io/assets/front/js/bootstrap.4.5.3.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
      ['GET', 'https://sayalive.io/assets/front/js/script.js?v=250522', null, { tags: { stage: currentStage, type: 'js' } }],
    ]);

    // Load images
    http.batch([
      ['GET', 'https://sayalive.io/assets/admin/img/loader.gif', null, { tags: { stage: currentStage, type: 'image' } }],
      ['GET', 'https://sayalive.io/assets/admin/img/65c375772e109.svg', null, { tags: { stage: currentStage, type: 'image' } }],
      ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', null, { tags: { stage: currentStage, type: 'image' } }],
    ]);
  });

  sleep(1);

  // Page 2 - Event Page with all resources
  group('page_2 - https://sayalive.io/hausboomfestival2025', function () {
    response = http.get('https://sayalive.io/hausboomfestival2025', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
      tags: { stage: currentStage, endpoint: 'event_page' }
    });

    check(response, {
      'event page status is 200': (r) => r.status === 200,
      'event page response time < 500ms': (r) => r.timings.duration < 500,
    }, { stage: currentStage });

    // Load event-specific resources
    http.batch([
      ['GET', 'https://sayalive.io/assets/admin/css/summernote-content.css?v=20240807', null, { tags: { stage: currentStage, type: 'css' } }],
      ['GET', 'https://sayalive.io/assets/front/js/page_tracker.js?v=20250507', null, { tags: { stage: currentStage, type: 'js' } }],
      ['GET', 'https://sayalive.io/assets/front/js/event_checkout.js?v=202505272', null, { tags: { stage: currentStage, type: 'js' } }],
    ]);

    // Load event images
    http.batch([
      ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbcd881b6f_Banner_Event_v2.png', null, { tags: { stage: currentStage, type: 'image' } }],
      ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/organizer-photo/65d4623f18bc4_The%20Boom%20Group%20Letter%20Head-02.png', null, { tags: { stage: currentStage, type: 'image' } }],
    ]);

    // Load analytics
    http.batch([
      ['GET', 'https://www.googletagmanager.com/gtag/js?id=G-BY5N14K0MS', null, { tags: { stage: currentStage, type: 'analytics' } }],
      ['GET', 'https://connect.facebook.net/en_US/fbevents.js', null, { tags: { stage: currentStage, type: 'analytics' } }],
    ]);
  });

  sleep(1);

  // Page 3 - Checkout Page with all resources
  group('page_3 - https://sayalive.io/checkout?type=guest', function () {
    response = http.get('https://sayalive.io/checkout?type=guest', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
      tags: { stage: currentStage, endpoint: 'checkout' }
    });

    check(response, {
      'checkout page status is 200': (r) => r.status === 200,
      'checkout page response time < 500ms': (r) => r.timings.duration < 500,
    }, { stage: currentStage });

    // Load checkout-specific resources
    http.batch([
      ['GET', 'https://sayalive.io/assets/admin/css/check-out-v2.css', null, { tags: { stage: currentStage, type: 'css' } }],
      ['GET', 'https://sayalive.io/assets/front/js/extractor.js?v=20250426', null, { tags: { stage: currentStage, type: 'js' } }],
      ['GET', 'https://www.google.com/recaptcha/api.js?', null, { tags: { stage: currentStage, type: 'js' } }],
    ]);

    // Load payment gateway images
    http.batch([
      ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/online-gateways/logo/68401cc8154a9_black-removebg-preview.png', null, { tags: { stage: currentStage, type: 'image' } }],
      ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/683dbd15df937_hbm25_%20saylive%20thumbnail_v2.png', null, { tags: { stage: currentStage, type: 'image' } }],
    ]);
  });

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
    testType: 'staged-load-test-sayalive-user-journey',
    totalStages: options.stages.length,
    endpoints: ['homepage', 'event_page', 'checkout'],
    description: 'Complete user journey through sayalive.io with all sub-resources'
  };

  return {
    [htmlFileName]: htmlReport(data),
    [jsonFileName]: JSON.stringify(data, null, 2),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}

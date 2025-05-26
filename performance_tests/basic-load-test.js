import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10, // 10 virtual users
  duration: '30s', // for 30 seconds
};

export default function () {
  const res = http.get('https://redz.izzone.net/testcase/'); // Target the main page
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is < 500ms': (r) => r.timings.duration < 500,
  });
  sleep(1); // Wait for 1 second between iterations
}

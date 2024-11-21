import http from 'k6/http'
import { check, sleep } from 'k6'


const base_url = 'http://127.0.0.1:8000'

export const options = {
    // Key configurations for breakpoint in this section
    executor: 'ramping-arrival-rate', //Assure load increase if the system slows
    stages: [
      { duration: '1m', target: 1000 }, // just slowly ramp-up to a HUGE load
    //   { duration: '1m', target: 1000 }, // maintain VUs for another 1m
    ],
    thresholds: {
      http_req_failed: [{ threshold: 'rate<0.01', abortOnFail: true, delayAbortEval: "1s" }], // http errors should be less than 1%
      http_req_duration: [{ threshold: 'p(95)<1500', abortOnFail: true, delayAbortEval: "1s" }], // 95% of requests should be below 1s
    },
  };

export default function () {
  const data = { username: 'user@example.com', password: 'password' }
  const payload = JSON.stringify(data);
  const headers = { 'Content-Type': 'application/json' };
  const res = http.post(base_url + '/auth/login', payload, { headers });

 console.log(res.body)
  check(res, { 'success login': (r) => r.status === 200 })

  sleep(0.3)
}

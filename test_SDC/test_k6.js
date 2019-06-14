import { check } from "k6";
import http from "k6/http";
// import faker from '../ost_photos/node_modules/faker/locale/'
// console.log(faker.random.boolean);

const PORT = 3000;

export let options = {
  vus: 200,
  rps: 200,
  duration: "5m"
}

export default function () {
  let res = http.get(`http://localhost:${PORT}/`);
  check(res, {
    "is status 200": (r) => r.status === 200
  });
};

done [==========================================================] 5m0s / 5m0s

✗ is status 200
 ↳  99% — ✓ 59908 / ✗ 107

checks.....................: 99.82% ✓ 59892 ✗ 107  
data_received..............: 92 MB  305 kB/s
data_sent..................: 4.8 MB 16 kB/s
http_req_blocked...........: avg=9.67µs   min=0s      med=6µs      max=4.6ms    p(90)=10µs   p(95)=16µs  
http_req_connecting........: avg=2.17µs   min=0s      med=0s       max=2.27ms   p(90)=0s     p(95)=0s    
http_req_duration..........: avg=1.23ms   min=0s      med=1.01ms   max=108.98ms p(90)=1.44ms p(95)=1.92ms
http_req_receiving.........: avg=38.25µs  min=0s      med=33µs     max=4.1ms    p(90)=58µs   p(95)=72µs  
http_req_sending...........: avg=28.77µs  min=0s      med=25µs     max=2.91ms   p(90)=46µs   p(95)=59µs  
http_req_tls_handshaking...: avg=0s       min=0s      med=0s       max=0s       p(90)=0s     p(95)=0s    
http_req_waiting...........: avg=1.17ms   min=0s      med=946µs    max=108.89ms p(90)=1.36ms p(95)=1.81ms
http_reqs..................: 59999  199.996494/s
iteration_duration.........: avg=998.31ms min=29.26ms med=999.99ms max=1.1s     p(90)=1s     p(95)=1s    
iterations.................: 59999  199.996494/s
vus........................: 200    min=200 max=200
vus_max....................: 200    min=200 max=200
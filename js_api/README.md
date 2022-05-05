A "Hello World!" REST API demo using JavaScript and [Express](https://expressjs.com/) 4.18.1 on [Node.js](https://nodejs.org/en/) 16.15.0.

### Install Node.js

See https://nodejs.org/en/download/.

### Install Dependencies

```bash
npm install
npm prune
```

### Run Project

```bash
node app.js
```

### Run in Docker

```bash
docker build . -t js-api-docker -f Dockerfile
docker run -p 3002:3000 --rm js-api-docker
```

The API would be at ```localhost:3002```.

### Load Test Result (1 sec request delay)

```
running (01m41.3s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  01m41.2s/10m0s  10000/10000 shared iters

     data_received..................: 2.6 MB 26 kB/s
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=144.18µs min=0s      med=0s     max=47.45ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=66.65µs  min=0s      med=0s     max=30.17ms  p(90)=0s       p(95)=0s
     http_req_duration..............: avg=9.83ms   min=403.4µs med=7.95ms max=144.68ms p(90)=14.48ms  p(95)=17.01ms
       { expected_response:true }...: avg=9.83ms   min=403.4µs med=7.95ms max=144.68ms p(90)=14.48ms  p(95)=17.01ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 10000
     http_req_receiving.............: avg=51.17µs  min=0s      med=0s     max=3.79ms   p(90)=195.72µs p(95)=492.9µs
     http_req_sending...............: avg=18.66µs  min=0s      med=0s     max=9.89ms   p(90)=0s       p(95)=94.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=9.76ms   min=403.4µs med=7.87ms max=143.91ms p(90)=14.38ms  p(95)=16.93ms
     http_reqs......................: 10000  98.764457/s
     iteration_duration.............: avg=1.01s    min=1s      med=1.01s  max=1.18s    p(90)=1.01s    p(95)=1.01s
     iterations.....................: 10000  98.764457/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```

### Test Result 2 (High Loading, 0.1 sec request delay))

```
running (00m11.2s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  00m11.2s/10m0s  10000/10000 shared iters

     data_received..................: 2.6 MB 233 kB/s
     data_sent......................: 910 kB 81 kB/s
     http_req_blocked...............: avg=176.12µs min=0s       med=0s       max=42.33ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=168.22µs min=0s       med=0s       max=42.33ms  p(90)=0s       p(95)=0s
     http_req_duration..............: avg=8.93ms   min=496.6µs  med=5.88ms   max=186.84ms p(90)=17.49ms  p(95)=22.05ms
       { expected_response:true }...: avg=8.93ms   min=496.6µs  med=5.88ms   max=186.84ms p(90)=17.49ms  p(95)=22.05ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 10000
     http_req_receiving.............: avg=62.13µs  min=0s       med=0s       max=6.73ms   p(90)=329.79µs p(95)=499.8µs
     http_req_sending...............: avg=22.23µs  min=0s       med=0s       max=3.52ms   p(90)=0s       p(95)=98.52µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=8.85ms   min=366.5µs  med=5.8ms    max=186.84ms p(90)=17.41ms  p(95)=21.91ms
     http_reqs......................: 10000  891.81345/s
     iteration_duration.............: avg=111.46ms min=100.54ms med=108.18ms max=323.27ms p(90)=120.3ms  p(95)=126.71ms
     iterations.....................: 10000  891.81345/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```

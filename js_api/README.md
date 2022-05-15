A "Hello World!" REST API demo using JavaScript and [Express](https://expressjs.com/) 4.18.1 on [Node.js](https://nodejs.org/en/) 18.1.0.

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

### K6 Load Test (1 sec request delay)

CPU usage: ~3-6%

MEM usage: ~42 MiB

```
running (01m41.2s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  01m41.2s/10m0s  10000/10000 shared iters

     data_received..................: 2.6 MB 26 kB/s
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=148.98µs min=0s      med=0s     max=59.56ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=76.44µs  min=0s      med=0s     max=19.71ms  p(90)=0s       p(95)=0s
     http_req_duration..............: avg=9.66ms   min=374.6µs med=8.13ms max=132.34ms p(90)=14.65ms  p(95)=16.99ms
       { expected_response:true }...: avg=9.66ms   min=374.6µs med=8.13ms max=132.34ms p(90)=14.65ms  p(95)=16.99ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 10000
     http_req_receiving.............: avg=41.89µs  min=0s      med=0s     max=1.24ms   p(90)=127.31µs p(95)=348.38µs
     http_req_sending...............: avg=23.34µs  min=0s      med=0s     max=5.1ms    p(90)=0s       p(95)=77.33µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=9.6ms    min=374.6µs med=8.07ms max=131.99ms p(90)=14.55ms  p(95)=16.93ms
     http_reqs......................: 10000  98.820931/s
     iteration_duration.............: avg=1.01s    min=1s      med=1s     max=1.17s    p(90)=1.01s    p(95)=1.01s
     iterations.....................: 10000  98.820931/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```

### K6 Load Test (High Loading, 0.1 sec request delay))

CPU usage: ~25-40%

MEM usage: ~49 MiB

```
running (00m11.0s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  00m11.0s/10m0s  10000/10000 shared iters

     data_received..................: 2.6 MB 238 kB/s
     data_sent......................: 910 kB 83 kB/s
     http_req_blocked...............: avg=20.01µs  min=0s       med=0s      max=6.39ms   p(90)=0s       p(95)=0s
     http_req_connecting............: avg=7.16µs   min=0s       med=0s      max=6.39ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=6.79ms   min=373.1µs  med=4.83ms  max=114.19ms p(90)=12.22ms  p(95)=17.26ms
       { expected_response:true }...: avg=6.79ms   min=373.1µs  med=4.83ms  max=114.19ms p(90)=12.22ms  p(95)=17.26ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 10000
     http_req_receiving.............: avg=38.18µs  min=0s       med=0s      max=3.18ms   p(90)=113.9µs  p(95)=300.2µs
     http_req_sending...............: avg=14.49µs  min=0s       med=0s      max=3.02ms   p(90)=0s       p(95)=67.14µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=6.74ms   min=373.1µs  med=4.78ms  max=114.19ms p(90)=12.18ms  p(95)=17.19ms
     http_reqs......................: 10000  910.289918/s
     iteration_duration.............: avg=109.38ms min=100.53ms med=107.9ms max=217.4ms  p(90)=113.35ms p(95)=119.86ms
     iterations.....................: 10000  910.289918/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```

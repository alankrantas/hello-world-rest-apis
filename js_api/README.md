A "Hello World!" REST API demo using JavaScript and [Express](https://expressjs.com/) 4.18.1 on [Node.js](https://nodejs.org/en/) 18.1.0.

### Install Node.js

See https://nodejs.org/en/download/.

### Install Dependencies

```bash
npm install
npm prune
```

This will download Express. Add ```sudo``` at the beginning if you are installing it globally in Linux.

### Run Project

```bash
node app.js
```

### Run in Docker

```bash
docker build . -t js-api-docker -f Dockerfile
docker run -p 3000:3000 --rm js-api-docker
```

The API would be at ```localhost:3000```.

### K6 Load Test

#### 1 sec delay

CPU: ~3-7%

MEM: 51.4 MiB

```
running (01m41.2s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  01m41.2s/10m0s  10000/10000 shared iters

     data_received..................: 2.6 MB 26 kB/ 
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=21.35µs min=0s      med=0s     max=7.01ms   p(90)=0s       p(95)=0s
     http_req_connecting............: avg=7.45µs  min=0s      med=0s     max=2.54ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=7.58ms  min=401.4µs med=6.38ms max=126.58ms p(90)=11.13ms  p(95)=13.37ms
       { expected_response:true }...: avg=7.58ms  min=401.4µs med=6.38ms max=126.58ms p(90)=11.13ms  p(95)=13.37ms
     http_req_failed................: 0.00%  ✓ 0    
     ✗ 10000
     http_req_receiving.............: avg=37.9µs  min=0s      med=0s     max=1.5ms    p(90)=126.01µs p(95)=310.57µs
     http_req_sending...............: avg=16.79µs min=0s      med=0s     max=1.29ms   p(90)=0s       p(95)=72.9µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=7.52ms  min=401.4µs med=6.31ms max=126.08ms p(90)=11.06ms  p(95)=13.32ms
     http_reqs......................: 10000  98.781541/s
     iteration_duration.............: avg=1.01s   min=1s      med=1.01s  max=1.12s    p(90)=1.01s    p(95)=1.01s
     iterations.....................: 10000  98.781541/s
     vus............................: 100    min=100
     max=100
     vus_max........................: 100    min=100     max=100
```

#### 0.1 sec delay

CPU: ~25-40%

MEM: 50.7 MiB

```
running (00m10.9s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m10.9s/10m0s  10000/10000 shared iters

     data_received..................: 2.6 MB 240 kB/s
     data_sent......................: 910 kB 84 kB/ 
     http_req_blocked...............: avg=16.48µs  min=0s       med=0s       max=5.76ms   p(90)=0s       p(95)=0s
     http_req_connecting............: avg=9.67µs   min=0s       med=0s       max=4.95ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=5.88ms   min=424.8µs  med=4.54ms   max=39ms     p(90)=11.38ms  p(95)=15.42ms
       { expected_response:true }...: avg=5.88ms   min=424.8µs  med=4.54ms   max=39ms     p(90)=11.38ms  p(95)=15.42ms
     http_req_failed................: 0.00%  ✓ 0    
      ✗ 10000
     http_req_receiving.............: avg=43.48µs  min=0s       med=0s       max=997.4µs  p(90)=143.11µs p(95)=388.52µs
     http_req_sending...............: avg=17.36µs  min=0s       med=0s       max=2.6ms    p(90)=0s       p(95)=114.03µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=5.82ms   min=402µs    med=4.5ms    max=38.5ms   p(90)=11.24ms  p(95)=15.21ms
     http_reqs......................: 10000  917.700272/s
     iteration_duration.............: avg=108.57ms min=100.53ms med=107.94ms max=141.73ms p(90)=112.8ms  p(95)=117.57ms
     iterations.....................: 10000  917.700272/s
     vus............................: 100    min=100
      max=100
     vus_max........................: 100    min=100      max=100
```

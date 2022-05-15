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

CPU: ~30-40%

MEM: 51.3 MiB

```
running (00m11.0s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m11.0s/10m0s  10000/10000 shared iters

     data_received..................: 2.6 MB 236 kB/s
     data_sent......................: 910 kB 82 kB/ 
     http_req_blocked...............: avg=118.07µs min=0s       med=0s       max=44.19ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=41.85µs  min=0s       med=0s       max=19.43ms  p(90)=0s       p(95)=0s
     http_req_duration..............: avg=7.39ms   min=322.79µs med=4.81ms   max=157.91ms p(90)=11.48ms  p(95)=15ms
       { expected_response:true }...: avg=7.39ms   min=322.79µs med=4.81ms   max=157.91ms p(90)=11.48ms  p(95)=15ms
     http_req_failed................: 0.00%  ✓ 0    
     ✗ 10000
     http_req_receiving.............: avg=41.87µs  min=0s       med=0s       max=988.7µs  p(90)=147.51µs p(95)=380.16µs
     http_req_sending...............: avg=13.78µs  min=0s       med=0s       max=1.78ms   p(90)=0s       p(95)=75.15µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=7.33ms   min=322.79µs med=4.74ms   max=157.91ms p(90)=11.36ms  p(95)=14.91ms
     http_reqs......................: 10000  905.61424/s
     iteration_duration.............: avg=110.04ms min=100.6ms  med=107.99ms max=284.31ms p(90)=112.62ms p(95)=117.07ms
     iterations.....................: 10000  905.61424/s
     max=100
     vus_max........................: 100    min=100     max=100
```

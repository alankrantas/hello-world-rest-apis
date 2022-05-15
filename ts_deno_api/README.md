A "Hello World!" REST API demo using TypeScript and [Opine](https://deno.land/x/opine@2.2.0) 2.2.0 on [Deno](https://deno.land/) 1.21.3.

### Install Deno

See https://github.com/denoland/deno_install. (You can use scoop: https://scoop.sh/)

### Run Project

```bash
deno run --allow-net --allow-read --allow-env app.ts
```

You can run ```deno cache app.ts``` first to cache dependencies.

### Run in Docker

```bash
docker build . -t ts-deno-api-docker -f Dockerfile
docker run -p 3000:3000 --rm ts-deno-api-docker
```

The API would be at ```localhost:3000```.

### K6 Load Test

#### 1 sec delay

CPU: ~1.5-2.5%

MEM: 125.2 MiB

```
running (01m41.2s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  01m41.2s/10m0s  10000/10000 shared iters

     data_received..................: 2.4 MB 23 kB/ 
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=28.31µs min=0s     med=0s     max=6.28ms   p(90)=0s      p(95)=0s
     http_req_connecting............: avg=10.24µs min=0s     med=0s     max=4.78ms   p(90)=0s      p(95)=0s
     http_req_duration..............: avg=6.99ms  min=1.08ms med=5.87ms max=142.15ms p(90)=9.52ms  p(95)=10.38ms
       { expected_response:true }...: avg=6.99ms  min=1.08ms med=5.87ms max=142.15ms p(90)=9.52ms  p(95)=10.38ms
     http_req_failed................: 0.00%  ✓ 0    
     ✗ 10000
     http_req_receiving.............: avg=35.94µs min=0s     med=0s     max=1.02ms   p(90)=51.08µs p(95)=409.2µs
     http_req_sending...............: avg=18.31µs min=0s     med=0s     max=7.11ms   p(90)=0s      p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=6.94ms  min=1.08ms med=5.8ms  max=141.62ms p(90)=9.49ms  p(95)=10.31ms
     http_reqs......................: 10000  98.772278/s
     iteration_duration.............: avg=1.01s   min=1s     med=1.01s  max=1.14s    p(90)=1.01s   p(95)=1.02s
     iterations.....................: 10000  98.772278/s
     vus............................: 100    min=100
     max=100
     vus_max........................: 100    min=100     max=100
```

#### 0.1 sec delay

CPU: ~10-20%

MEM: 127.2 MiB

```
running (00m11.1s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m11.1s/10m0s  10000/10000 shared iters

     data_received..................: 2.4 MB 213 kB/s
     data_sent......................: 910 kB 82 kB/ 
     http_req_blocked...............: avg=23.17µs  min=0s       med=0s      max=8.07ms   p(90)=0s       p(95)=0s
     http_req_connecting............: avg=17.29µs  min=0s       med=0s      max=7.64ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=6.82ms   min=425.3µs  med=6.49ms  max=46.12ms  p(90)=10.47ms  p(95)=12.58ms
       { expected_response:true }...: avg=6.82ms   min=425.3µs  med=6.49ms  max=46.12ms  p(90)=10.47ms  p(95)=12.58ms
     http_req_failed................: 0.00%  ✓ 0    
     ✗ 10000
     http_req_receiving.............: avg=32.33µs  min=0s       med=0s      max=1.72ms   p(90)=0s       p(95)=341.71µs
     http_req_sending...............: avg=29.76µs  min=0s       med=0s      max=9ms      p(90)=0s       p(95)=101.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=6.76ms   min=425.3µs  med=6.47ms  max=46.12ms  p(90)=10.34ms  p(95)=12.54ms
     http_reqs......................: 10000  904.06284/s
     iteration_duration.............: avg=110.21ms min=101.53ms med=108.9ms max=151.26ms p(90)=115.39ms p(95)=122.18ms
     iterations.....................: 10000  904.06284/s
     vus............................: 77     min=77 
     max=100
     vus_max........................: 100    min=100     max=100
```

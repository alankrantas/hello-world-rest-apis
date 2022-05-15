A "Hello World!" REST API demo using [Golang](https://go.dev/) 1.18.2 and [Gin](https://github.com/gin-gonic/gin) 1.7.7.

### Install Golang

See https://go.dev/doc/install.

### Run Project

```bash
go run .
```

or

```bash
go build .
./go_api
```

Gin will be downloaded automatically.

### Run in Docker

```bash
docker build . -t go-api-docker -f Dockerfile
docker run -p 3000:3000 --rm go-api-docker
```

The API would be at ```localhost:3000```.

### K6 Load Test

#### 1 sec delay

CPU: ~0.5-1.5%

MEM: 16.1 MiB

```
running (01m41.2s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  01m41.2s/10m0s  10000/10000 shared iters

     data_received..................: 1.5 MB 15 kB/ 
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=11.03µs min=0s      med=0s     max=3.95ms   p(90)=0s     p(95)=0s
     http_req_connecting............: avg=3.73µs  min=0s      med=0s     max=2.09ms   p(90)=0s     p(95)=0s
     http_req_duration..............: avg=6.24ms  min=839.2µs med=4.79ms max=122.68ms p(90)=7.54ms p(95)=8.52ms
       { expected_response:true }...: avg=6.24ms  min=839.2µs med=4.79ms max=122.68ms p(90)=7.54ms p(95)=8.52ms
     http_req_failed................: 0.00%  ✓ 0    
    ✗ 10000
     http_req_receiving.............: avg=33.31µs min=0s      med=0s     max=4.7ms    p(90)=0s     p(95)=351.9µs
     http_req_sending...............: avg=18.97µs min=0s      med=0s     max=3.92ms   p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=6.19ms  min=839.2µs med=4.74ms max=122.52ms p(90)=7.42ms p(95)=8.43ms
     http_reqs......................: 10000  98.78779/s
     iteration_duration.............: avg=1.01s   min=1s      med=1.01s  max=1.12s    p(90)=1.01s  p(95)=1.01s
     iterations.....................: 10000  98.78779/s
     vus............................: 100    min=100
    max=100
     vus_max........................: 100    min=100    max=100
```

#### 0.1 sec delay

CPU: ~5-10%

MEM: 16.6 MiB

```
running (00m10.9s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m10.9s/10m0s  10000/10000 shared iters

     data_received..................: 1.5 MB 137 kB/s
     data_sent......................: 910 kB 84 kB/ 
     http_req_blocked...............: avg=20.14µs min=0s       med=0s       max=4.92ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=8.93µs  min=0s       med=0s       max=4.53ms  p(90)=0s       p(95)=0s
     http_req_duration..............: avg=3.72ms  min=1.05ms   med=3.41ms   max=30.81ms p(90)=5.04ms   p(95)=5.68ms
       { expected_response:true }...: avg=3.72ms  min=1.05ms   med=3.41ms   max=30.81ms p(90)=5.04ms   p(95)=5.68ms
     http_req_failed................: 0.00%  ✓ 0    
      ✗ 10000
     http_req_receiving.............: avg=33.89µs min=0s       med=0s       max=3.96ms  p(90)=0s       p(95)=400.11µs
     http_req_sending...............: avg=14.84µs min=0s       med=0s       max=1.53ms  p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s       max=0s      p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=3.67ms  min=997.7µs  med=3.34ms   max=30.81ms p(90)=4.99ms   p(95)=5.53ms
     http_reqs......................: 10000  919.666624/s
     iteration_duration.............: avg=108.5ms min=101.56ms med=108.33ms max=135.8ms p(90)=109.49ms p(95)=109.93ms
     iterations.....................: 10000  919.666624/s
     vus............................: 100    min=100
      max=100
     vus_max........................: 100    min=100      max=100
```

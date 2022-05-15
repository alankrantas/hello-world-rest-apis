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

CPU: ~8-10%

MEM: 14.6 MiB

```
running (00m10.9s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m10.9s/10m0s  10000/10000 shared iters

     data_received..................: 1.5 MB 137 kB/s
     data_sent......................: 910 kB 83 kB/ 
     http_req_blocked...............: avg=14.91µs  min=0s       med=0s       max=4ms      p(90)=0s       p(95)=0s
     http_req_connecting............: avg=5.32µs   min=0s       med=0s       max=2.84ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=3.44ms   min=1ms      med=2.9ms    max=69.68ms  p(90)=4.44ms   p(95)=5.58ms
       { expected_response:true }...: avg=3.44ms   min=1ms      med=2.9ms    max=69.68ms  p(90)=4.44ms   p(95)=5.58ms
     http_req_failed................: 0.00%  ✓ 0    
      ✗ 10000
     http_req_receiving.............: avg=35.29µs  min=0s       med=0s       max=3.5ms    p(90)=0s       p(95)=409.9µs
     http_req_sending...............: avg=13.34µs  min=0s       med=0s       max=2.85ms   p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=3.39ms   min=1ms      med=2.86ms   max=69.68ms  p(90)=4.39ms   p(95)=5.45ms
     http_reqs......................: 10000  916.274241/s
     iteration_duration.............: avg=108.88ms min=103.65ms med=108.24ms max=187.52ms p(90)=109.86ms p(95)=110.56ms
     iterations.....................: 10000  916.274241/s
     vus............................: 100    min=100
      max=100
     vus_max........................: 100    min=100      max=100
```

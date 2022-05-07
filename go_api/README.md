A "Hello World!" REST API demo using [Golang](https://go.dev/) 1.18.1 and [Gin](https://github.com/gin-gonic/gin) 1.7.7.

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
docker run -p 3004:3000 --rm go-api-docker
```

The API would be at ```localhost:3004```.

### K6 Load Test (1 sec request delay)

CPU usage: ~0.6-2%

MEM usage: ~15 MiB

```
running (01m41.4s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  01m41.4s/10m0s  10000/10000 shared iters

     data_received..................: 1.5 MB 15 kB/s
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=9.91µs  min=0s  med=0s     max=6.61ms  p(90)=0s     p(95)=0s
     http_req_connecting............: avg=4.61µs  min=0s  med=0s     max=6.61ms  p(90)=0s     p(95)=0s
     http_req_duration..............: avg=6.63ms  min=1ms med=6.08ms max=76.73ms p(90)=9.1ms  p(95)=10.09ms
       { expected_response:true }...: avg=6.63ms  min=1ms med=6.08ms max=76.73ms p(90)=9.1ms  p(95)=10.09ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 10000
     http_req_receiving.............: avg=36.01µs min=0s  med=0s     max=4.99ms  p(90)=0s     p(95)=495.01µs
     http_req_sending...............: avg=24.96µs min=0s  med=0s     max=4.52ms  p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s  med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=6.57ms  min=1ms med=6.04ms max=76.35ms p(90)=9.06ms p(95)=10.05ms
     http_reqs......................: 10000  98.651775/s
     iteration_duration.............: avg=1.01s   min=1s  med=1.01s  max=1.08s   p(90)=1.02s  p(95)=1.02s
     iterations.....................: 10000  98.651775/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```

### K6 Load Test (High Loading, 0.1 sec request delay))

CPU usage: ~8-14%

MEM usage: ~15 MiB

```
running (00m11.0s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  00m11.0s/10m0s  10000/10000 shared iters

     data_received..................: 1.5 MB 136 kB/s
     data_sent......................: 910 kB 83 kB/s
     http_req_blocked...............: avg=69.73µs  min=0s       med=0s       max=16.15ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=59.2µs   min=0s       med=0s       max=15ms     p(90)=0s       p(95)=0s
     http_req_duration..............: avg=4.38ms   min=1ms      med=3.42ms   max=92.19ms  p(90)=6.27ms   p(95)=7.24ms
       { expected_response:true }...: avg=4.38ms   min=1ms      med=3.42ms   max=92.19ms  p(90)=6.27ms   p(95)=7.24ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 10000
     http_req_receiving.............: avg=43.46µs  min=0s       med=0s       max=2ms      p(90)=108.5µs  p(95)=497.6µs
     http_req_sending...............: avg=39.77µs  min=0s       med=0s       max=11.69ms  p(90)=0s       p(95)=2.52µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=4.29ms   min=1ms      med=3.36ms   max=87.22ms  p(90)=6.18ms   p(95)=7.18ms
     http_reqs......................: 10000  912.862267/s
     iteration_duration.............: avg=109.05ms min=103.25ms med=108.08ms max=198.54ms p(90)=109.75ms p(95)=110.76ms
     iterations.....................: 10000  912.862267/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```

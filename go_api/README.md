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

### Load Test Result (1 sec request delay)

```
running (01m41.1s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  01m41.1s/10m0s  10000/10000 shared iters

     data_received..................: 1.5 MB 15 kB/s
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=71.06µs min=0s      med=0s     max=20.21ms  p(90)=0s     p(95)=0s
     http_req_connecting............: avg=60.38µs min=0s      med=0s     max=19.61ms  p(90)=0s     p(95)=0s
     http_req_duration..............: avg=5.12ms  min=1.38ms  med=4.16ms max=116.19ms p(90)=6.91ms p(95)=8.29ms
       { expected_response:true }...: avg=5.12ms  min=1.38ms  med=4.16ms max=116.19ms p(90)=6.91ms p(95)=8.29ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 10000
     http_req_receiving.............: avg=32.92µs min=0s      med=0s     max=4.03ms   p(90)=0s     p(95)=314.31µs
     http_req_sending...............: avg=29.68µs min=0s      med=0s     max=16.71ms  p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=5.06ms  min=886.7µs med=4.12ms max=114.69ms p(90)=6.82ms p(95)=8.26ms
     http_reqs......................: 10000  98.883045/s
     iteration_duration.............: avg=1.01s   min=1s      med=1s     max=1.13s    p(90)=1.01s  p(95)=1.02s
     iterations.....................: 10000  98.883045/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```

### Test Result 2 (High Loading, 0.1 sec request delay))

```
running (00m11.2s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  00m11.2s/10m0s  10000/10000 shared iters

     data_received..................: 1.5 MB 133 kB/s
     data_sent......................: 910 kB 81 kB/s
     http_req_blocked...............: avg=45.29µs  min=0s       med=0s       max=22.27ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=22.54µs  min=0s       med=0s       max=12.12ms  p(90)=0s       p(95)=0s
     http_req_duration..............: avg=6.68ms   min=1.38ms   med=5.91ms   max=122.24ms p(90)=8.67ms   p(95)=10.38ms
       { expected_response:true }...: avg=6.68ms   min=1.38ms   med=5.91ms   max=122.24ms p(90)=8.67ms   p(95)=10.38ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 10000
     http_req_receiving.............: avg=32.49µs  min=0s       med=0s       max=3.46ms   p(90)=0s       p(95)=341.85µs
     http_req_sending...............: avg=30.7µs   min=0s       med=0s       max=8.65ms   p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=6.61ms   min=1.32ms   med=5.84ms   max=121.73ms p(90)=8.63ms   p(95)=10.2ms
     http_reqs......................: 10000  891.945646/s
     iteration_duration.............: avg=111.34ms min=102.83ms med=108.64ms max=238.11ms p(90)=122.73ms p(95)=123.78ms
     iterations.....................: 10000  891.945646/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```

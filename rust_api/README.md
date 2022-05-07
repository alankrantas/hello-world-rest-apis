A "Hello World!" REST API demo using [Rust](https://www.rust-lang.org/) 1.60 and [Axum](https://github.com/tokio-rs/axum) 0.5.4.

## Install Rust

See https://www.rust-lang.org/tools/install.

### Run Project

```bash
cargo run --release
```

or

```bash
cargo build --release
./target/release/rust-api
```

Axum will be downloaded automatically.

### Clean Project Build

```bash
cargo clean
```

### Run in Docker

```bash
docker build . -t rust-api-docker -f Dockerfile
docker run -p 3005:3000 --rm rust-api-docker
```

The API would be at ```localhost:3005```.

### K6 Load Test (1 sec request delay)

CPU usage: ~0.3-1%

MEM usage: ~5 MiB

```
running (01m41.1s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  01m41.1s/10m0s  10000/10000 shared iters

     data_received..................: 1.3 MB 13 kB/s
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=27.7µs  min=0s     med=0s     max=11.77ms p(90)=0s     p(95)=0s
     http_req_connecting............: avg=14.99µs min=0s     med=0s     max=9.27ms  p(90)=0s     p(95)=0s
     http_req_duration..............: avg=4.29ms  min=1.15ms med=3.99ms max=49.11ms p(90)=6.17ms p(95)=6.82ms
       { expected_response:true }...: avg=4.29ms  min=1.15ms med=3.99ms max=49.11ms p(90)=6.17ms p(95)=6.82ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 10000
     http_req_receiving.............: avg=28µs    min=0s     med=0s     max=1.73ms  p(90)=0s     p(95)=272.61µs
     http_req_sending...............: avg=18.53µs min=0s     med=0s     max=1.84ms  p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=4.25ms  min=1.15ms med=3.97ms max=48.61ms p(90)=6.11ms p(95)=6.82ms
     http_reqs......................: 10000  98.876928/s
     iteration_duration.............: avg=1.01s   min=1s     med=1.01s  max=1.06s   p(90)=1.01s  p(95)=1.01s
     iterations.....................: 10000  98.876928/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```

### K6 Load Test (High Loading, 0.1 sec request delay))

CPU usage: ~3-7%

MEM usage: ~5 MiB

```
running (00m10.9s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  00m10.9s/10m0s  10000/10000 shared iters

     data_received..................: 1.3 MB 123 kB/s
     data_sent......................: 910 kB 84 kB/s
     http_req_blocked...............: avg=37.71µs  min=0s       med=0s       max=7.28ms   p(90)=0s       p(95)=0s
     http_req_connecting............: avg=15.03µs  min=0s       med=0s       max=5.15ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=4.34ms   min=852.8µs  med=4.15ms   max=64.04ms  p(90)=5.94ms   p(95)=6.45ms
       { expected_response:true }...: avg=4.34ms   min=852.8µs  med=4.15ms   max=64.04ms  p(90)=5.94ms   p(95)=6.45ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 10000
     http_req_receiving.............: avg=40.35µs  min=0s       med=0s       max=2.76ms   p(90)=73.94µs  p(95)=483.61µs
     http_req_sending...............: avg=19.56µs  min=0s       med=0s       max=4ms      p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=4.28ms   min=852.8µs  med=4.08ms   max=63.54ms  p(90)=5.87ms   p(95)=6.35ms
     http_reqs......................: 10000  917.527609/s
     iteration_duration.............: avg=108.75ms min=101.26ms med=108.28ms max=171.78ms p(90)=109.95ms p(95)=110.5ms
     iterations.....................: 10000  917.527609/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```

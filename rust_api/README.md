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

### Load Test Result (1 sec request delay)

```
running (01m41.1s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  01m41.1s/10m0s  10000/10000 shared iters

     data_received..................: 1.3 MB 13 kB/s
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=38.51µs min=0s    med=0s     max=6.02ms  p(90)=0s     p(95)=0s
     http_req_connecting............: avg=24.68µs min=0s    med=0s     max=4.27ms  p(90)=0s     p(95)=0s
     http_req_duration..............: avg=4.04ms  min=1.3ms med=3.41ms max=77.42ms p(90)=5.32ms p(95)=5.84ms
       { expected_response:true }...: avg=4.04ms  min=1.3ms med=3.41ms max=77.42ms p(90)=5.32ms p(95)=5.84ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 10000
     http_req_receiving.............: avg=27.37µs min=0s    med=0s     max=1.3ms   p(90)=0s     p(95)=256.4µs
     http_req_sending...............: avg=19.8µs  min=0s    med=0s     max=2.34ms  p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=3.99ms  min=1.3ms med=3.38ms max=77.41ms p(90)=5.25ms p(95)=5.76ms
     http_reqs......................: 10000  98.913195/s
     iteration_duration.............: avg=1.01s   min=1s    med=1s     max=1.08s   p(90)=1.01s  p(95)=1.01s
     iterations.....................: 10000  98.913195/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```

### Test Result 2 (High Loading, 0.1 sec request delay))

```
running (00m10.9s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  00m10.9s/10m0s  10000/10000 shared iters

     data_received..................: 1.3 MB 123 kB/s
     data_sent......................: 910 kB 83 kB/s
     http_req_blocked...............: avg=27.1µs   min=0s       med=0s       max=7.83ms   p(90)=0s       p(95)=0s
     http_req_connecting............: avg=9.99µs   min=0s       med=0s       max=3.5ms    p(90)=0s       p(95)=0s
     http_req_duration..............: avg=3.36ms   min=1.01ms   med=2.69ms   max=63.6ms   p(90)=4.61ms   p(95)=5.26ms
       { expected_response:true }...: avg=3.36ms   min=1.01ms   med=2.69ms   max=63.6ms   p(90)=4.61ms   p(95)=5.26ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 10000
     http_req_receiving.............: avg=31.54µs  min=0s       med=0s       max=4.2ms    p(90)=0s       p(95)=290.93µs
     http_req_sending...............: avg=17.92µs  min=0s       med=0s       max=8.89ms   p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=3.31ms   min=1.01ms   med=2.64ms   max=63.22ms  p(90)=4.49ms   p(95)=5.18ms
     http_reqs......................: 10000  914.844466/s
     iteration_duration.............: avg=108.78ms min=102.36ms med=108.18ms max=184.73ms p(90)=109.78ms p(95)=110.63ms
     iterations.....................: 10000  914.844466/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```

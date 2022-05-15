A "Hello World!" REST API demo using [Rust](https://www.rust-lang.org/) 1.60 and [Axum](https://github.com/tokio-rs/axum) 0.5.5.

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
docker run -p 3000:3000 --rm rust-api-docker
```

The API would be at ```localhost:3000```.

### K6 Load Test

#### 1 sec delay

CPU: ~0.5-1.5%

MEM: 2.5 MiB

```
running (01m41.2s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  01m41.2s/10m0s  10000/10000 shared iters

     data_received..................: 1.3 MB 13 kB/ 
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=31.95µs min=0s      med=0s     max=12.22ms p(90)=0s     p(95)=0s
     http_req_connecting............: avg=9.17µs  min=0s      med=0s     max=10.44ms p(90)=0s     p(95)=0s
     http_req_duration..............: avg=4.56ms  min=918.9µs med=4.29ms max=63.52ms p(90)=5.96ms p(95)=6.46ms
       { expected_response:true }...: avg=4.56ms  min=918.9µs med=4.29ms max=63.52ms p(90)=5.96ms p(95)=6.46ms
     http_req_failed................: 0.00%  ✓ 0    
     ✗ 10000
     http_req_receiving.............: avg=33.48µs min=0s      med=0s     max=3.43ms  p(90)=0s     p(95)=339.9µs
     http_req_sending...............: avg=20.95µs min=0s      med=0s     max=5.01ms  p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=4.5ms   min=918.9µs med=4.25ms max=62.01ms p(90)=5.88ms p(95)=6.4ms
     http_reqs......................: 10000  98.835711/s
     iteration_duration.............: avg=1.01s   min=1s      med=1.01s  max=1.08s   p(90)=1.01s  p(95)=1.01s
     iterations.....................: 10000  98.835711/s
     vus............................: 100    min=100
     max=100
     vus_max........................: 100    min=100     max=100
```

#### 0.1 sec delay

CPU: ~5-10%

MEM: 2.4 MiB

```
running (00m11.0s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m11.0s/10m0s  10000/10000 shared iters

     data_received..................: 1.3 MB 122 kB/s
     data_sent......................: 910 kB 83 kB/ 
     http_req_blocked...............: avg=28.08µs  min=0s       med=0s      max=5.35ms   p(90)=0s      p(95)=0s
     http_req_connecting............: avg=18.39µs  min=0s       med=0s      max=4.72ms   p(90)=0s      p(95)=0s
     http_req_duration..............: avg=3.75ms   min=894.8µs  med=2.91ms  max=75.63ms  p(90)=5.73ms  p(95)=6.25ms
       { expected_response:true }...: avg=3.75ms   min=894.8µs  med=2.91ms  max=75.63ms  p(90)=5.73ms  p(95)=6.25ms
     http_req_failed................: 0.00%  ✓ 0    
      ✗ 10000
     http_req_receiving.............: avg=31.24µs  min=0s       med=0s      max=2.2ms    p(90)=0s      p(95)=359.5µs
     http_req_sending...............: avg=15.76µs  min=0s       med=0s      max=1.51ms   p(90)=0s      p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=3.7ms    min=894.8µs  med=2.85ms  max=75.16ms  p(90)=5.66ms  p(95)=6.22ms
     http_reqs......................: 10000  911.847673/s
     iteration_duration.............: avg=109.26ms min=105.64ms med=108.7ms max=183.69ms p(90)=110.4ms p(95)=111.04ms
     iterations.....................: 10000  911.847673/s
     vus............................: 100    min=100
      max=100
     vus_max........................: 100    min=100      max=100
```

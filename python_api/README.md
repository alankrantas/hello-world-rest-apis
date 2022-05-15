A "Hello World!" REST API demo using [Python](https://www.python.org/) 3.10.4 and [Flask](https://flask.palletsprojects.com/en/2.1.x/) 2.1.2.

### Install Python

See https://www.python.org/downloads/.

### Install Flask

```bash
pip3 install flask
```

Add ```sudo``` at the beginning if you are installing it globally in Linux.

### Run Project

```bash
flask run -h 0.0.0.0 -p 3000
```

### Run in Docker (with uwsgi, 200 workers)

```bash
docker build . -t py-api-docker -f Dockerfile
docker run -p 3000:3000 --rm py-api-docker
```

The API would be at ```localhost:3000```.

### Run in Docker (no uwsgi)

```bash
docker build . -t py-no-wsgi-api-docker -f Dockerfile-no-wsgi
docker run -p 3000:3000 --rm py-no-wsgi-api-docker
```

### K6 Load Test

#### With uwsgi (1 sec delay)

CPU: ~10-20%

MEM: 656.8 MiB

```
running (01m41.5s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  01m41.5s/10m0s  10000/10000 shared iters

     data_received..................: 980 kB 9.7 kB/s
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=498.04µs min=0s     med=497.8µs  max=6.05ms   p(90)=1ms      p(95)=1.49ms
     http_req_connecting............: avg=420.96µs min=0s     med=435.85µs max=6.05ms   p(90)=989.76µs p(95)=1.21ms
     http_req_duration..............: avg=11.85ms  min=1.94ms med=9.49ms   max=107.81ms p(90)=21.04ms  p(95)=24.82ms
       { expected_response:true }...: avg=11.85ms  min=1.94ms med=9.49ms   max=107.81ms p(90)=21.04ms  p(95)=24.82ms
     http_req_failed................: 0.00%  ✓ 0    
    ✗ 10000
     http_req_receiving.............: avg=149.81µs min=0s     med=0s       max=4.76ms   p(90)=500.49µs p(95)=524.9µs
     http_req_sending...............: avg=80.7µs   min=0s     med=0s       max=4.21ms   p(90)=445.2µs  p(95)=500.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=11.62ms  min=1.49ms med=9.23ms   max=107.57ms p(90)=20.59ms  p(95)=24.27ms
     http_reqs......................: 10000  98.48545/s
     iteration_duration.............: avg=1.01s    min=1s     med=1.01s    max=1.11s    p(90)=1.02s    p(95)=1.03s
     iterations.....................: 10000  98.48545/s
     vus............................: 100    min=100
    max=100
     vus_max........................: 100    min=100    max=100
```

#### With uwsgi (0.1 sec delay)

CPU: ~150-200%

MEM: 666.9 MiB

```
running (00m11.4s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m11.4s/10m0s  10000/10000 shared iters

     data_received..................: 980 kB 86 kB/ 
     data_sent......................: 910 kB 80 kB/ 
     http_req_blocked...............: avg=491.93µs min=0s       med=442.1µs  max=16.26ms  p(90)=941.1µs  p(95)=1.21ms
     http_req_connecting............: avg=388.14µs min=0s       med=390.79µs max=15.65ms  p(90)=654.59µs p(95)=1.01ms
     http_req_duration..............: avg=10.58ms  min=1.77ms   med=8ms      max=79.97ms  p(90)=21.55ms  p(95)=27.05ms
       { expected_response:true }...: avg=10.58ms  min=1.77ms   med=8ms      max=79.97ms  p(90)=21.55ms  p(95)=27.05ms
     http_req_failed................: 0.00%  ✓ 0    
      ✗ 10000
     http_req_receiving.............: avg=128.29µs min=0s       med=0s       max=3.5ms    p(90)=499.6µs  p(95)=503.1µs
     http_req_sending...............: avg=90.57µs  min=0s       med=0s       max=6.6ms    p(90)=447.61µs p(95)=501µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=10.36ms  min=1.77ms   med=7.83ms   max=79.97ms  p(90)=21.18ms  p(95)=26.5ms
     http_reqs......................: 10000  877.191951/s
     iteration_duration.............: avg=113.5ms  min=102.32ms med=110.37ms max=195.22ms p(90)=124.74ms p(95)=131.54ms
     iterations.....................: 10000  877.191951/s
     vus............................: 100    min=100
      max=100
     vus_max........................: 100    min=100      max=100
```

#### No uwsgi (1 sec delay)

CPU: ~20% (~30% at the beginning)

MEM: 18.4 MiB

```
running (01m41.7s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  01m41.7s/10m0s  10000/10000 shared iters

     data_received..................: 1.9 MB 19 kB/ 
     data_sent......................: 910 kB 9.0 kB/s
     http_req_blocked...............: avg=910.24µs min=0s     med=566.25µs max=22.8ms   p(90)=1.56ms   p(95)=2.56ms
     http_req_connecting............: avg=815.88µs min=0s     med=502.29µs max=22.56ms  p(90)=1.5ms    p(95)=2.36ms
     http_req_duration..............: avg=13.76ms  min=1.43ms med=11.41ms  max=145.8ms  p(90)=24.52ms  p(95)=29.62ms
       { expected_response:true }...: avg=13.76ms  min=1.43ms med=11.41ms  max=145.8ms  p(90)=24.52ms  p(95)=29.62ms
     http_req_failed................: 0.00%  ✓ 0    
     ✗ 10000
     http_req_receiving.............: avg=465.5µs  min=0s     med=284.1µs  max=12.81ms  p(90)=1.25ms   p(95)=1.5ms
     http_req_sending...............: avg=85.68µs  min=0s     med=0s       max=10.37ms  p(90)=366.44µs p(95)=498.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=13.21ms  min=1.24ms med=10.79ms  max=145.43ms p(90)=23.97ms  p(95)=28.99ms
     http_reqs......................: 10000  98.375034/s
     iteration_duration.............: avg=1.01s    min=1s     med=1.01s    max=1.15s    p(90)=1.02s    p(95)=1.03s
     iterations.....................: 10000  98.375034/s
     vus............................: 100    min=100
     max=100
     vus_max........................: 100    min=100     max=100
```

#### No uwsgi (0.1 sec delay)

CPU: ~110-120%

MEM: 18.6 MiB

```
running (00m17.3s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m17.3s/10m0s  10000/10000 shared iters

     data_received..................: 1.9 MB 111 kB/s
     data_sent......................: 910 kB 53 kB/ 
     http_req_blocked...............: avg=3.22ms   min=0s       med=665.05µs max=103.81ms p(90)=8.89ms   p(95)=17.66ms
     http_req_connecting............: avg=3.09ms   min=0s       med=563.94µs max=103.81ms p(90)=8.42ms   p(95)=16.96ms
     http_req_duration..............: avg=64.57ms  min=3.13ms   med=53.95ms  max=204.19ms p(90)=102.25ms p(95)=122.95ms
       { expected_response:true }...: avg=64.57ms  min=3.13ms   med=53.95ms  max=204.19ms p(90)=102.25ms p(95)=122.95ms
     http_req_failed................: 0.00%  ✓ 0    
      ✗ 10000
     http_req_receiving.............: avg=852.57µs min=0s       med=380.2µs  max=150.86ms p(90)=1.5ms    p(95)=2.05ms
     http_req_sending...............: avg=186.98µs min=0s       med=0s       max=30.18ms  p(90)=397.21µs p(95)=500.49µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=63.53ms  min=2.22ms   med=53.32ms  max=202.44ms p(90)=100.27ms p(95)=119.62ms
     http_reqs......................: 10000  579.431736/s
     iteration_duration.............: avg=171.62ms min=114.69ms med=157.18ms max=335.31ms p(90)=219.37ms p(95)=235.87ms
     iterations.....................: 10000  579.431736/s
     vus............................: 100    min=100
      max=100
     vus_max........................: 100    min=100      max=100
```

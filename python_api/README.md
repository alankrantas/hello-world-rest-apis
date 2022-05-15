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

MEM: 651.3 MiB

```
running (00m11.3s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m11.3s/10m0s  10000/10000 shared iters

     data_received..................: 980 kB 87 kB/ 
     data_sent......................: 910 kB 80 kB/ 
     http_req_blocked...............: avg=473.24µs min=0s       med=427.2µs  max=15.04ms  p(90)=668.57µs p(95)=999.9µs
     http_req_connecting............: avg=406.6µs  min=0s       med=375.4µs  max=15.02ms  p(90)=591.37µs p(95)=911.47µs
     http_req_duration..............: avg=9.98ms   min=1.77ms   med=7.5ms    max=104.95ms p(90)=18.55ms  p(95)=23.79ms
       { expected_response:true }...: avg=9.98ms   min=1.77ms   med=7.5ms    max=104.95ms p(90)=18.55ms  p(95)=23.79ms
     http_req_failed................: 0.00%  ✓ 0    
      ✗ 10000
     http_req_receiving.............: avg=131.19µs min=0s       med=0s       max=7.04ms   p(90)=499.7µs  p(95)=501.9µs
     http_req_sending...............: avg=81.65µs  min=0s       med=0s       max=6.9ms    p(90)=398.14µs p(95)=500.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=9.77ms   min=1.77ms   med=7.44ms   max=103.65ms p(90)=18.32ms  p(95)=23.49ms
     http_reqs......................: 10000  882.897227/s
     iteration_duration.............: avg=112.69ms min=102.61ms med=109.66ms max=214.07ms p(90)=122.86ms p(95)=127.13ms
     iterations.....................: 10000  882.897227/s
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

CPU: ~125-135%

MEM: 18.5 MiB

```
running (00m17.0s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m17.0s/10m0s  10000/10000 shared iters

     data_received..................: 1.9 MB 113 kB/s
     data_sent......................: 910 kB 54 kB/ 
     http_req_blocked...............: avg=671.02µs min=0s       med=501.49µs max=13.94ms  p(90)=1ms      p(95)=1.5ms
     http_req_connecting............: avg=579.94µs min=0s       med=499.4µs  max=13.66ms  p(90)=1ms      p(95)=1.49ms
     http_req_duration..............: avg=67.38ms  min=17.26ms  med=67.92ms  max=163.76ms p(90)=83.71ms  p(95)=93.04ms
       { expected_response:true }...: avg=67.38ms  min=17.26ms  med=67.92ms  max=163.76ms p(90)=83.71ms  p(95)=93.04ms
     http_req_failed................: 0.00%  ✓ 0    
      ✗ 10000
     http_req_receiving.............: avg=549.28µs min=0s       med=376.75µs max=7.87ms   p(90)=1.47ms   p(95)=1.64ms
     http_req_sending...............: avg=85.25µs  min=0s       med=0s       max=5.52ms   p(90)=361.24µs p(95)=498.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=66.75ms  min=14.19ms  med=67.37ms  max=162.59ms p(90)=83.1ms   p(95)=92.1ms
     http_reqs......................: 10000  589.891188/s
     iteration_duration.............: avg=168.75ms min=118.88ms med=169.35ms max=271.87ms p(90)=185.36ms p(95)=194.81ms
     iterations.....................: 10000  589.891188/s
     vus............................: 100    min=100
      max=100
     vus_max........................: 100    min=100      max=100
```

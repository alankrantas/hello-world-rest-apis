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

or


```bash
python3 app.py
```

(use ```python app.py``` on Windows)

### Run in Docker

```bash
docker build . -t py-api-docker -f Dockerfile
docker run -p 3001:3000 --rm py-api-docker
```

The API would be at ```localhost:3001```.

### K6 Load Test (1 sec request delay)

CPU usage: ~22%

MEM usage: ~18.5 MiB

```
running (01m42.0s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  01m42.0s/10m0s  10000/10000 shared iters

     data_received..................: 1.9 MB 19 kB/s
     data_sent......................: 910 kB 8.9 kB/s
     http_req_blocked...............: avg=1.4ms    min=0s      med=787.1µs max=32.32ms  p(90)=3ms      p(95)=5.04ms
     http_req_connecting............: avg=1.3ms    min=0s      med=667.5µs max=32.32ms  p(90)=2.91ms   p(95)=4.78ms
     http_req_duration..............: avg=15.31ms  min=1.49ms  med=12.49ms max=207.75ms p(90)=27.8ms   p(95)=36ms
       { expected_response:true }...: avg=15.31ms  min=1.49ms  med=12.49ms max=207.75ms p(90)=27.8ms   p(95)=36ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 10000
     http_req_receiving.............: avg=513.31µs min=0s      med=292.3µs max=18.91ms  p(90)=1.47ms   p(95)=1.67ms
     http_req_sending...............: avg=73.11µs  min=0s      med=0s      max=5.29ms   p(90)=414.21µs p(95)=500.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=14.73ms  min=999.9µs med=11.75ms max=206.94ms p(90)=27.02ms  p(95)=35.34ms
     http_reqs......................: 10000  98.018259/s
     iteration_duration.............: avg=1.01s    min=1s      med=1.01s   max=1.2s     p(90)=1.03s    p(95)=1.03s
     iterations.....................: 10000  98.018259/s
     vus............................: 9      min=9       max=100
     vus_max........................: 100    min=100     max=100
```

### K6 Load Test (High Loading, 0.1 sec request delay)


CPU usage: ~130%

MEM usage: ~19 MiB

```
running (00m32.8s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  00m32.8s/10m0s  10000/10000 shared iters

     data_received..................: 1.9 MB 59 kB/s
     data_sent......................: 910 kB 28 kB/s
     http_req_blocked...............: avg=8.02ms   min=0s       med=2.99ms   max=400.49ms p(90)=17.86ms  p(95)=29.73ms
     http_req_connecting............: avg=7.8ms    min=0s       med=2.77ms   max=393.22ms p(90)=17.35ms  p(95)=28.99ms
     http_req_duration..............: avg=214.53ms min=4.8ms    med=213.91ms max=853.2ms  p(90)=337.1ms  p(95)=424.99ms
       { expected_response:true }...: avg=214.53ms min=4.8ms    med=213.91ms max=853.2ms  p(90)=337.1ms  p(95)=424.99ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 10000
     http_req_receiving.............: avg=1.36ms   min=0s       med=502.1µs  max=313.94ms p(90)=3ms      p(95)=4.5ms
     http_req_sending...............: avg=191.05µs min=0s       med=0s       max=63.28ms  p(90)=499.7µs  p(95)=503.49µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=212.97ms min=4.8ms    med=212.89ms max=852.7ms  p(90)=334.95ms p(95)=420.93ms
     http_reqs......................: 10000  305.253265/s
     iteration_duration.............: avg=326.18ms min=124.77ms med=322.27ms max=996.38ms p(90)=477.86ms p(95)=570.25ms
     iterations.....................: 10000  305.253265/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```

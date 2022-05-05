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

### Load Test Result (1 sec request delay)

```
running (01m42.1s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  01m42.1s/10m0s  10000/10000 shared iters

     data_received..................: 1.9 MB 19 kB/s
     data_sent......................: 910 kB 8.9 kB/s
     http_req_blocked...............: avg=1.22ms   min=0s     med=633µs    max=28.24ms  p(90)=2.53ms   p(95)=4.41ms
     http_req_connecting............: avg=1.13ms   min=0s     med=525.65µs max=28.24ms  p(90)=2.43ms   p(95)=4.24ms
     http_req_duration..............: avg=15.65ms  min=1.49ms med=13.48ms  max=151.96ms p(90)=28.25ms  p(95)=35.54ms
       { expected_response:true }...: avg=15.65ms  min=1.49ms med=13.48ms  max=151.96ms p(90)=28.25ms  p(95)=35.54ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 10000
     http_req_receiving.............: avg=521.08µs min=0s     med=327.35µs max=15.9ms   p(90)=1.41ms   p(95)=1.65ms
     http_req_sending...............: avg=76.68µs  min=0s     med=0s       max=3.62ms   p(90)=348.73µs p(95)=499.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=15.06ms  min=1.4ms  med=12.9ms   max=151.32ms p(90)=27.66ms  p(95)=34.84ms
     http_reqs......................: 10000  97.947393/s
     iteration_duration.............: avg=1.01s    min=1s     med=1.01s    max=1.15s    p(90)=1.03s    p(95)=1.03s
     iterations.....................: 10000  97.947393/s
     vus............................: 31     min=31      max=100
     vus_max........................: 100    min=100     max=100
```

### Test Result 2 (High Loading, 0.1 sec request delay)

```
running (00m17.1s), 000/100 VUs, 10000 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  00m17.1s/10m0s  10000/10000 shared iters

     data_received..................: 1.9 MB 113 kB/s
     data_sent......................: 910 kB 53 kB/s
     http_req_blocked...............: avg=781.03µs min=0s       med=501.2µs  max=23.35ms  p(90)=1.33ms   p(95)=2ms
     http_req_connecting............: avg=687.74µs min=0s       med=499.4µs  max=23.35ms  p(90)=1.2ms    p(95)=1.95ms
     http_req_duration..............: avg=68.04ms  min=17.39ms  med=65ms     max=158.33ms p(90)=83.03ms  p(95)=94.16ms
       { expected_response:true }...: avg=68.04ms  min=17.39ms  med=65ms     max=158.33ms p(90)=83.03ms  p(95)=94.16ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 10000
     http_req_receiving.............: avg=593.55µs min=0s       med=410.8µs  max=39.28ms  p(90)=1.49ms   p(95)=1.79ms
     http_req_sending...............: avg=118.15µs min=0s       med=0s       max=29.43ms  p(90)=367.94µs p(95)=500µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=67.33ms  min=3.63ms   med=64.3ms   max=154.77ms p(90)=82.28ms  p(95)=92.95ms
     http_reqs......................: 10000  586.078762/s
     iteration_duration.............: avg=169.7ms  min=123.35ms med=166.38ms max=270.62ms p(90)=185.3ms  p(95)=197.49ms
     iterations.....................: 10000  586.078762/s
     vus............................: 33     min=33       max=100
     vus_max........................: 100    min=100      max=100
```

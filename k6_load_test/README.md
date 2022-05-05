### K6 Load Test

Install K6 (see https://k6.io/docs/getting-started/installation/). You need to set the $PATH to k6's path, for example, ```C:\Program Files\k6``` on Windows.

Then run

```bash
k6 run k6_load_test.js
```

Change the ```port``` to match the target container.

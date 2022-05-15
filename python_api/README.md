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

### Run in Docker

```bash
docker build . -t py-api-docker -f Dockerfile
docker run -p 3000:3000 --rm py-api-docker
```

The API would be at ```localhost:3000```.

### Run in Docker (with uwsgi)

```bash
docker build . -t py-api-docker -f Dockerfile-wsgi
docker run -p 3000:3000 --rm py-api-docker
```

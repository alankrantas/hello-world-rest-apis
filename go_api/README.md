A "Hello World!" REST API demo using [Golang](https://go.dev/) 1.18.2 and [Gin](https://github.com/gin-gonic/gin) 1.7.7.

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
docker run -p 3000:3000 --rm go-api-docker
```

The API would be at ```localhost:3000```.

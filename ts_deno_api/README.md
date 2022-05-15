A "Hello World!" REST API demo using TypeScript and [Opine](https://deno.land/x/opine@2.2.0) 2.2.0 on [Deno](https://deno.land/) 1.21.3.

### Install Deno

See https://github.com/denoland/deno_install. (You can use scoop: https://scoop.sh/)

### Run Project

```bash
deno run --allow-net --allow-read --allow-env app.ts
```

### Run in Docker

```bash
docker build . -t ts-deno-api-docker -f Dockerfile
docker run -p 3000:3000 --rm ts-deno-api-docker
```

The API would be at ```localhost:3000```.
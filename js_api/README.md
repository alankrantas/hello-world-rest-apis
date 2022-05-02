A "Hello World!" REST API demo using JavaScript and [Express](https://expressjs.com/) 4.18.1 on [Node.js](https://nodejs.org/en/) 16.15.0.

### Install Node.js

See https://nodejs.org/en/download/.

### Install Dependencies

```bash
npm install
npm prune
```

This will download Express. Add ```sudo``` at the beginning if you are installing it globally in Linux.

### Run Project

```bash
node app.js
```

### Run in Docker

```bash
docker build . -t js-api-docker -f Dockerfile
docker run -p 3002:3000 --rm js-api-docker
```

The API would be at ```localhost:3002```.
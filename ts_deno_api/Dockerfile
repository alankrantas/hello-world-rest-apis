FROM denoland/deno:alpine

USER deno

WORKDIR /app

COPY ./ /app

RUN deno cache app.ts

EXPOSE 3000

CMD deno run --allow-net --allow-read --allow-env app.ts
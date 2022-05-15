FROM python:3.10.4-alpine

RUN mkdir -p /usr/src/python_api
WORKDIR /usr/src/python_api

COPY . /usr/src/python_api

RUN apk add python3-dev build-base linux-headers pcre-dev
RUN pip3 --no-cache-dir install flask uwsgi

EXPOSE 3000

CMD uwsgi --socket 0.0.0.0:3000 --protocol=http --processes 200 -w wsgi:app

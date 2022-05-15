FROM python:3.10.4-alpine3.15

RUN mkdir -p /usr/src/python_api
WORKDIR /usr/src/python_api

COPY ./ /usr/src/python_api

RUN pip3 --no-cache-dir install flask

EXPOSE 3000

CMD flask run -h 0.0.0.0 -p 3000

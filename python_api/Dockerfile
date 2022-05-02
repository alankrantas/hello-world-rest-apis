FROM python:3.9.11

RUN mkdir -p /usr/src/python_api
WORKDIR /usr/src/python_api

COPY ./ /usr/src/python_api

RUN pip3 install flask

EXPOSE 3000

CMD flask run -h 0.0.0.0 -p 3000
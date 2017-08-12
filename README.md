# django-react-boilerplate

This repo is a starter project for setting up fast progressive web apps with Django and React/redux
it has been inspired heavily from the following projects
* [Seedstars Django Base](https://github.com/Seedstars/django-react-redux-base)
* [React hmr srr](https://github.com/Alex-ray/v2-universal-js-hmr-ssr-react-redux)

**How?**
* Request is sent to django on localhost:8000
* Django sends POST request to intermediate express server on port:3000
* Express returns with page html as a string
* Django serves that html
* Once the app.js is finished downloading, application state is handed over

## Retrieve code

* `$ git clone https://github.com/ahlusar1989/django-react-boilerplate.git`
* `$ cd django-react-boilerplate`

## Installation

* `$ docker-compose build`

## Start development

* `$ docker-compose up`
* browse to `localhost:8000`

## Stopping

Stop Docker development server

* `$ docker-compose stop`

## Resetting

Stop Docker development server and remove containers, networks, volumes, and images created by up.

* `$ docker-compose down`

### Accessing a container

You can access shell in a container

* `$ docker exec -i -t <CONTAINER_NAME_OR_ID> /bin/bash`

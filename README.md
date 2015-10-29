# Raspberry Pi Weather Station - Server

This repo contains the server of the weather station. It contains the API and the frontend (UI). The [Client] sends the data to the server's REST API.

[Working demo]

## Prerequisites
* [Node.js]
* (Optional) [PM2] (Process Manager 2)
* Database server (ex: MySQL)

## Installation
```sh
$ cd [git-repo]
$ npm install
```
You need to place a config.json file to the [git-repo] directory:
```json
{
  "db" : {
    "dialect": "mysql",
    "host": "localhost",
    "port": "3306",
    "username": "database-example-username",
    "password": "database-example-password",
    "name": "database-example-name"
  },
  "http": {
    "address": "localhost",
    "port": "3000"
  }
}
```

## Running

```sh
$ cd [git-repo]
$ node ./bin/www
```
## Running with PM2

```sh
$ npm install pm2 -g
$ pm2 start [git-repo]/bin/www
```

## Running in development mode
```sh
$ DEBUG=pi-weather-station-server:server npm start
```


## Todos

* Add Code Comments
* Add Logging
* Add Graphs (Statistics)
* Add Filtering

### Version
0.1




   [Client]: <https://github.com/FlipEverything/pi-weather-station-client>
   [Working demo]: <https://lddsystems.eu/weather/>
   [Node.js]: <https://nodejs.org/>
   [PM2]: <https://github.com/Unitech/pm2>


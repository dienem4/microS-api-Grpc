

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# Inscription de l’utilisateur
$ curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"email": "David_Kemmer@gmail.com", "password": "password"}'
Server Response: { "status": 201 }

# connexion de l’utilisateur
$ curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"email": "David_Kemmer@gmail.com", "password": "password"}'
Server Response: { "status": 200, "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJEYXZpZF9LZW1tZXJAZ21haWwuY29tIiwiaWF0IjoxNjg5NDk4MzM3LCJleHAiOjE3MjEwMzQzMzd9.pRi0VJh4QwidiRiQGbFw-zTRa2WY29EWfIcmcc4Lc2k" }


# production mode
$ npm run start:prod
```
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

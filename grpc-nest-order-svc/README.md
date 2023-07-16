## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# Créer une commande
$ curl -X POST http://localhost:3000/order -H "Content-Type: application/json" -d '{"productId": 1, "quantity": 1}'
Server Response: { "status": 200, "id": 1 }

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

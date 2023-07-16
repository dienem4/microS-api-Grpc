
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

# Créer un produit
$ curl -X POST http://localhost:3000/product -H "Content-Type: application/json" -d '{"name": "Nom produit", "sku": "A00002", "price": 50, "stock": 4}'
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


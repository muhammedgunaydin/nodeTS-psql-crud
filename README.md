# nodeTS-psql-CRUD

CRUD API example is written in [NodeJS](https://nodejs.org/en/) using [Express](https://expressjs.com) 
package and [Postgre](https://www.postgresql.org/) database.

## Requirements
- [NodeJS](https://nodejs.org/en/)
- [Postgre](https://www.postgresql.org/)
- Code Editor

## Instructions

- Clone the repository and move to the project directory:
  ```bash
    git clone https://github.com/muhammedgunaydin/nodeTS-psql-crud.git
    cd nodeTS-psql-crud
  ```
- To load the package:
  ```bash
    npm init -y
  ```
- Start:
  ```bash
    npm start
  ```

## Docs
```bash
localhost:3000/api-docs
```
  
## Usage Examples
-  Get All Book
  ```bash
    curl -X GET localhost:3000/api/book
  ```
-  Get Book (by id)
  ```bash
    curl -X GET localhost:3000/api/book/:id
  ```
-  Add Book
  ```bash
    curl -X POST localhost:3000/api/book
      '{  "name" : "NodeJS For Beginners",
          "author": "Muhammed Günaydın",
          "page : 174,
          "year": 2012,
         }'
  ```
-  Delete Book (by id)
  ```bash
    curl -X DELETE localhost:3000/api/book/:id
  ```
-  Update Book (by id)
  ```bash
    curl -X PUT localhost:3000/api/book/:id
       '{ "name" : "NodeJS For Beginners",
          "author": "Muhammed Günaydın",
        	"page" : 174,
          "year": 2012,
         }'
  ```

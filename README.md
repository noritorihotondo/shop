## Requirements

* [Node.js][1] installed
* Package manager [npm][2] or [yarn][3]


## Getting Started

First, you have to install all dependencies.

Frontend:
```bash
$ cd ./client
$ npm install
# or
$ cd ./client
$ yarn
```

Backend:
```bash
$ cd ./server
$ npm install
# or
$ cd ./server
$ yarn
```

Now you can run the development server.

Frontend & Backend:
```bash
$ npm run dev
# or
$ yarn dev
```

Open [http://localhost:3000][4] with your browser to see the result.

## Tech stack

Frontend:
- Next.js
- Typescript

Backend:
- Express.js
- Typescript

## TODO (10.08.22)

### Backend:
- [ ] Authorization
- [ ] Login -- httpOnly cookie
- [ ] Register
- [ ] User entity

```json
{
  "id": "5eba3c96-87d8-48d4-843b-d119fb248f92", // uuid v4
  "name": "John",
  "surname": "Doe",
  "email": "john.doe@gmail.com",
  "password": "********", // bcrypt
  "phoneNumber": "+48 555 555 555", // only polish phone numbers (validation)
  "zipCode": "41-800", // only polish zip codes
  "city": "Zabrze",
  "street": "Wolności",
  "buildingNumber": "122",
  "apartmentNumber": "1" // optional
}
```
- [ ] Add product
- [ ] Delete product
- [ ] Edit product
- [ ] Product entity

```json
{
  "id": "5eba3c96-87d8-48d4-843b-d119fb248f92", // uuid v4
  "name": "Fender Quire",
  "type": "Bass", // enum
  "price": 1000,
  "currency": "PLN", // enum
  "stock": 100,
  "images": ["link1", "link2"],
  "description": "guitar_descriptions.fender_quire"
}
```

### Frontend:
- [ ] Login page -- authorization
- [ ] Register page
- [ ] Account management page
- [ ] Product page
- [ ] Home page


[1]: https://nodejs.org/en/
[2]: https://www.npmjs.com/
[3]: https://yarnpkg.com/
[4]: http://localhost:3000

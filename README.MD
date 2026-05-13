# ReqRes API Automation Testing with Cypress

## Project Overview

This project contains automated API tests created with Cypress for the ReqRes public API.

The automation covers:

* GET request validation
* POST request validation
* Response body assertions
* Status code verification
* Data type assertions
* Response structure validation
* API response time validation

The goal of this project is to practice API automation testing using Cypress and JavaScript.

---

# Technologies Used

* Cypress
* JavaScript
* Node.js
* ReqRes API

---

# Tested API

[https://reqres.in/](https://reqres.in/)

---

# Test Scenarios

## POST Request Validation

The automation verifies:

* Successful creation of a new user
* Status code validation (201)
* Verification of:

  * name
  * job
  * age
  * id
  * createdAt

### Example:

```javascript
expect(res.status).to.eq(201)
expect(res.body.name).to.eq('enea')
expect(res.body.id).to.exist
expect(res.body.createdAt).to.exist
```

---

## GET Request Validation

The automation verifies:

* Successful GET request response
* Status code validation (200)
* Total users validation
* User IDs validation
* User last names validation

### Example:

```javascript
expect(res.status).to.eq(200)
expect(res.body.total).to.eq(12)
expect(res.body.data[0].last_name).to.eq('Bluth')
expect(res.body.data[1].id).to.eq(2)
```

---

## Assertions Validation

The automation verifies:

* String assertions
* Number assertions
* Response structure validation
* API response data types

### Example:

```javascript
expect(res.body.total).to.be.a('number')
expect(res.body.data[0].last_name).to.be.a('string')
expect(res.body.data[0].id).to.be.a('number')
```

---

# Installation Steps

## 1. Clone Repository

```bash
git clone https://github.com/enintilka/API-Automation-REQRES.git
```

---

## 2. Open Project Folder

```bash
cd "C:\Cypress Test MoxyMind API"
```

---

## 3. Install Dependencies

```bash
npm install
```

---

# Available Scripts

```json
"test": "cypress run",
"cypress:open": "cypress open",
"cypress:run": "cypress run"
```

---

# How to Run the Tests

## Open Cypress Test Runner

Run in CMD or VS Code terminal:

```bash
npm run cypress:open
```

Then:

* Select E2E Testing
* Choose browser
* Open the API test file

---

## Run Tests in Headless Mode

Run in CMD or VS Code terminal:

```bash
npm test
```

OR:

```bash
npm run cypress:run
```

---

# API Tests Included

## Automate and Verify POST Request New User

```javascript
describe('Automate and verify POST request new user ',()=>{
    it('Post new user',()=>{
        cy.request({
            method:'Post',
            url:'https://reqres.in/api/users',
            headers:{'x-api-key':'reqres_8ad760d30bc4412381969c460638f1f1'},
            body:{"name":"enea",
                  "job" : "QA",
                  "age" : "30"
            }

        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq('enea')
            expect(res.body.id).to.exist
            expect(res.body.createdAt).to.exist
            expect(res.body.job).to.eq('QA')
            expect(res.body.age).to.eq('30')
        })
    })
})
```

---

## Automate and Verify GET Request

```javascript
describe('Automate and verify GET request',()=>{
  it('Get user response',()=>{
    cy.request({
      url:'https://reqres.in/api/users?page=1',
      headers:{'x-api-key':'reqres_8ad760d30bc4412381969c460638f1f1'}
    }).then((res)=>{
      expect(res.status).to.eq(200)
      expect(res.body.total).to.eq(12)
      expect(res.body.data[0].last_name).to.eq('Bluth')
      expect(res.body.data[1].last_name).to.eq('Weaver')
      expect(res.body.data[0].id).to.eq(1)
      expect(res.body.data[1].id).to.eq(2)
      expect(res.body.data[2].last_name).to.eq('Wong')
      expect(res.body.data[2].id).to.eq(3)
    })
  })
})
```

---

## Bonus Task 2 Create and Verify Assertions

```javascript
describe('Bonus Task 2 create and verify assertions',()=>{
    it('Create and verify new post user',()=>{
        cy.request({
            method:'Post',
            url:'https://reqres.in/api/users',
            headers:{'x-api-key':'reqres_8ad760d30bc4412381969c460638f1f1'},
            body:{"name": "eniko", "job":"QA","age":30}

        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.name).to.be.a('string')
            expect(res.body.job).to.be.a('string')
            expect(res.body.age).to.be.a('number')
        })
    })
})
```

---

## Create and Verify Assertions

```javascript
describe('Creat and Verify Assertions ',()=>{
    it('create types of assertions',()=>{
        cy.request({
            url:'https://reqres.in/api/users?page=2',
            headers:{'x-api-key':'reqres_8ad760d30bc4412381969c460638f1f1'}

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.total).to.be.a('number')
            expect(res.body.data[0].id).to.be.a('number')
            expect(res.body.data[0].last_name).to.be.a('string')
        })
    })

})
```

---

# Project Structure

```text
cypress/
 ├── e2e/
 │    └── API-Tests.cy.js
 ├── fixtures/
 ├── support/
 └── screenshots/
```

---

# Main Cypress Commands Used

```javascript
cy.request()
expect()
to.eq()
to.exist
to.be.a()
```

---

# Notes

* ReqRes is a mock API used for API testing practice.
* POST requests simulate successful creation but do not permanently store data.
* Cypress was used to validate API responses, response structures, and assertions.
* Different endpoints return different response structures, therefore assertions must match the JSON response structure correctly.

---

# Author

Created for Cypress API automation practice and learning purposes.

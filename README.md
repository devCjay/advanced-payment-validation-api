# 🚀 Advanced Payment Validation API

A backend system demonstrating **JSON Schema validation**, **OpenAPI documentation**, and **production-ready API architecture** using Node.js, Express, and Ajv.

This project focuses on building a **strong, scalable validation layer for payment systems**, including fiat and crypto transactions.

---

## 📌 Features

* ✅ JSON Schema-based request validation
* ✅ OpenAPI (Swagger-style) API documentation
* ✅ Conditional validation (e.g. crypto vs fiat payments)
* ✅ Modular schema architecture (`$ref` reusable schemas)
* ✅ Ajv validation engine integration
* ✅ Express REST API structure
* ✅ Docker support for containerized deployment
* ✅ GitHub Actions CI pipeline

---

## 🧠 Tech Stack

* Node.js (v18+)
* Express.js
* Ajv (JSON Schema Validator)
* Ajv Formats
* OpenAPI 3.0
* Docker
* GitHub Actions

---

## 📁 Project Structure

```
advanced-payment-validation-api/
│
├── openapi/
│   └── openapi.yaml
│
├── schemas/
│   ├── user.schema.json
│   ├── payment.schema.json
│   ├── wallet.schema.json
│   └── transaction.schema.json
│
├── routes/
│   └── payment.js
│
├── validators/
│   └── ajvValidator.js
│
├── app.js
├── package.json
├── Dockerfile
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/advanced-payment-validation-api.git
cd advanced-payment-validation-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
npm start
```

Server runs on:

```
http://localhost:3000
```

---

## 🔌 API Endpoint

### ➤ Initiate Payment

**POST** `/payment/initiate`

### Request Body Example:

```json
{
  "amount": 500,
  "currency": "NGN",
  "method": "crypto",
  "user_id": "user_123",
  "crypto_details": {
    "wallet_address": "0xABC123...",
    "network": "ETH"
  }
}
```

### Success Response:

```json
{
  "message": "Payment validated successfully",
  "data": { ... }
}
```

---

## 📜 OpenAPI Documentation

The API contract is defined in:

```
/openapi/openapi.yaml
```

It ensures:

* Standardized request/response structure
* Frontend-backend alignment
* Schema-driven API design

---

## 🐳 Docker Usage

### Build Image

```bash
docker build -t payment-api .
```

### Run Container

```bash
docker run -p 3000:3000 payment-api
```

---

## 🔄 CI/CD (GitHub Actions)

Automated workflow includes:

* Dependency installation
* Basic runtime validation
* Node.js environment setup

Workflow file:

```
.github/workflows/node-ci.yml
```

---

## 🧩 Key Design Concepts

* **Schema-First Validation**: All inputs are validated using JSON Schema
* **Reusable Components**: Shared schemas using `$ref`
* **Conditional Logic**: Dynamic validation based on payment method
* **Separation of Concerns**: Schemas, routes, and validators are modularized
* **API Contract Consistency**: OpenAPI aligned with runtime validation

---

## 📈 Future Improvements

* JWT authentication & RBAC
* PostgreSQL / MongoDB integration
* Redis caching layer
* Swagger UI for live API testing
* Rate limiting & security hardening

---

## 👨‍💻 Author

EDEH CHIJIOKE

---

## 📄 License

This project is licensed under the MIT License.


# Todo App - Simple Backend

این پروژه فقط با مباحثی ساخته شده که در پروژه فعلی یاد گرفته‌ای:

- Express
- MongoDB / Mongoose
- Model
- Router
- Controller
- Middleware
- Validation
- JWT
- bcrypt
- lodash
- CRUD

## اجرا

```bash
npm install
```

بعد فایل `config/development.json` را با اطلاعات MongoDB خودت تنظیم کن.

سپس:

```bash
npm start
```

سرور روی پورت 3000 اجرا می‌شود.

## API

### Auth

POST `/api/auth/register`

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

POST `/api/auth/login`

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

### Category

GET `/api/category`

GET `/api/category/:id`

POST `/api/category`

```json
{
  "title": "Work"
}
```

PUT `/api/category/:id`

```json
{
  "title": "School"
}
```

DELETE `/api/category/:id`

### Task

GET `/api/task`

GET `/api/task/:id`

GET `/api/task/pagination/1`

POST `/api/task`

```json
{
  "title": "Learn Express",
  "categoryId": "CATEGORY_ID",
  "description": "Practice CRUD",
  "status": false
}
```

PUT `/api/task/:id`

```json
{
  "title": "Learn Express",
  "categoryId": "CATEGORY_ID",
  "description": "Practice PUT",
  "status": true
}
```

DELETE `/api/task/:id`

## User

GET `/api/user`

برای این route باید header زیر را بفرستی:

```text
auth_token: YOUR_JWT_TOKEN
```

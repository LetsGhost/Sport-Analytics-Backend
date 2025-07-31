# Express API Storage

A minimal Express backend with two endpoints to store and retrieve JSON data using a file, protected by an API key.

## 📦 Features

- `POST /data`: Save JSON to a file (`data/data.json`)
- `GET /data`: Retrieve stored JSON
- API key middleware via `x-api-key` header
- File and directory are auto-created if missing
- `.env` support for API key configuration

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/LetsGhost/Sport-Analytics-Backend.git
cd express-api-storage
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set your API key

Create a `.env` file:

```env
API_KEY=your-secret-api-key
```

> You can generate a random key with:
> `node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"`

### 4. Start the server

```bash
node server.js
```

---

## 🛠 Endpoints

### `GET /data`

**Headers:**
- `x-api-key`: Your API key

**Response:**
```json
{
  "your": "stored data"
}
```

---

### `POST /data`

**Headers:**
- `x-api-key`: Your API key  
- `Content-Type: application/json`

**Body:**
```json
{
  "any": "json",
  "you": "want"
}
```

**Response:**
```json
{
  "status": "Data saved."
}
```

---

## 📁 Project Structure

```
express-api-storage/
├── data/
│   └── data.json         # Saved JSON data
├── middleware/
│   └── apiKey.js         # API key check middleware
├── routes/
│   └── data.js           # GET/POST routes
├── server.js             # App entry point
├── .env                  # Contains API key
├── .gitignore
├── package.json
```


## 📄 License

MIT – free to use and modify.

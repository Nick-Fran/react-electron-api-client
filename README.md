# React + Electron

A lightweight **Postman-like desktop application** built with **React (Vite) + Electron**, focused on sending HTTP requests and managing them locally. The goal of this project is to provide a simple, fast, and hackable API client with full local persistence.

---

## ✨ Features

* Desktop app powered by **Electron**
* UI built with **React + TypeScript (Vite)**
* Send HTTP requests using:
  * GET
  * POST
  * PUT
  * DELETE
* Dynamic request execution based on selected HTTP method
* Manual trigger (request is only sent after clicking **Send**)
* Save requests **locally** (no cloud dependency)
* Extensible architecture (ideal for plugins or future features)

---

## 🧱 Tech Stack

* **Electron** – Desktop runtime
* **React** – UI library
* **Vite** – Frontend build tool
* **TypeScript** – Type safety
* **React Query (@tanstack/react-query)** – Request handling & caching
* **Material UI (MUI)** – UI components
* **Node.js** – Backend runtime for Electron main process

---

## 📁 Project Structure

```
.
├── electron/           # Electron main & preload processes
├── src/                # React application source
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── services/       # HTTP / IPC logic
│   └── styles/         # Global and component styles
├── public/             # Static assets
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

* **Node.js** >= 18
* **npm** or **yarn**

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

This command runs:

* Vite dev server (React UI)
* Electron app (desktop shell)

---

## 🔁 HTTP Requests Flow

1. Select an HTTP method (GET, POST, PUT, DELETE)
2. Enter the request URL
3. (Optional) Add headers and body
4. Click **Send** to execute the request
5. Response is displayed in the UI
6. Request metadata can be stored locally for later reuse

---

## 💾 Local Persistence

Requests are saved **locally** using Electron’s filesystem access.

Typical stored data includes:

* Request name
* HTTP method
* URL
* Headers
* Body
* Timestamp

This ensures:

* Offline access
* Full user control over data
* No external services required

---

## 🧪 Scripts

```bash
npm run dev           # Run Electron + Vite in development
npm run dev:vite      # Run React app
npm run dev:electron  # Run Electron
```

---

## 🛣️ Roadmap

* [ ] Request collections
* [ ] Environment variables (like Postman environments)
* [ ] Import / export requests
* [ ] Request history
* [ ] Auth helpers (Bearer, Basic, OAuth)
* [ ] Response formatting & preview (JSON, XML, HTML)

---

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Nicolas Queiroz**

---

> This project is intended for learning, experimentation, and building a customizable API client tailored to specific workflows.

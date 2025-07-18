# 🗂️ Mini Kanban Board

A minimal drag-and-drop Kanban board built with **React + TypeScript + Vite**, designed to explore **unit & integration testing** in frontend development.

---

## ✨ Features

- 🧱 Column-based board layout
- 📝 Add, move cards between columns
- 🌒 Dark theme by default
- 🧪 Setup for unit & integration testing with **Vitest + Testing Library**

---

## 🚀 Tech Stack

- React 19
- TypeScript
- Vite
- Vitest (unit + integration testing)
- Testing Library (React DOM testing)

---

## 🧪 Running Tests

```bash
npm run test
````

Ensure TypeScript is configured to include:

```json
"types": ["vitest", "node"]
```

---

## 🛠️ Project Structure

```bash
src/
├── components/
│   ├── Board.tsx
│   ├── Column.tsx
│   └── Card.tsx
├── utils/
│   ├── boardUtils.ts
│   └── boardUtils.test.ts
├── App.tsx
└── index.tsx
```

---

## 📦 Install & Run

```bash
npm install
npm run dev
```
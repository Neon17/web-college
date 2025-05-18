# Advanced Web Technology – MERN Stack Playground 🚀

![Repo size](https://img.shields.io/github/repo-size/Neon17/web-college)
![Last commit](https://img.shields.io/github/last-commit/Neon17/web-college)
![License](https://img.shields.io/github/license/Neon17/web-college)

Welcome to **Web‑College**, my curated sandbox for everything I learn in the *Advanced Web Technology* course (Semester 6).  
The goal of this repository is to document theory, practise code, and iterate toward a fully‑fledged MERN application—all in one transparent timeline.

---

## ✨ Why this repo exists

1. **Source‑of‑Truth** – One place for lecture notes, demos, and assignments.
2. **Hands‑on First** – Every concept is backed by runnable code.
3. **Incremental Growth** – You can follow each commit to see how a simple “Hello World” evolves into a complete stack.

---

## 🗂️ Directory Map

```
.
├── assignments/          # Markdown explanations & coursework
│   └── concepts.md
├── backend/              # Node / Express playground
│   ├── calculator.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── frontend/             # Static HTML/CSS/JS experiments
│   ├── index.html
│   └── style.css
└── .gitignore
```

| Path | Description |
|------|-------------|
| **assignments/** | Written theory: HTTP verbs, CSS selectors, Git workflows, etc. |
| **backend/** | Server code: Express routes, utility modules, future MongoDB models. |
| **frontend/** | Prototype UI before switching to React/Vite. |
| **.gitignore** | Keeps `node_modules/`, logs, and secrets out of Git history. |

---

## 🚀 Quick Start

### 1. Clone

```bash
git clone https://github.com/Neon17/web-college.git
cd web-college
```

### 2. Install & run backend

```bash
cd backend
npm install        # grab dependencies
npm run dev        # nodemon hot‑reload
# or
npm start          # plain node index.js
```

The server will default to **http://localhost:3000** (see `index.js`).

### 3. Open frontend

```bash
open ../frontend/index.html   # macOS
# or just double‑click the file / use Live Server in VS Code
```

---

## 🧩 Tech Stack

| Layer | Currently | Next Milestone |
|-------|-----------|----------------|
| **Client** | Vanilla HTML/CSS/JS | React + Vite |
| **Server** | Node.js + Express | RESTful API with validation middleware |
| **Database** | ‑ | MongoDB with Mongoose ODM |
| **Testing** | ‑ | Jest + Supertest |
| **DevOps** | local scripts | Docker + GitHub Actions CI |

---

## 📚 Key Learning Logs

| Topic | Commit | Summary |
|-------|--------|---------|
| Git basics | `f10c003` | Added cheatsheet and demo branch workflow. |
| HTTP methods | `4040565` | Documented GET/POST/PUT/PATCH/DELETE with real examples. |
| Array HOFs | `14968c3` | Hands‑on filter, map, reduce in `calculator.js`. |

*(Look at commit history for full narrative.)*

---

## 🛣️ Roadmap

- [x] Establish repo scaffolding
- [x] Add concept review notes
- [ ] Integrate Express Router structure
- [ ] Connect MongoDB Atlas cluster
- [ ] Migrate frontend to React + Tailwind
- [ ] Implement JWT‑based auth
- [ ] Deploy to Render / Vercel with CI

---

## 🤝 Contributing

This repository is primarily an educational log, but constructive feedback is welcome.

1. Fork → `git checkout -b feature/my-improvement`
2. Commit → `git commit -m "feat: add better error handling"`
3. Push → `git push origin feature/my-improvement`
4. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**—see `LICENSE` file.

---

> *“Code is like humour. When you have to explain it, it’s bad.”* – Cory House  
> I’m trying to keep the code self‑explanatory. If it isn’t, please open an issue!


## HTTP Methods & HTTP Status Codes

**HTTP Methods** are verbs that tell the server *what* we want to do.

- **GET** – “Just looking.” Fetch data, nothing in the body.
- **POST** – “Here’s some new stuff.” Send data to create‑something.
- **PUT** – “Replace the old with this.” Full update of a resource.
- **PATCH** – “Tweak this part only.” Partial update.
- **DELETE** – “Throw it away.” Remove the resource.

**Status Codes** are the server’s way of talking back.

- **2xx Success** – ✅ Everything worked.  
- **3xx Redirect** – ↪️ Resource moved elsewhere.  
- **4xx Client Error** – 🚫 You messed up (e.g., 404 Not Found).  
- **5xx Server Error** – 💥 We (server) messed up.

---

## Four Handy CSS Selectors

| Selector | What it targets | Quick hint |
|----------|-----------------|------------|
| `p` | Every `<p>` element | Element selector |
| `.card` | Anything with class `card` | Class selector |
| `#main` | The element with id `main` | ID selector |
| `nav a` | `<a>` inside `<nav>` | Descendant selector |

---

## Git Basics Cheat‑Sheet

- `git init` – Start tracking a folder.  
- `git add file` / `git add .` – Stage changes.  
- `git commit -m "msg"` – Snapshot the stage.  
- `git push` – Ship commits to GitHub.  
- `git pull` – Grab & merge from GitHub.  
- `git clone URL` – Copy a whole repo.  
- `git branch` – List branches. `git branch dev` creates *dev*.

Mnemonic: **I**n **A** **C**old **P**lace **P**enguins **C**hatter **B**riefly  
(*init → add → commit → push → pull → clone → branch*)

---

## Callback & Higher‑Order Function

- **Callback** – A function handed to another so it can be called later.

  ```js
  setTimeout(() => console.log("⏰ done"), 1000);
  ```

- **Higher‑Order Function (HOF)** – Eats a function or spits one out.

  ```js
  const twice = f => x => f(f(x));
  ```

HOFs let us build behaviour like Lego.

---

## Array Methods Quick‑Demo

```js
const nums = [1,2,3,4];

// filter – keep even
const evens = nums.filter(n => n%2===0); // [2,4]

// map – square them
const squares = nums.map(n => n*n); // [1,4,9,16]

// forEach – log
nums.forEach(console.log);

// push – add 5
nums.push(5); // [1,2,3,4,5]

// pop – remove last
nums.pop(); // back to [1,2,3,4]
```

---

*Tip:* Read code aloud; if it sounds like English, you understand it.

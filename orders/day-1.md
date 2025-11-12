# 🗓️ Day 1 Schedule (11 Hours)

> **Theme:** Kickoff, environment setup, DSA foundation, and first project.  
> **Note:** Allotted breaks are short — use them wisely. Stick to times.

---

## 🕐 0:00 – 0:30 → Kickoff (30 min)

- Read this plan and set a timer for each block.
- Create folder **`faang-bootcamp/`** locally and a **GitHub repo** with the same name.
- Add a short **README.md** with:
  - Your name
  - Dates
  - Day 1 notes

**✅ Deliverable:**  
`README.md` committed and pushed to GitHub.

---

## 🛠️ 0:30 – 1:30 → Environment & Tools Setup (1 hour)

- Install / verify:
  - **Node.js (LTS)**
  - **npm**
  - **Git**
  - **VS Code** (or your preferred editor)
- Configure Git:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "you@example.com"
  ```
- Create an **SSH key** (or PAT) and link it to GitHub.
- Push an initial commit with `README.md`.
- Create branch `day-1-setup` and push.

**✅ Deliverable:**  
Repo with initial commit and branch `day-1-setup`.

---

## 🐧 1:30 – 2:30 → Linux & Shell Baseline (1 hour)

- Practice commands (30 min):  
  `ls`, `cd`, `pwd`, `mkdir`, `rm -rf`, `cp`, `mv`, `chmod`, `chown`, `cat`, `less`, `grep`, `find`, `ps aux`, `top`, `df -h`
- Write a bash script **`faang_setup.sh`** that:
  - Prints system info (`uname`, `node -v`, `npm -v`, `git --version`)
  - Creates your repo folder structure
  - Make it executable (`chmod +x faang_setup.sh`)

**✅ Deliverable:**  
`scripts/faang_setup.sh` committed.

---

## 💻 2:30 – 4:30 → DSA Drills & Fundamentals (2 hours)

**Focus:** Patterns, loops, arrays. Implement in JS after manual dry runs.

### 🔹 Drills

1. Right-angled star triangle (n = 5)
2. Inverted triangle
3. Centered pyramid of stars
4. Sum of array elements (iterative)
5. Find max element in array (single pass)

> Add comments explaining loop invariants and logic clarity.

**✅ Deliverables:**

- `dsas/drills/patterns.js`
- `dsas/drills/arrays.js`

---

## 🍱 4:30 – 5:00 → Lunch / Rest (30 min)

Take a short break. Hydrate.

---

## 🧠 5:00 – 7:00 → Problem Solving Session (2 hours)

Solve **10 short JS problems** locally. Focus on readability & testing.

### 🔹 Problems

1. Reverse a string
2. Check palindrome
3. Remove duplicates (preserve order)
4. Merge two sorted arrays
5. Two-sum (return indices)
6. Move zeros to end (in-place)
7. Count vowels in a string
8. Rotate array right by k
9. Flatten one-level nested array
10. FizzBuzz up to n

> Include test cases (simple Node asserts).

**✅ Deliverable:**  
`dsas/problems/day1.js` with 10 solutions + tests.

---

## ⚛️ 7:00 – 8:00 → Core MERN & Roadmap Orientation (1 hour)

- Read **React Docs (Home Page)**
- Bookmark **React**, **Next.js**, **Node.js** official docs
- Create **`roadmap.md`** with headings:
  - Month 1 → JS + DSA
  - Month 2 → React
  - Month 3 → Node + API
  - Month 4 → Project + Prep

**✅ Deliverable:**  
`roadmap.md` committed with Month 1–4 structure.

---

## 🧩 8:00 – 9:00 → Mini Project – Bootcamp Dashboard (1 hour)

- Folder: **`projects/dashboard`**
- Create:
  - `index.html` → heading only
  - `main.js` → fetch local `data.json` & render list
- Initialize project:
  ```bash
  npm init -y
  npm install --save-dev http-server
  ```
- Add start script in `package.json`:
  ```json
  "scripts": { "start": "npx http-server" }
  ```
- Run locally, verify, commit.

**✅ Deliverable:**  
Runnable project in `projects/dashboard`.

---

## 🪞 9:00 – 9:30 → Revision & Reflection (30 min)

- Create **`day-1-notes.md`**:
  - What was hard
  - What was easy
  - Time management notes
  - One goal for Day 2

**✅ Deliverable:**  
`day-1-notes.md` committed.

---

## 🧩 9:30 – 10:30 → Quiz & Review (1 hour)

### ✍️ Quiz (30 min)

1. Difference between `==` and `===`
2. Explain the event loop (1 paragraph)
3. Why use Git branches?
4. `let` vs `var`

### 💻 Coding Check (30 min)

- Run all tests and fix failures.
- Ensure code pushed to `day-1-setup` branch.

**✅ Deliverable:**  
`assessments/day1_quiz.md` + all tests passing.

---

## 🚀 10:30 – 11:00 → Wrap-Up & Day 2 Prep (30 min)

- Open a **PR** from `day-1-setup` → `main`
- Add a concise description and deliverables list
- Merge it
- Update `roadmap.md` with Day 2 TODOs

**✅ Deliverable:**  
PR merged + updated `roadmap.md`.

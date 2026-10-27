# Daily Expense Tracker

A simple web app for writing down what you spend each day. It shows your total for today and for this month, lets you filter by category, and saves everything in your browser (no database or login needed).

**Tech stack:** Next.js 14 (App Router) + Tailwind CSS. Data is saved with `localStorage`.

## Features
- Add an expense (what, amount in pesos, category, date)
- See "Spent today" and "This month" totals update right away
- Filter the list by category
- Delete an expense
- Data stays after you refresh the page
- Works on phone and desktop

## How to run
1. Install Node.js (LTS) from https://nodejs.org
2. Open this folder in VS Code
3. Open a terminal (Terminal > New Terminal) and run:
   ```
   npm install
   npm run dev
   ```
4. Open http://localhost:3000

## Project structure
```
app/            page.js (main page), layout.js, globals.css
components/     ExpenseForm, ExpenseList, CategoryFilter, Summary
lib/            format.js (money, dates, categories), storage.js (localStorage)
```

## Development Log
> Replace the text below with the prompts you really typed into Qoder IDE.
> Add a short note on what went wrong and how you fixed it.

### Prompt 1: Plan first, no code
**Prompt:** "I want to build a Daily Expense Tracker with Next.js and Tailwind. Do not write code yet. List the features, the pages, and the components, and propose a folder structure."
**Why:** I asked for a plan first so the AI would not build everything at once, and so I could check the structure before any code existed.

### Prompt 2: Data and helper functions
**Prompt:** "Create lib/format.js (peso formatting, date helpers, category list) and lib/storage.js (load and save expenses in localStorage). Only these two files."
**Why:** Small, one-job prompts are easier to check and keep the logic separate from the UI.

### Prompt 3: Add-expense form
**Prompt:** "Create components/ExpenseForm.js with fields for title, amount, category and date. Validate that the title is not empty and the amount is greater than 0. Show an error message under the form."
**Why:** I named the file, the fields and the rules, so the result matched what I needed.

### Prompt 4: List, totals and filter
**Prompt:** "Create ExpenseList, CategoryFilter and Summary components. Summary shows today's total and this month's total. Wire them all in app/page.js."
**Why:** I built the UI after the data and form worked, so each step could be tested on its own.

### Prompt 5: Debugging and polish
**Prompt:** "[Paste the real error or problem here] Find the cause and fix it. Explain what was wrong."
**Why:** I pasted the exact error so the AI could fix the real problem instead of guessing.

### Bugs I fixed
- (Write one real bug you found while testing, what caused it, and how you fixed it.)

## Demo
(Paste your video link or hosted link here.)

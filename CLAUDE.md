# 🤖 Claude System Instructions & Project Context

This file establishes the rules of engagement, coding standards, and architectural context for Claude. Read these directives completely before executing any task or writing code.

## 📌 1. Project Context
*   **Project:** Personal Developer Portfolio (`manasbhatia.me`).
*   **Architecture:** Unified, single-repository. There is no decoupled backend; handle any necessary server-side logic via Next.js API routes or Server Actions.
*   **Goal:** Create a high-performance, visually striking, and technically flawless representation of engineering skills.

## 🛑 2. Core Directives: Stop, Think, Ask
*   **Always Ask for Context:** Do not write code or execute terminal commands blindly. If a design choice is ambiguous or lacks context, **STOP** and ask clarifying questions.
*   **Propose Before Implementing:** For complex UI components or state management shifts, outline your proposed file structure and logic flow first. Wait for my approval before writing the implementation.
*   **Assume Production:** Treat every snippet of code as if it is deploying to production today. No hacky workarounds, inline styles, or bypassed type checks.

## 🏗️ 3. Tech Stack & Implementation Rules
*   **Core Stack:** Next.js and Tailwind CSS. Prioritize modern React patterns (Server Components where applicable) and clean, responsive utility classes.
*   **Tooling:** Use `bun` as the default package manager and runtime for all installations and scripts.
*   **Animations & UI:** Keep animations smooth but performant. Avoid heavy client-side libraries unless necessary. Frame rates and load speeds matter on a portfolio.
*   **Asset Management:** Optimize all images, fonts, and SVGs. Rely on Next.js native optimization components (`next/image`, `next/font`).

## 💻 4. Code Quality & Standards
*   **Strict Typing:** Use TypeScript rigorously. Define interfaces/types for all component props and data structures. No `any` types.
*   **Modularity:** Break down monolithic files. Extract reusable UI elements (buttons, cards, layout wrappers) into modular components. 
*   **Responsive Design:** Mobile-first approach is mandatory. Ensure flawless rendering across all screen sizes using Tailwind's responsive prefixes.
*   **Accessibility (a11y):** Ensure semantic HTML tags, proper ARIA attributes, and sufficient color contrast. 

## 🛠️ 5. Workflow & Output Guidelines
*   **No Code Splaining:** Unless I ask for a deep dive, keep explanations brief and focused on the *why*, not the *how*. 
*   **Complete Files:** When modifying a file, output the *complete* modified code block if it's short, or use exact, unambiguous targeted replacements. Do not use placeholders like `// ... rest of code`.
*   **Terminal Commands:** Provide exact terminal commands to install new dependencies (`bun add <package>`).
*   **Commit Readiness:** Code should be clean, properly indented, and free of debugging `console.log()` statements before final output.
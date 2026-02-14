# Project Setup & Replication Guide

This guide details the tech stack, dependencies, and steps to replicate the **Shavet Varni Technologies** portfolio web application.

## 1. Technology Stack and Dependencies

This project is built using **React**, **Vite**, and **Tailwind CSS**.

### Core Dependencies
Run the following command to install the core libraries used in this project:

```bash
npm install react react-dom react-router-dom @headlessui/react @heroicons/react framer-motion react-helmet-async
```

- **`react` / `react-dom`** (^19.2.0): The frontend library.
- **`react-router-dom`** (^7.13.0): For handling client-side routing.
- **`@headlessui/react`** (^2.2.9): Unstyled, accessible UI components (used for Navbar/Menu).
- **`@heroicons/react`** (^2.2.0): SVG icons.
- **`framer-motion`** (^12.32.0): Animation library for smooth transitions.
- **`react-helmet-async`** (^2.0.5): For managing SEO and meta tags.

### Dev Dependencies (Build & Styling)
These are primarily for the build process and Tailwind CSS configuration:

```bash
npm install -D vite @vitejs/plugin-react tailwindcss @tailwindcss/postcss postcss autoprefixer
```

- **`vite`**: The build tool and development server.
- **`tailwindcss`**: Utility-first CSS framework.
- **`@tailwindcss/postcss`**: PostCSS plugin for Tailwind (v4+).

---

## 2. Replication Steps

Follow these steps to copy this project to a new folder or computer and get it running.

### Option A: Clean Install & Copy Source (Recommended)
Use this method if you want to start fresh and migrate the code.

1.  **Create a New Project**
    Open your terminal in the destination folder and run:
    ```bash
    npm create vite@latest new-project-name -- --template react
    cd new-project-name
    ```

2.  **Install Dependencies**
    Install all the required packages listed above:
    ```bash
    npm install react-router-dom @headlessui/react @heroicons/react framer-motion react-helmet-async
    npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
    ```

3.  **Copy Source Code**
    - Delete the default `src` folder in your new project.
    - Copy the `src` folder from the original project and paste it into `new-project-name`.

4.  **Copy Configuration Files**
    Ensure these files from the root of the original project are copied over (or updated to match):
    - `index.html` (Check for any custom fonts or meta tags in `<head>`)
    - `vite.config.js`
    - `package.json` (Verify scripts and dependencies match)
    
    *Note: If `postcss.config.js` or `tailwind.config.js` exist, copy them too. For Tailwind v4, configuration is often directly in CSS.*

5.  **Run the Project**
    ```bash
    npm run dev
    ```

### Option B: Moving the Entire Project
Use this method if you just want to move the existing folder.

1.  **Copy the Folder**
    Copy the entire project folder *except* `node_modules`.
    *Tip: If you copy `node_modules`, it might work but is often huge and slow to copy.*

2.  **Install Dependencies**
    Open a terminal in the new folder location:
    ```bash
    npm install
    ```
    This reads `package.json` and cleanly reinstalls everything.

3.  **Run the Project**
    ```bash
    npm run dev
    ```

---

## 3. Project Structure Overview

```
src/
├── components/
│   ├── common/         # Reusable buttons, SEO, etc.
│   ├── layout/         # Navbar, Footer, Container
│   └── sections/       # Page-specific sections (contact, home, etc.)
├── pages/              # Main route components (Home, About, etc.)
├── App.jsx             # Main router and layout setup
├── main.jsx            # Entry point
└── index.css           # Global styles & Tailwind imports
```

## 4. Troubleshooting
- **Port Conflict**: If `npm run dev` fails, Vite might try another port automatically. Check the terminal output.
- **Tailwind not working**: Ensure `src/index.css` contains `@import "tailwindcss";`.



#################################################################
# this is form Google sheet because we use google sheet s db table to store the data.
Deployment successfully updated.
Version 1 on Feb 5, 2026, 11:41 PM
Deployment ID
AKfycbz6SHxtJI35F8NFkExC3BOD8vgaUuB9naRe_KzotnAbsZR55KywEXAjjt17HC_1oeSC

AKfycbz6SHxtJI35F8NFkExC3BOD8vgaUuB9naRe_KzotnAbsZR55KywEXAjjt17HC_1oeSC 

Web app
URL
https://script.google.com/macros/s/AKfycbz6SHxtJI35F8NFkExC3BOD8vgaUuB9naRe_KzotnAbsZR55KywEXAjjt17HC_1oeSC/exec
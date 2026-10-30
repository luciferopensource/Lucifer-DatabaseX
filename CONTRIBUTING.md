# Contributing to Lucifer Database X 🗄️

Thank you for your interest in contributing to **Lucifer Database X**! We welcome community contributions, bug fixes, performance improvements, and documentation enhancements.

Please read this guide to ensure your contributions align with our architecture, coding conventions, and quality standards.

---

## 🏛️ Ecosystem Standards & Conventions

* **Parent Brand:** Lucifer Open Source
* **Language & Conventions:** British English (`behaviour`, `customise`, `initialise`, `centralised`).
* **Design Aesthetic:** Royal Obsidian & Imperial Gold, cinematic glassmorphism, responsive 3D WebGL motion graphics.
* **Truthfulness Policy:** Ground all catalog and resolver telemetry strictly in verified scraper sources and real metadata records. Never introduce synthetic or mock statistics.

---

## 🛠️ Local Development Setup

### 1. Prerequisites
Ensure you have the following installed on your machine:
* **Node.js**: `v20.0.0` or higher
* **npm**: `v10.0.0` or higher
* **Git**: `v2.40.0` or higher

### 2. Clone the Repository
```bash
# Via GitHub
git clone https://github.com/luciferopensource/Lucifer-DatabaseX.git

# Or via GitLab
git clone https://gitlab.com/luciferopensource/Lucifer-DatabaseX.git

cd "Lucifer DatabaseX"
```

### 3. Install Dependencies
```powershell
npm.cmd install
```

### 4. Start the Local Development Server
```powershell
npm.cmd run dev
```
The application will be accessible at `http://localhost:5173`.

### 5. Validate Build & Type Integrity
Before opening a pull or merge request, always execute the full production build pipeline:
```powershell
npm.cmd run build
```
This runs `tsc -b` for strict TypeScript verification and `vite build` to bundle production chunks into `./dist`.

---

## 🌿 Branching & Commit Conventions

### Branch Naming
Create feature or bugfix branches from `main`:
* `feat/feature-name` (e.g. `feat/stream-telemetry`)
* `fix/bug-description` (e.g. `fix/canvas-resize-jitter`)
* `docs/documentation-update` (e.g. `docs/api-specification`)

### Commit Messages
We adhere to the [Conventional Commits](https://www.conventionalcommits.org/) specification:
* `feat(scope): concise description of new capability`
* `fix(scope): concise description of bug resolution`
* `docs(scope): documentation update`
* `refactor(scope): code restructuring without behavioural change`
* `perf(scope): performance or memory optimisation`
* `chore(scope): build, configuration, or tooling maintenance`

---

## 🚀 Submitting Contributions

1. **Fork** the repository on GitHub or GitLab.
2. **Create** your branch and commit your changes following conventional commit syntax.
3. **Verify** that `npm.cmd run build` completes with exit code 0.
4. **Push** your branch to your fork.
5. **Open** a Pull Request on GitHub or a Merge Request on GitLab against `main`.
6. Provide a clear summary of your changes, referencing any relevant issues.

---

## 🔒 Security Vulnerabilities

Please do not report security vulnerabilities through public GitHub or GitLab issues. Review our [SECURITY.md](file:///c:/Users/shank/OneDrive/Desktop/Lucifer%20Open%20Source/Lucifer%20DatabaseX/SECURITY.md) for responsible disclosure instructions via [ailuciferbaba@gmail.com](mailto:ailuciferbaba@gmail.com).

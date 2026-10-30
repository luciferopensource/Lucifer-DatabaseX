# Security Policy — Lucifer Database X 🗄️

The Lucifer Open Source team takes the security and integrity of our media infrastructure seriously. We appreciate the responsible disclosure of security vulnerabilities by security researchers, developers, and community members.

---

## 🛡️ Supported Versions

Only the latest active minor release receives active security patches:

| Version | Supported          |
| ------- | ------------------ |
| `1.0.x` | :white_check_mark: |
| `< 1.0` | :x:                |

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability in **Lucifer Database X**, please disclose it responsibly:

* **Email:** Send details to [ailuciferbaba@gmail.com](mailto:ailuciferbaba@gmail.com)
* **Subject Line:** `[SECURITY] Lucifer Database X Vulnerability Report`
* **Do NOT** open a public issue on GitHub or GitLab for undisclosed security vulnerabilities.

### What to Include in Your Report
To help us investigate and remediate the issue rapidly, please provide:
1. A clear description of the vulnerability and its potential impact.
2. Step-by-step reproduction instructions or a minimal Proof of Concept (PoC).
3. The affected component, file, or endpoint (e.g. edge API, CSP configuration, dependencies).
4. Any potential remediations or mitigations you have identified.

---

## ⏱️ Response & Disclosure Process

1. **Acknowledgement:** We will acknowledge receipt of your vulnerability report within **48 hours**.
2. **Triaging & Assessment:** We will validate the issue, assess severity, and determine the remediation strategy.
3. **Remediation & Patching:** A fix will be developed, tested against regression suites, and deployed to production.
4. **Public Disclosure:** Once the fix is deployed, a security advisory and release note will be published acknowledging the reporter (if desired).

---

## 🏛️ Security Architecture & Controls

* **Strict Content Security Policy (`CSP`)**: Enforced in `public/_headers` preventing cross-site scripting (XSS), malicious iframe embedding (`frame-ancestors 'none'`), and unauthorized resource execution.
* **Zero Secrets in Repository**: `.env` files, credentials, and local agent memory files are isolated via `.gitignore`.
* **Read-Only Public Endpoints**: All public API endpoints on Cloudflare Pages Functions are strictly read-only query surfaces with zero client write access to underlying databases.

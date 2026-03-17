---
temperature: 0
---
Generate a minimal HTML status page that displays a project build dashboard.

Include:
- A title "nlang CI Test"
- A section showing build status (placeholder text is fine)
- A section linking to /reports/uptime.html and /reports/daily-summary.html
- Inline CSS, dark theme (#1a1a2e bg, #e0e0e0 text, #0f3460 accent)

Use this build metadata:
@{status.json}

Output a complete HTML document.

---
trigger: "0 * * * *"
cacheTtl: 0
temperature: 0.3
---
Generate an HTML uptime report page.

Include:
- Title: "Hourly Uptime Report"
- A table showing 5 fictional services (API, Auth, CDN, Database, Queue) with columns: Service, Status (all "UP"), Response Time (random 10-200ms), Last Check (recent ISO timestamp)
- A summary line: "All systems operational"
- Inline CSS, dark theme (#0d1117 bg, #c9d1d9 text), clean table styling

Output a complete HTML document.

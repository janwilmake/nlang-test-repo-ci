---
trigger: "*/15 * * * *"
cacheTtl: 0
temperature: 0
---
Generate a JSON health check response object with these fields:
- "status": "ok"
- "timestamp": a plausible ISO 8601 timestamp for right now
- "checks": an object with "api" (ok), "database" (ok), "cache" (ok) — each with a "latencyMs" integer

Output ONLY valid JSON.

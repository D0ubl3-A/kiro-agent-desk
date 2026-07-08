# The Brain Project Builder

Live demo: https://d0ubl3-a.github.io/kiro-agent-desk/
Repository: https://github.com/D0ubl3-A/kiro-agent-desk

This version fixes the pasted-output issue and now produces real project files when the mission is rap-magazine focused, including generated specs and exportable output.

## Hackathon Brain (Live)

This repo includes a continuous winning-quality brain for three contest tracks:

- Qwen Cloud Global AI Hackathon
- Slack Agent Builder Challenge
- Build with Gemini XPRIZE

The active runbook is [`hackathon-champ-brain.md`](hackathon-champ-brain.md).
It tracks per-track remaining time, active/closed status, highest-leverage next task, and a mandatory judge-ready checklist (demo, sponsor-proof, architecture, logs, safety notes, and final submit readiness).

The loop is engineered to prevent mock-only progress: each next task must produce verifiable proof.

## Rap Magazine Output

- `index.html`
- `styles.css`
- `app.js`
- `content/articles.json`
- `README.md`
- `.kiro/specs/requirements.md`
- `.kiro/specs/design.md`
- `.kiro/specs/tasks.md`
- `.kiro/agents/editorial-agent.md`
- `project.json`

## Real Capabilities

- Search/filter editorial coverage.
- Store artist submissions with localStorage.
- Export pitches as JSON.
- Write generated files to a selected folder when the browser allows it.
- Download generated files individually as fallback.

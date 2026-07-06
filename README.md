# The Brain Project Builder

Live demo: https://d0ubl3-a.github.io/kiro-agent-desk/
Repository: https://github.com/D0ubl3-A/kiro-agent-desk

This is the non-mock version. It does not pretend to call a hidden model or run fake remote agents. It creates real project files in the browser, verifies required files, and writes them to a user-selected folder when the browser supports the File System Access API.

## Real Capabilities

- Builds `index.html`, `README.md`, `.kiro` specs, `.kiro` agent notes, and `project.json`.
- Verifies required files before marking the pack ready.
- Writes the generated project to disk through the browser folder picker when available.
- Falls back to downloading real files individually.
- Avoids hardcoded secrets and fake execution claims.

## Limit

This static GitHub Pages app does not use OpenAI, Qwen, or any paid API unless a secure backend is added later.
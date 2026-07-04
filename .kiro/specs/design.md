# Design

## Product Shape

Kiro Agent Desk is a compact two-pane workbench:

- Left pane: rough project request input.
- Right pane: structured agent outputs and status metrics.

## Interaction Flow

1. User loads or enters a request.
2. User runs the agent pass.
3. The app fills six panels:
   - Requirements
   - Design
   - Tasks
   - Risks
   - Demo Script
   - Export Summary

## Technical Design

- Single HTML file for low-friction judging.
- Local deterministic logic for reliable demos.
- Responsive layout for desktop and mobile.
- No network calls or secrets.

## Demo Priority

The demo must show the full input-to-output path clearly, not just a static page.


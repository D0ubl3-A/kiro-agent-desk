# Qwen Cloud Hackathon: Devpost Draft (Submission-Ready Copy)

## Project name
**AgentOps Revenue Desk**

## Category / Track
**Track 4: Autopilot Agent**

## What it does
AgentOps Revenue Desk is an AI-operated business workflow agent that converts messy inbound requests into structured work plans with human approval before action. Teams submit a rough request, the agent classifies it, asks for missing context where needed, builds a quote/task draft, and routes the result through an explicit approval checkpoint with audit trail.

## Why it matters for this track
This submission focuses on production-minded autonomy and coordination, not chat-only output. The value is end-to-end operational handling: unclear input is transformed into a reliable, reviewable plan and handoff, while keeping humans in control for consequential actions.

## Technical implementation
- Frontend: starter dashboard for intake and review.
- Orchestrator: state machine for intake, extraction, planning, approval, execution.
- AI model: Qwen-backed reasoning path for classification, extraction, and structured draft generation.
- Deployment: hosted backend endpoint receives request and emits traceable actions.
- Logs: each state transition and tool action is persisted for review.

## Architecture
See [qwen-cloud-architecture.mmd](qwen-cloud-architecture.mmd).

## Key features
- Handles noisy natural language requests.
- Produces structured task breakdown and quote drafts.
- Requests missing information only when required.
- Enforces human approval before final action.
- Produces auditable logs and workflow trace.

## Demo path (3 minutes)
1. Load a real request from a business context.
2. Agent classifies request and extracts required fields.
3. Agent identifies missing inputs and presents one follow-up.
4. After input resolution, agent produces a plan + draft.
5. Human approves via queue.
6. Execution begins and logs record each action.

## Privacy and safety
- No raw secrets are ever sent in prompts.
- PII handling follows explicit redaction and retention policy.
- Human approval for high-impact actions.
- Full logs are maintained for auditability and rollback.

## Limitations (honest, current)
- No autonomous execution across all enterprise ERPs in this first cut.
- Requires configured credentials and approved tool allowlist for outbound actions.
- Some edge-cases still need domain-specific templates for perfect extraction.

## Future work
- Add role-based access control, SLA timers, and richer connector catalog.
- Expand approval templates and policy rules per business type.


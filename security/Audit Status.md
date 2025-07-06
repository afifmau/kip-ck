# Audit Status – KIP-CK Protocol

This document summarizes the current audit progress, scope, and roadmap for the KIP-CK cross-chain protocol.

---

## Current Status

| Component            | Audit Status     | Auditor         | Notes                                  |
|---------------------|------------------|------------------|----------------------------------------|
| Smart Contracts (Core) | ❌ Not yet audited | -                | Initial implementation ready |
| Relayer Logic        | ⏳ In development | -                | Will be audited post-testnet          |
| Meta-Tx Signing      | ✅ Internally tested | -              | Manual review completed                |
| Chain Verifier       | ⏳ Pending review | -                | Requires testnet load testing          |
| Security Disclosures | ✅ Published      | -                | See `risk-disclosure.md`              |

---

## Audit Roadmap

| Phase               | Estimated Date     | Description                            |
|--------------------|--------------------|----------------------------------------|
| Internal Review    | ✅ Completed (June 2025) | Manual testing & threat modeling       |
| Public Testnet     | 🗓️ July 2025         | Community feedback & stress testing    |
| External Audit (1) | 🗓️ August 2025       | Smart contract audit by selected firm  |
| External Audit (2) | 🗓️ September 2025    | Relayer & verifier logic audit         |
| Bug Bounty Launch  | 🗓️ October 2025      | Optional, open-source incentivized audit |

---

## How You Can Help

We welcome:
- Audit sponsorships or grant partnerships
- Community reviewers or whitehat researchers
- Feedback from other protocol engineers

For collaboration, please reach out via GitHub Issues or open a Pull Request.

---

_Last updated: June 2025_

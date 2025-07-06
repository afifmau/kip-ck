# Security Policy – KIP-CK Protocol

## Reporting a Vulnerability

If you discover a security vulnerability in KIP-CK, please report it responsibly.

- **Email:** afif@kipck.org *(or your preferred secure channel)*
- **PGP Key (optional):** [link or attachment if available]
- **Expected Response Time:** Within 5 business days

We appreciate the efforts of the security community to make this protocol more resilient.

---

## Security Philosophy

The KIP-CK Protocol follows a **security-first** philosophy, with key principles including:

- **Minimal trust assumptions** between chains.
- **Off-chain verification** before on-chain execution.
- **Meta-transaction relaying** to isolate private keys.
- **Fee incentives for verified smart contracts.**
- **Transparent risk disclosures.**



## Current Measures

| Category                | Status              | Notes                                                 |
|------------------------|---------------------|--------------------------------------------------------|
| Smart Contract Audit   | ❌ Not audited yet   | Pending grant or funding                              |
| Relayer Authentication | ✅ Implemented       | Signature-based with nonce replay protection          |
| Rate Limiting          | ⚠️ Partial           | Basic internal limits; advanced DoS protection WIP    |
| Transaction Simulation | ⚠️ Partial           | Local CLI demo; full E2E testing pending              |
| Sybil Resistance       | ⚠️ Research phase    | Exploring on-chain proof-of-contribution mechanisms   |
| Cross-Chain Security   | ✅ Isolation Layer   | Non-bridge architecture minimizes trust dependencies  |



## 🧪 Audit Plans

- Internal testnet stress simulation
- Bug bounty program post-MVP
- Third-party smart contract audit (depending on funding)



## Disclaimer

KIP-CK is an experimental protocol. Until full audits are completed, usage in production should be done with caution. Users interacting with **unverified smart contracts** will receive a clear risk warning.

We do **not** take responsibility for losses due to insecure dApps integrating the protocol **without verification**.



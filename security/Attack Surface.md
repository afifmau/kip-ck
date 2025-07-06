# Attack Surface – KIP-CK Protocol

This document outlines the known attack surfaces and potential vectors in the KIP-CK cross-chain protocol. It helps contributors, auditors, and integrators understand the most sensitive areas of the system.



## Known Attack Surfaces

| Layer                   | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Smart Contract Layer    | Malicious calls, re-entrancy, incorrect access control                     |
| Relayer Network         | DoS attacks, message injection, impersonation                              |
| Signature Verification  | Fake signatures, replay attacks, malformed payloads                        |
| Cross-Chain Message Bus | Message tampering, replay across chains, desynchronization                 |
| Gasless Tx (Meta-tx)    | Front-running relayer, fake user identities, fee griefing                  |
| NFT Legal Binding Layer | NFT spoofing, invalid notary identity, unauthorized logo claims            |

---

## High-Risk Vectors (Under Evaluation)

1. **Verifier Spoofing**  
   - Potential if a malicious chain sends falsified receipts or block headers.

2. **Relayer Collusion**  
   - Coordinated relayers faking user intent or delaying execution.

3. **User Intent Tampering**  
   - Intercepting or modifying signed meta-transactions before relayer dispatch.

4. **Unchecked SC Integrations**  
   - Projects integrating unverified contracts may introduce unknown risk to users.



## Mitigation Strategy (In Progress)

- ✅ Internal permission checks and circuit breakers  
- ✅ Signature replay protection  
- ⏳ Trusted relayer whitelisting  
- ⏳ Multi-chain state finality verification  
- ⏳ Chain ID + nonce enforcement in signed payloads

---

## References

For more details, see:
- [`risk-disclosure.md`](./risk-disclosure.md)
- [`verifier-policy.md`](./verifier-policy.md)
- [`threat-model.md`](./threat-model.md)

---

_Last updated: June 2025_

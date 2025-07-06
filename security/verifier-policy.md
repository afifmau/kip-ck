# Verifier Policy – KIP-CK Protocol

This document outlines the verification rules applied to smart contracts, relayers, and cross-chain transactions within the KIP-CK Protocol to maintain integrity and security.

---

## 1. Smart Contract Verification

-  **Verified Contracts**  
  - Must have source code published and matched with bytecode on-chain.  
  - Reviewed for basic security issues and conform to KIP-CK compatibility standard.  
  - Pay **lower cross-chain fee** (e.g., $0.01–$0.03).

-  **Unverified Contracts**  
  - No verified source or unknown origin.  
  - Higher risk, **charged a higher fee** (e.g., $0.05–$0.10).  
  - Warning message shown before transaction.


## 2. Relayer Requirements

- Must run with proof-of-relay and off-chain audit logging.
- Must use secure key management (e.g., HSM, GCP KMS).
- Must not modify user data or signatures.
- Verified relayers get reputation score; malicious relayers are banned.



## 3. Cross-chain Transaction Rules

- Every cross-chain tx must be signed off-chain and relayed by a trusted node.
- Signature verification on destination chain is mandatory.
- Replay protection and nonce management are required for each tx.



## 4. Public Verifiability

- All verified contract hashes, relayers, and relay records are stored publicly.
- A web-based dashboard will be provided to inspect logs and verification status.



## 5. Disclaimer

KIP-CK does not guarantee absolute protection. Verification reduces risk, but users must still practice due diligence. KIP-CK is not liable for losses caused by malicious contracts or actors.

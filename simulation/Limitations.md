# Limitations – KIP-CK Simulation

While this simulation provides a conceptual demo of KIP-CK’s cross-chain functionality, it is important to acknowledge several limitations:

---

## No Real Blockchain Interaction

This demo is frontend-only and does not execute transactions on real blockchain networks. The intent signing and relaying are simulated.

---

## Simplified Verification Logic

The simulation assumes all signatures and payloads are valid. There is no cryptographic validation of intent or wallet ownership.

---

## Token-Specific Use Case

The current prototype focuses solely on USDT transfer simulation. Other tokens are not yet supported in this demo.

---

## No Fallback/Retry Mechanism

There is no logic for handling failure in relaying or verification steps. In a production setting, such features are essential.

---

## Security Assumptions

- The relayer is assumed to be honest and trusted.
- No protection against replay attacks or signature forgery is implemented.

---

## Disclaimer

This demo is meant purely for **illustration purposes** to support grant reviews, hackathons, and technical documentation. Actual testnet support will be implemented in future iterations.

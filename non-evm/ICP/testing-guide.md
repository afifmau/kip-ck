 ICP Integration – Testing Guide

This guide outlines the recommended approach to test KIP-CK’s cross-chain protocol implementation on the Internet Computer (ICP).


---

 1. Local Canister Setup

Tools Required:

DFX SDK

Node.js (for relayer simulation)

ICP Wallet or Faucet (for test cycles)


Steps:

1. Install DFX and start local replica:

dfx start --background


2. Create canister for KIP-CK relay logic:

dfx new kip_ck_icp
cd kip_ck_icp


3. Define Candid interface for relay intake and payload decoding.




---

 2. Simulate a Cross-Chain Intent

From EVM Side (Off-chain):

Use MetaMask or Web3 to sign an intent payload:

const signature = await signer.signMessage("transfer_usdt_sui");


On ICP Side:

Send payload + signature to the ICP Canister using HTTP or agent-js:

dfx canister call kip_ck_icp ingest_payload '("0xABC123...", "signature...")'

Verify payload and simulate execution logic inside the canister.



---

 3. Relayer Simulation

Create mock relayer in Node.js:

Accepts signed intents from EVM.

Sends them via HTTP to ICP canister endpoint.


Log all relayer activity for debugging purposes.



---

 4. Test Scenarios

Scenario	Expected Result

Valid Signature	Payload is accepted and execution simulated
Invalid Signature	Canister rejects the payload
Payload Tampering	Signature mismatch triggers error
High Payload Size	Canister returns cycle/storage error
Timeout	Simulated fallback or retry mechanism



---

 5. Debugging Tips

Use dfx canister log to trace execution

Add internal logging in Motoko or Rust canister code

Confirm agent-js calls using browser dev tools



---

 Optional: UI Frontend

Simple web form (HTML + JS) to:

Paste signed payload

Submit to ICP endpoint

Display execution result




---

 Final Checklist

[ ] Local testing with DFX successful

[ ] Relayer correctly forwards payloads

[ ] Payload verification works in canister

[ ] Canister returns correct simulation result


---

##  Success Criteria

- Relayer successfully forwards the signed intent to the ICP canister.
- The canister correctly parses the payload and logs the cross-chain execution request.
- Transaction simulated with valid response from the canister.
- No critical errors or unexpected behavior observed.

---

##  Optional Enhancements

- Implement message queue retries in case of canister lag or relayer timeout.
- Add mock signature verification logic inside the canister for deeper realism.
- Display full trace of simulated execution in the web or CLI interface.

---

##  Important Note

This test is designed to validate simulation logic and early-stage integration readiness.  
While no real asset movement occurs, the structure mimics future mainnet flow.  
Upon grant approval, full audit and canister hardening will be conducted before any public deployment.

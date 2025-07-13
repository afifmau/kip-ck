 Smart Contract Overview – ICP Canister (KIP-CK)

This document provides an overview of the smart contract (canister) logic used in the Internet Computer (ICP) integration for the KIP-CK Protocol.


---

 Canister Roles

1. Intent Receiver

Accepts signed cross-chain payloads (submitted by relayer)

Verifies signatures off-chain or with built-in crypto modules



2. Transaction Executor

Based on verified intent, executes a corresponding action (e.g., minting tokens, triggering business logic)



3. State Storage

Tracks verified intents, status, timestamps, origin chain, etc.

Prevents double execution or replay attacks



4. Logging & Auditing

Optionally stores logs for intent history and traceability





---

 Key Functions

Function	Description

receive_intent(payload: IntentPayload)	Entry point for relayers to submit cross-chain intent
verify_signature(payload: IntentPayload)	Checks if the payload is valid (ECDSA/Ed25519)
execute_action(data: IntentPayload)	Executes logic based on the intent type
get_tx_status(tx_id: string)	Returns the status of a specific transaction
admin_set_fee(amount: Nat)	Admin-only function to set protocol fees



---

 IntentPayload Structure

type IntentPayload = {
  origin_chain: Text;
  sender: Text;
  signature: Blob;
  action: Text;
  metadata: Text;
  timestamp: Nat64;
};


---

 Security Measures

Replays are prevented using a hashed intent ID registry

Signature checks ensure only valid cross-chain actions are processed

Optional fee enforcement can be enabled via admin toggle



---

 Future Considerations

Modularization of actions (plug-in execution modules)

Integration with ICP Lighthouse for external verification

Token standard extension (ICRC-1 or custom)



---

 Summary

This canister acts as the execution endpoint for KIP-CK’s cross-chain protocol on ICP. It is responsible for validating, executing, and recording cross-chain interactions securely.


---

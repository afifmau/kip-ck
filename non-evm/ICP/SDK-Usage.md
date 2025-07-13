#  SDK Usage – ICP Integration

This guide explains how to interact with the KIP-CK cross-chain logic deployed on Internet Computer (ICP), using JavaScript (`@dfinity/agent`) and Motoko canisters.

---

##  Dependencies

To interact with an ICP canister from an off-chain app (e.g., frontend or relayer), install:

```bash
npm install @dfinity/agent @dfinity/candid

You will also need your canister ID and candid interface.


---

 Initializing Connection

import { HttpAgent, Actor, Principal } from "@dfinity/agent";
import { idlFactory } from "./canister_idl.js"; // your candid interface

const agent = new HttpAgent({ host: "https://ic0.app" });
const canisterId = "<YOUR_CANISTER_ID>";

const actor = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});


---

 Signing Off-chain Intent (External App)

Before sending a transaction to the canister, sign a payload off-chain (e.g., using EVM wallet):

const message = "cross-chain-intent:" + Date.now();
const signature = await window.ethereum.request({
  method: "personal_sign",
  params: [message, userAddress],
});


---

 Sending Intent to Canister

await actor.receiveIntent({
  from: userAddress,
  to: targetAddress,
  amount: 1000,
  signature,
});

Make sure receiveIntent is defined in your Motoko or Rust canister with matching types.


---

 Canister-side Signature Verification

In Motoko, you can implement basic logic:

public shared(msg) func receiveIntent(intent: Intent) : async Bool {
  // Placeholder: verify signature
  // In production, use WebAuthn or Chain-Key signature logic
  return true;
};


---

 Notes

You can test this on Motoko Playground or local dfx.

Full signature verification between EVM ↔ ICP requires standardization (e.g., EIP + DIP).

The relayer acts as the transport layer between chains, forwarding signed payloads.



---

This demonstrates a minimal proof-of-concept for integrating ICP with off-chain dApps in a cross-chain flow.

---

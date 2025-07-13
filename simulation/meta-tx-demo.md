 Meta-Transaction Demo – KIP-CK Protocol

This document simulates how KIP-CK handles meta-transactions across chains, allowing users to sign an intent and have relayers submit the transaction on their behalf — even across incompatible blockchain environments.


---

 What Is a Meta-Transaction?

A meta-transaction enables users to:

Sign a transaction off-chain

Let a relayer pay gas and submit the transaction

Achieve a gasless user experience



---

 Simulated Flow

Scenario: Alice wants to execute a transaction from Ethereum to Aptos using KIP-CK.

1. Off-Chain Signing

Alice signs a payload that includes:

Her address

Target chain (e.g., Aptos)

Action (e.g., transfer USDT)

Timestamp + nonce


const intent = {
  from: "0xAlice",
  toChain: "Aptos",
  action: "Transfer USDT",
  amount: "100",
  timestamp: Date.now()
};

const signature = signPayload(intent, privateKey);


---

2. Relayer Handling

Relayer:

Verifies the signature

Wraps it in a transaction on source chain

Submits the signed payload to destination chain (via a gateway or canonical contract)


Relayer submits tx → KipCKGateway.submitSignedPayload(intent, signature)


---

3. On-Chain Execution

Contract on destination chain validates the payload

Executes action on behalf of the original user

Emits receipt + logs



---

 Demo Code Snapshot

You can try this locally with the CLI or Web version:

npm install
node simulate-meta-tx.js

or open the web demo on Netlify to test directly in browser.


---

 Notes

Signatures are checked against nonce + timestamp to prevent replay

No wallet extensions are required in simulation

In production, this will use wallet connect or browser wallet support



---

Status: ✅ Web-based and CLI meta-tx simulation completed.
Next step: Integrate meta-tx handler into testnet relayer module.


---

 Summary

KIP-CK enables seamless cross-chain interactions using meta-transactions — no need for the user to understand RPC, chain IDs, or bridging mechanics. Just sign once, and the relayer does the rest.


---


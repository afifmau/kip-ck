# Smart Contract Overview – Aptos

This document describes the key components of the Aptos smart contract that supports KIP-CK cross-chain intent verification and execution.



## Core Modules

### `relay_intent` Function

This is the main entry point for relayed cross-chain payloads.

```move
public entry fun relay_intent(
    sender: address,
    payload: vector<u8>,
    signature: vector<u8>
)

sender: Original signer of the payload

payload: The raw transaction intent

signature: Signature created off-chain by the sender





 Signature Verification

The contract uses Aptos-native functions to verify the ed25519 signature against the provided payload.

assert!(
  ed25519::verify(&payload, &signature, &sender),
  error::invalid_signature()
);




 Execution Logic

After verifying the payload, the contract may:

Emit events for off-chain listeners

Store data on-chain (optional)

Trigger internal operations depending on the intent type





 Example Use Case

event CrossChainIntentExecuted {
  sender: address,
  target_chain: u8,
  payload: vector<u8>,
}




 Security Considerations

Signature must match the sender address

Payload is assumed to be pre-formatted by a trusted relayer

Future support for replay protection and nonce checking



---

This smart contract logic enables Aptos to act as either source or destination in the KIP-CK cross-chain flow.

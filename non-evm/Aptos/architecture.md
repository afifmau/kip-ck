# Architecture – Aptos Integration

This document outlines the technical architecture for supporting Aptos within the KIP-CK Protocol.



## Message Flow

1. **Intent Signing**  
   User signs a transaction intent off-chain using their Aptos wallet.

2. **Submission to Relayer**  
   The intent is sent to a KIP-CK-compatible relayer.

3. **Payload Encoding**  
   Relayer encodes the transaction using Aptos BCS and formats the payload for `entry_function_payload`.

4. **Transaction Forwarding**  
   Relayer submits the signed payload to the Aptos chain using its JSON-RPC endpoint.

5. **Execution & Confirmation**  
   Transaction is executed on-chain. Confirmation is returned to the user interface.



## Components Involved

- **KIP-CK Relayer**: Responsible for BCS encoding and relaying payload to Aptos.
- **Aptos RPC**: Used to broadcast the transaction and fetch results.
- **User Wallet**: Signs off-chain intent using `aptos-wallet-adapter` or compatible tools.
- **Payload Formatter**: Middleware that translates KIP-CK format to Aptos `entry_function_payload`.



## Integration Status

- [x] Off-chain signing format defined
- [x] Relayer compatibility with Aptos JSON-RPC
- [x] Prototype simulation via CLI
- [ ] Full testnet support (coming soon)

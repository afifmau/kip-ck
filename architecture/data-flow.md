# 🔄 Cross-chain Data Flow

This document describes the core data flow of KIP-CK, outlining how a signed message is relayed and executed across different chains — without relying on bridges or wrapped tokens.

---

## 🔁 Standard Cross-chain Flow

+--------+         +---------+          +---------------+          +------------------+ |  User  | ----->  | Relayer | ----->   | Source Chain  | ----->   | Destination Chain| +--------+         +---------+          +---------------+          +------------------+ |                  |                       |                          | |   Sign intent    |                       |                          | |----------------->|                       |                          | |                  |  (optional logging)   |                          | |                  |---------------------->|                          | |                  |                       |  Forward signed intent   | |                  |----------------------------------------------->  | |                  |                       |                          | |                  |                       |   Verify & Execute tx    | |                  |                       |<------------------------ |

---

## 📦 Payload Structure

- `origin_chain_id`  
- `destination_chain_id`  
- `user_address`  
- `function_call_data`  
- `nonce`  
- `expiration_timestamp`  
- `signature`

---

## 🛠️ Execution on Destination Chain

1. Trusted Forwarder verifies signature and nonce  
2. If valid:  
   - Extract function call  
   - Execute on behalf of original user  
3. Result is recorded on the destination chain

---

## ✅ Summary

KIP-CK enables gasless, bridge-less cross-chain interactions using verifiable signed intents — compatible with EVM and non-EVM chains.

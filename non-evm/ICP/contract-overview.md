#  Smart Contract Overview – ICP Integration

This document outlines the design principles, capabilities, and responsibilities of smart contracts (canisters) used in the KIP-CK cross-chain protocol when integrating with the Internet Computer (ICP).

---

##  Core Concepts

###  Canister = Smart Contract on ICP  
ICP uses **canisters**, which are Wasm-based actors capable of storing state, handling logic, and making asynchronous cross-canister or external HTTP requests.

KIP-CK leverages these to:

- **Receive signed cross-chain intent**
- **Perform signature verification**
- **Initiate external call to EVM chains (via HTTP/gateway)**
- **Log transaction metadata**

---

##  Cross-Chain Workflow on ICP

1. **Intent Signing**  
   - User signs off-chain message via compatible wallet (e.g., Metamask or Plug).

2. **Canister Intake**  
   - A dedicated canister receives this signed payload via frontend or relayer.

3. **Verification**  
   - The canister verifies the signature and checks for replay protection.

4. **Execution or Forwarding**  
   - Canister either:
     - Executes logic natively on ICP, or
     - Calls external RPC endpoint (e.g., Ethereum) via HTTPS to trigger on-chain action.

5. **Logging**  
   - Logs or NFTs may be minted to provide a public audit trail.

---

##  Contract Responsibilities

| Responsibility          | Description                                         |
|-------------------------|-----------------------------------------------------|
| `verify_signature()`    | Confirms off-chain signed intent is valid           |
| `forward_to_gateway()`  | Sends payload to external chain endpoint            |
| `emit_log()`            | Stores a log entry or event on-chain                |
| `authorize_relayer()`   | Manages trusted relayer whitelist                   |
| `get_state()`           | Returns current config/state for off-chain UI usage |

---

##  Security Considerations

- **Signature verification**: Ensures only valid requests are processed
- **Nonce/replay protection**: Prevents duplicated execution
- **Relayer authorization**: Only trusted relayers can forward intents
- **Gas simulation fallback**: Pre-check success conditions before execution

---

##  Notes

- Canisters are upgradeable (with caution)
- ICP’s reverse-gas model allows low-cost execution
- For full EVM bridge execution, HTTPS calls may be proxied via Lighthouse or Gateway

---

✅ This overview defines how KIP-CK interacts with ICP smart contracts in a secure, scalable, and verifiable way.

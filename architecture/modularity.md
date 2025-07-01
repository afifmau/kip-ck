# 🧩 Modular Architecture

KIP-CK is designed with modularity at its core, allowing different components to be reused, swapped, or extended — making it flexible and adaptable across blockchain ecosystems.

---

## 📦 Core Modules

- **🧾 Payload Encoder**  
  Encodes the user's intent, including destination, call data, and metadata.

- **🔐 Signature Verifier**  
  Validates user signatures (ED25519, Secp256k1, etc.), enabling chain-specific signature logic.

- **🛫 Relayer Interface**  
  Accepts off-chain payloads and forwards them to destination chain.

- **🧭 Trusted Forwarder**  
  On-chain logic to verify signatures, handle nonces, and execute the user's intent securely.

- **🔁 Nonce Manager**  
  Prevents replay attacks by tracking used payloads per user per chain.

---

## 🔄 Plug-and-Play Design

Each component can be adapted per chain:

| Chain Type    | Signature Engine | Forwarder Logic         | Compatibility |
|---------------|------------------|--------------------------|----------------|
| Ethereum      | EIP-712 / ECDSA  | Forwarder (ERC-2771)     | ✅             |
| Aptos         | ED25519          | Move-based relay logic    | ✅             |
| Cosmos SDK    | Secp256k1        | Module-based forwarding   | ✅             |
| Solana        | Ed25519          | CPI call from relay node  | ✅             |

---

## 🌐 Benefits

- 🔄 **Reusable across chains**
- 🧱 **Minimal dependencies**
- 🔒 **Chain-specific security policies**
- ⚡ **Easier upgrades and audit scope**
- 🧪 **Faster simulation & testing**

---

## 📌 Summary

The modular design of KIP-CK makes it highly flexible for multi-chain deployments.  
Chains can integrate only the components they need, and adjust logic without breaking the protocol’s integrity.

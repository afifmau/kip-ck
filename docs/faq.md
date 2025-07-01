# ❓ FAQ – Frequently Asked Questions

This section answers common questions about the KIP-CK protocol and its design.

---

### 💡 What is KIP-CK?

KIP-CK stands for **Cross-chain Interoperability Protocol**.  
It is a trust-minimized, bridge-less protocol that allows users to execute transactions across different blockchains — including both EVM and non-EVM chains — using **signed intent** and **relayer-based forwarding**.

---

### 🔄 How is this different from a traditional bridge?

Unlike bridges that lock assets and mint wrapped tokens, KIP-CK works by:
- Letting users sign messages off-chain
- Using relayers to deliver those signed messages to the destination chain
- Verifying the message using a **trusted forwarder**

> ✅ No token wrapping  
> ✅ No need to trust multi-sig oracles  
> ✅ No bridge smart contracts

---

### 🧱 Is KIP-CK a new blockchain?

No.  
KIP-CK is a **protocol or standard** — not a blockchain.  
It is designed to work **on top of** existing chains, enabling developers to integrate secure cross-chain logic into their smart contracts.

---

### ⚙️ Which chains are supported?

Currently targeted chains include:

- ✅ EVM chains: Ethereum, Arbitrum, Optimism, Polygon, BSC  
- ✅ Non-EVM chains (via adapter): Aptos, Cosmos SDK, Sui

Support for additional chains depends on the presence of:
- Signature verification capability
- A compatible smart contract interface (or modules)

---

### 🔐 Is it secure?

Yes.  
Security is achieved by:
- Off-chain signatures using EIP-712 / Ed25519 / Schnorr (depending on the chain)
- Relayers cannot forge or modify payloads
- Smart contracts verify the integrity of the signed message
- **No funds are held** by the protocol itself

---

### ⛽ Who pays the gas fees?

Gas on the **destination chain** is paid by the **relayer**.  
In some cases, sponsors (dApps, DAO, or ecosystem funds) may subsidize this cost via meta-transaction models.

> ⚠️ Cross-chain gas is not free by default.  
> But users don’t need native tokens on the destination chain to interact.

---

### 🌐 Can KIP-CK work across EVM and non-EVM chains?

Yes.  
The architecture is designed to be **chain-agnostic**.  
Adapters and modules can be written for non-EVM chains (e.g., Aptos, Cosmos) to replicate the forwarding and signature verification logic.

---

### 🛠️ Who maintains the relayer?

Relayers can be:
- Operated by the dApp itself
- Community-hosted
- Third-party services (like Gelato or Biconomy)

In the future, open relayer marketplaces can be introduced.

---

### 📦 Does this protocol require a token?

No.  
KIP-CK does **not require a native token**.  
Its goal is to become a standard protocol that anyone can integrate freely.

---

### 📅 Is KIP-CK live?

Currently under development and simulation.  
A public demo and devnet-compatible version will be released after Gitcoin Grants 24.

---

### 🙋 Can my project use KIP-CK?

Yes — especially if:
- You’re building a cross-chain dApp
- You want to reduce user friction (no bridge, no wallet switching)
- You support users on chains that don’t share the same VM

Just follow the standard and implement a trusted forwarder on your destination chain.

---

Feel free to suggest more questions via issues or pull requests!

#  Non-EVM Integrations – KIP-CK Protocol

This section documents how the KIP-CK Protocol integrates with non-EVM blockchains.

---

## 🔗 Supported Non-EVM Chains

### 1. Internet Computer (ICP)
- Supports secure and verifiable cross-chain communication via canisters.
- Uses custom relayer-compatible modules built on Motoko and Rust.
- Leverages ICP-native protocols (e.g., Lighthouse) for external data.

➡️ See [`ICP/`](./ICP) for:
- Contract Overview
- Integration Architecture
- SDK Usage (WIP)
- Future Plan
- Limitations & Testing Guide

---

### 2. ⚡ Aptos
- Supports cross-chain transaction relay via Aptos SDK.
- Uses intent signing and verification via Aptos `entry_function_payload`.

➡️ See [`aptos/`](./aptos) for:
- SDK Usage & Sample Code
- Integration Architecture
- Contract Behavior & Limitations

---

## Notes

- All non-EVM integrations are experimental and focused on testnet environments.
- Simulations and prototypes are provided to validate the architecture and relayer behavior.
- KIP-CK aims to unify the EVM and non-EVM world without requiring centralized bridges.

---

##  Directory Structure


non-evm/ ├── ICP/ │   ├── architecture.md │   ├── contract-overview.md │   ├── future-plan.md │   ├── limitations.md │   ├── sdk-usage.md │   ├── testing-guide.md │   └── README.md ├── aptos/ │   ├── architecture.md │   ├── contract-overview.md │   ├── future-plan.md │   ├── limitations.md │   ├── overview.md │   ├── sdk-usage.md │   └── testing-guide.md └── README.md

---

##  Coming Soon

- Integration with Sui, NEAR, and Cosmos SDK-based chains
- Unified relayer model for both EVM and non-EVM systems

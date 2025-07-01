# Non-EVM Integration Overview

KIP-CK is designed to be modular and extendable beyond the EVM ecosystem.

This section documents how KIP-CK can be conceptually and technically adapted to support non-EVM chains — such as those using Move, WASM, or other custom VMs.

---

## Design Philosophy

While EVM chains follow Solidity-based standards, many modern blockchains operate under different execution environments. KIP-CK focuses on:

- ✅ Off-chain user intent signing
- ✅ Relayer-based transaction delivery
- ✅ Context reconstruction inside smart contract
- ✅ Stateless message passing between chains

These ideas can be adapted with chain-specific modules or wrappers.

---

##  Integration Modules

| Chain   | Status    | File           | Notes                         |
|---------|-----------|----------------|-------------------------------|
| Sui     | Draft     | [sui.md](./sui.md)         | MoveVM + custom module |
| Aptos   | Draft     | [aptos.md](./aptos.md)     | Account module wrapper |
| Solana  | Concept   | [solana.md](./solana.md)   | PDA + signer relay logic |
| Near    | Concept   | [near.md](./near.md)       | WASM-based adapter |

---

## 🛣️ Roadmap

- [x] Initial research & abstraction
- [ ] Draft code samples for Move-based chains
- [ ] Meta-transaction prototype (Solana/Aptos)
- [ ] Contributor call for multi-chain wrappers

---

> 💡 Want to contribute to a non-EVM adapter?  
> Reach out via issues or open a PR in this folder.

---

_This folder is an open standard proposal and will evolve with feedback and collaboration from different ecosystem builders._

# 🧩 Modular Chain Adapters

The core protocol supports EVM/non-EVM chains using a plug-and-play adapter system.

## Architecture

- `Adapter` = set of rules for signature verification + call formatting
- Developers can build and register their own adapters
- Validators can choose which chains to support

## Benefit

- Rapid onboarding of new blockchains
- Less code duplication
- Decoupled protocol logic from chain-specific quirks

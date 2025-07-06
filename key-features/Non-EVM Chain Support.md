#  Non-EVM Chain Support

KIP-CK is designed to be extensible to non-EVM chains through adapter modules.

## Current Strategy

- Chains like Solana, Aptos, and Cosmos require light-client or ZK-based verification.
- Protocol modularity allows developers to plug-in chain-specific adapters.
- Adapters include signature verification + cross-chain message formatting.

## Status

- ✅ Initial design prepared
- 🧪 In testing with prototype modules
- 🚧 Complex smart contract call support pending for some non-EVMs

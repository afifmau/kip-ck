# 🔗 EVM Interoperability

The KIP-CK Protocol enables smart contracts on different EVM-compatible chains (e.g., Ethereum, BNB Chain, Polygon) to directly send and receive messages without requiring token bridges.

## How It Works

- Contracts emit intent (e.g., encoded calldata).
- Relayers pick up the signed message and execute it on the destination chain.
- The destination contract verifies authenticity using KIP-CK meta-signature logic.

## Benefits

- No need for wrapped tokens
- Lower latency compared to traditional bridges
- Fully decentralized relayer model

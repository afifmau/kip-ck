# 🚫 Bridge-less Cross-chain Messaging

The protocol avoids wrapped assets and traditional bridges, relying instead on message verification and execution logic.

## Advantages

- No custodial risk
- No liquidity fragmentation
- Lower attack surface

## How?

- Signed intents are passed via relayers
- Message authenticity is verified on target chain
- Destination contract triggers logic (e.g., token transfer, data sync)

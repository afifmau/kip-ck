# ⛽ Gasless Architecture

KIP-CK introduces a meta-transaction system allowing users to sign messages off-chain, while relayers bear the gas cost.

## Flow

1. User signs a message (off-chain)
2. Relayer picks it up and executes on-chain
3. Optional fee deducted in native token or QRX

## Use Cases

- Mobile wallets with no native gas
- Onboarding new users
- High-frequency micro-transactions

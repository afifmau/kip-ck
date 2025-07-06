#  Non-EVM Integration Guide

Integrating KIP-CK Protocol with non-EVM chains requires additional handling.

## Requirements

- Chain must support smart contract or programmable logic layer
- Must expose JSON-RPC, gRPC, or REST API for external relayer
- Ability to verify digital signatures off-chain or on-chain

## Adapter Paths

- **WASM Adapter** – for Substrate-based chains (e.g., Polkadot, Astar)
- **Move Adapter** – for Aptos and Sui (MoveVM)
- **IBC-based Hook** – for Cosmos/IBC chains (future)

## Limitations

Non-EVM chains may not support unified relayer architecture.
A standardized verification smart contract might need to be deployed first.

## Notes

All interactions must comply with KIP-CK relayer spec.
Fee mechanism applies based on successful relay execution.

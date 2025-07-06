
# EVM Integration Guide

This document outlines how to integrate KIP-CK Protocol with EVM-compatible chains and applications.

## Requirements

- Supports ERC-2771 (Meta Transaction standard) or compatible forwarder mechanism
- Ability to whitelist KIP-CK Relayer contract
- Compatible with Solidity 0.8+ and verified signer logic

## Integration Steps

1. **Install KIP-CK SDK** (coming soon)
2. **Set Relayer endpoint** (default or custom)
3. **Wrap your smart contract with Forwarder logic**
4. **Enable off-chain signer to produce EIP-712 intent**

## Chains Tested (Devnet)

- Ethereum Goerli
- Arbitrum Sepolia
- Base Testnet
- Polygon Mumbai

## Simulated Features

- Gasless cross-chain call
- Off-chain intent signing
- Customizable fee logic

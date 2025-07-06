
# Simulation Overview

This folder contains various simulation scenarios used to test the performance, stability, and reliability of the KIP-CK Protocol.

## Objectives

- Measure throughput of cross-chain transactions
- Test relayer behavior under load
- Detect edge-case failures (e.g., timeout, invalid signatures)
- Analyze latency and processing time across multiple chains

## Simulation Scope

Simulations are focused on:
- Signing flow and relaying logic
- Verifier performance under concurrent loads
- Handling of failed or delayed transactions
- Impact of gas pricing and congestion

## Environment

All simulations are conducted in devnet/testnet environments using mock users, automated bots, and controlled latency parameters.

## Tools Used

- Node.js CLI scripts
- Custom simulation bots
- Stress test frameworks (e.g., Artillery, Locust) *(optional)*

## Structure

- `demo-bot.md`: Guide for setting up a basic CLI simulation
- `load-test.md`: How to stress test the relayer/verifier
- `*.csv`: (optional) Raw logs or performance metrics

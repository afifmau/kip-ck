# ⚡ Speed Benchmark (Cross-chain Latency)

This document outlines estimated latency of cross-chain asset or message transfer using the KIP-CK protocol — without token bridges.

---

## 📡 General Flow

1. User signs a payload off-chain
2. Relayer picks it up and forwards to the destination chain
3. Destination chain verifies and executes the message

---

## ⏱️ Estimated End-to-End Latency

| Source → Destination         | Network Load | Est. Time (sec) |
|-----------------------------|--------------|-----------------|
| Ethereum → Arbitrum         | Low          | ~6 – 10         |
| Arbitrum → Polygon          | Medium       | ~8 – 15         |
| Optimism → zkSync           | High         | ~15 – 25        |
| Aptos → Ethereum            | Low          | ~10 – 20        |
| Cosmos → Ethereum           | Medium       | ~20 – 35        |

> ⚠️ These numbers assume:
> - Relayers are online and responsive
> - No congestion or network failures
> - Destination chain block time is <10s

---

## ⚙️ Variables Affecting Speed

- ⛓️ Destination chain block time (L1 vs L2)
- 🚀 Relayer responsiveness
- 📤 Payload size & complexity
- 🧠 On-chain computation (signature checks, decoding)
- 🔁 Retries & error handling if tx fails

---

## 🚀 Future Optimizations

- Real-time relayer networks (e.g., Gelato, Biconomy)
- Parallel submission pipelines
- Off-chain simulation before submit
- Bundled payloads to reduce per-message latency

---

## ✅ Summary

KIP-CK can achieve sub-30s latency for most cross-chain calls —  
especially on modern L2s and fast finality chains.  
Relayer performance and on-chain design remain key to achieving low latency interoperability.

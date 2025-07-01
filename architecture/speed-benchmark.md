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
> - No major congestion on the destination chain  
> - Fast finality chains or L2s when applicable  

---

## 🧪 Optimization Potential (Ongoing R&D)

Although current benchmarks are solid, KIP-CK is still under **active development**.  
We are exploring several ways to reduce cross-chain latency even further:

- 🛰️ Real-time relayer pipelines (WebSocket/event-based)
- 🔁 Batching intent payloads before relaying
- ⛓️ Faster chain targets (L2s, finality chains)
- 🧠 Efficient signature verification and lightweight payloads

> ⚙️ With these improvements, we aim to bring latency closer to **5–10 seconds** in optimal conditions.

---

## ✅ Summary

KIP-CK currently achieves sub-30s latency across most cross-chain scenarios.  
Further optimizations are planned to support high-speed, low-latency interoperability —  
while maintaining bridge-less, trust-minimized architecture.

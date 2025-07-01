# ⛽ Gas Estimation (No Sponsorship)

This document estimates the gas costs involved in executing a KIP-CK cross-chain call, when there is no sponsor or subsidy available.

---

## 🧾 Assumptions

- Meta-transaction pattern using `TrustedForwarder`
- Execution involves verifying a signature, decoding call data, and executing target function
- EVM chain used for reference (e.g., Arbitrum, Optimism)
- No batch calls — single message execution only

---

## ⚙️ Breakdown on EVM-compatible chains

| Step                            | Estimated Gas |
|---------------------------------|---------------|
| Signature verification          | 15,000 – 25,000 |
| Decoding payload                | 8,000 – 15,000 |
| Nonce checking & storage update| 10,000 – 20,000 |
| Function execution              | 20,000 – 50,000 (depends on logic) |
| **Total**                       | **≈ 60,000 – 110,000** gas |

---

## 💸 Fee Cost Estimation

| Chain        | Est. Gas | Gas Price (Gwei) | Est. USD Cost |
|--------------|----------|------------------|---------------|
| Ethereum     | 110,000  | 25 Gwei          | ~$1.00 – $2.00 |
| Arbitrum     | 80,000   | 0.2 Gwei         | ~$0.01 – $0.03 |
| Polygon      | 60,000   | 3 Gwei           | ~$0.01         |
| BSC          | 70,000   | 5 Gwei           | ~$0.02 – $0.04 |

> ⚠️ These are rough estimates and depend on real-time gas prices.

---

## 📌 Notes

- Gas usage can be reduced by optimizing payload structure
- On-chain batching (future plan) may reduce per-message cost
- Chains with native meta-tx support (e.g., zkSync, Fuel) may be more efficient

---

## ✅ Summary

KIP-CK is designed to minimize gas usage and can function even without sponsorship.  
Gas costs are reasonable on L2 chains, making it viable for users or dApps to cover fees themselves when needed.

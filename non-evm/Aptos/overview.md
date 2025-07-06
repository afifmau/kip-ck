#  Aptos Integration Overview

The Aptos blockchain, built with Move and optimized for parallel execution, offers a distinct architecture compared to EVM-based chains. This document provides a high-level overview of how KIP-CK adapts its cross-chain protocol logic to work seamlessly with Aptos.



## Why Aptos?

- **Move Language**: Designed with formal verification and safety in mind.
- **Parallel Execution**: Enables high throughput via Block-STM.
- **Fast Finality**: Aptos offers low-latency transactions with fast consensus.



## KIP-CK Integration Approach

KIP-CK adapts to Aptos by abstracting its intent-based message model through the following steps:

1. **Intent Signing (Off-Chain)**  
   The user signs a transaction intent off-chain, similar to EVM chains.

2. **Relayer Submission**  
   The signed payload is submitted to the Aptos network via a KIP-CK relayer.

3. **Signature Verification (On-Chain)**  
   A Move module on Aptos verifies the signature and executes the intended action.

4. **Execution Confirmation**  
   Results are optionally sent back to the origin chain or stored in Aptos state.



## Security Considerations

- Signature compatibility must be adjusted for Move modules.
- Replay protection and nonce management are handled via custom Move logic.
- KIP-CK avoids bridging assets, reducing surface for exploits.



## Future Plans

- Move module open-source release
- Gasless meta-transaction prototype for Aptos
- Improved SDK support & cross-chain callbacks



> See `architecture.md` for technical flow details and `sdk-usage.md` for implementation tools.

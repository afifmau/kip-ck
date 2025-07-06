# Known Risks – KIP-CK Protocol

This document outlines known risks and limitations of the KIP-CK Protocol as of the current development phase. Transparency is essential, especially for projects dealing with cross-chain communication and meta-transactions.



## Known Limitations and Risks

### 1. **Unverified Smart Contracts**
- Projects integrating KIP-CK may use vulnerable or malicious smart contracts.
- Risk: User funds may be drained even if KIP-CK itself is secure.
- Mitigation: Only verified contracts receive lower transaction fees and access to advanced tools



### 2. **Relayer Trust Model**
- Relayers play a critical role in broadcasting user intent to destination chains.
- Risk: A compromised or malicious relayer can delay or censor transactions.
- Mitigation: Future versions will support a decentralized relayer network and dispute resolution.



### 3. **Cross-Chain State Mismatch**
- Different chains may have asynchronous states (e.g., rollback, fork).
- Risk: Inconsistency or message loss during network congestion or reorgs.
- Mitigation: Use of finality-aware mechanisms (e.g., block confirmations, chain selectors).



### 4. **Gas Fee Spikes**
- KIP-CK aims to minimize gas fees, but L1 volatility may affect costs.
- Risk: Users may face unpredictable delays or higher costs during network congestion.
- Mitigation: Suggest using L2 networks; offer gas subsidy pools for verified apps.



### 5. **NFT Legal Verification Abuse**
- The protocol optionally mints NFTs as legal proof of partnership.
- Risk: If private keys are lost or stolen, impersonation or misuse may occur.
- Mitigation: Minting is restricted and logged on-chain, with public records of all legal NFTs.



## Disclaimer

While every effort is made to secure and future-proof the protocol, no system is 100% immune to attack. KIP-CK remains under continuous development, and security will evolve alongside ecosystem maturity.



_Last updated: June 2025_

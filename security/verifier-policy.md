# Security Policy – KIP-CK Protocol

Security is a core priority for the KIP-CK protocol. We are committed to protecting cross-chain operations, ensuring user funds, and promoting secure integrations across EVM and non-EVM chains.

---

## Current Security Measures

- **Signature-Based Execution**  
  Transactions are initiated off-chain and only executed after valid user signatures are verified on-chain.

- **Relayer Validation**  
  Only verified relayers can submit transactions. Each relayer is whitelisted via governance or manual approval.

- **Custom Smart Contract Calls**  
  Limited to audited and permissioned contracts. Arbitrary calls are sandboxed or restricted to test environments.

- **Fee-Based Risk Mitigation**  
  Unverified contracts incur higher fees to discourage risky interactions. Discounts apply for verified and audited integrations.


## Reporting Vulnerabilities

If you discover a security issue, please report it **responsibly and privately**:

- Email: [security@kip-ck.org](mailto:security@kip-ck.org)
- Or create a responsible disclosure issue via GitHub [here](https://github.com/afifmau/kip-ck/issues)

We aim to acknowledge reports within **72 hours** and resolve valid issues as quickly as possible.



## Audit Plans

While KIP-CK is currently under rapid development, we plan to:

- Seek grants to fund **independent smart contract audits**
- Offer a **Bug Bounty Program** post-mainnet
- Publish public test coverage and fuzzing stats

-m

## Known Risks (See `/security/risk-disclosure.md`)

We openly disclose all known and theoretical vulnerabilities during testnet/devnet phase.



*This file will be continuously updated as the protocol matures.*

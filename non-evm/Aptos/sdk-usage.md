#  SDK Usage – Aptos Integration

This section describes how to use the Aptos SDK to interact with the KIP-CK cross-chain protocol components on the Aptos chain.

---

## Dependencies

Make sure to install the official Aptos SDK:

```bash
npm install aptos

or for Python:

pip install aptos-sdk




 Initialization (JavaScript Example)

const { AptosClient, AptosAccount } = require("aptos");

const client = new AptosClient("https://fullnode.testnet.aptoslabs.com");
const account = new AptosAccount(); // your keypair

console.log("Wallet address:", account.address().hex());




 Signing Intent

Use the Aptos SDK to sign a payload off-chain before relaying:

const payload = Buffer.from("cross-chain-intent-data");
const signature = account.signBuffer(payload);

This signed intent will then be picked up by the KIP-CK relayer.




 Relaying to KIP-CK

KIP-CK uses a relayer to receive signed payloads and submit them to the destination chain. On Aptos:

The relayer sends a transaction containing the signed payload

A smart contract verifies the payload and executes accordingly


Example (pseudo):

await client.submitTransaction(account, {
  type: "entry_function_payload",
  function: "0x1::kip_ck::relay_intent",
  arguments: [payload, signature],
});




 Notes

Ensure you’re using the Testnet for experiments

Smart contracts should implement signature verification logic

Integration with other chains (EVM, Sui, etc.) is handled by the KIP-CK relayer module





✅ This demonstrates a minimal, proof-of-concept integration with the Aptos SDK.


#  Testing Guide – Aptos Integration

This guide outlines how to test the KIP-CK protocol on the Aptos network during development.

---

##  Test Environment Setup

1. **Install the Aptos CLI**
   ```bash
   curl -sSL https://aptos.dev/scripts/install_cli.sh | bash

2. Create a Test Account

aptos init


3. Fund the account from the Aptos testnet faucet

aptos account fund-with-faucet --account default




---

 Simulation Steps

1. Deploy Mock Contract (Optional)

Simulate signature verification and execution logic.

Deploy using:

aptos move publish --package-dir . --named-addresses kip_ck=your_address



2. Sign an Off-chain Intent

Use the SDK or CLI to sign a payload.



3. Relay Transaction

Send the transaction containing payload + signature using:

aptos move run --function-id <module>::relay_intent --args <payload> <signature>



4. Verify Execution

Query events or read resource changes to validate the result.





---

 Cleanup

Reset the account or faucet again if needed.

Remove old deployment with:

aptos move clean



---

 This guide ensures smooth end-to-end testing on Aptos for the KIP-CK protocol.

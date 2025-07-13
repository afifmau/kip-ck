# Test Scenarios – KIP-CK Simulation

Below are some example scenarios that developers or reviewers can try using the demo to better understand the transaction flow.

---

## Happy Path

**Input:** Valid wallet address (e.g., `0xAbc123...`)  
**Expected:**  
- Intent signing is shown  
- Relayer forwards transaction  
- Signature is verified  
- Transaction executed and success message displayed

---

## Invalid Wallet Input

**Input:** Empty string or malformed address (e.g., `abc123`)  
**Expected:**  
- Error message displayed: "Please enter a valid wallet address"  
- Simulation does not proceed

---

## Manual Tampering (Web Only)

**Action:** Open browser devtools → modify JS to force invalid payload  
**Expected:**  
- The demo does not have internal payload validation, but this demonstrates how fragile simulations are without backend logic

---

## Future Scenario (for testnet)

Once connected to a real blockchain, consider:
- Simulating gas fee failure
- Partial transaction state sync
- User canceling mid-intent

---

## Notes

These scenarios are useful for understanding what’s **currently possible** and what should be added in later testnet implementations.

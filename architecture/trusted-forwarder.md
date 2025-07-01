# 🛡️ Trusted Forwarder

A **Trusted Forwarder** is a smart contract component that acts as a secure relay entry point for meta-transactions.  
In the KIP-CK protocol, it's used to verify signatures, prevent replay attacks, and execute logic on behalf of the original user.

---

## 🔐 Key Responsibilities

1. **Verify Signature**  
   Ensures the transaction was authorized by the real user, not just the relayer.

2. **Check Nonce / Expiration**  
   Protects against replay and expired payloads.

3. **Execute Call**  
   Forwards the function call to target logic while overriding `msg.sender` as the original signer.

---

## 🧬 Contract Interface (EVM Sample)

```solidity
function executeMetaTx(
    address user,
    bytes calldata functionCall,
    uint256 nonce,
    uint256 expiry,
    bytes calldata signature
) external {
    require(block.timestamp <= expiry, "Expired");
    require(!used[nonce], "Replay detected");

    bytes32 hash = keccak256(abi.encode(user, functionCall, nonce, expiry));
    require(recoverSigner(hash, signature) == user, "Invalid signature");

    used[nonce] = true;
    (bool success, ) = target.call(abi.encodePacked(functionCall, user));
    require(success, "Execution failed");
}


---

🧪 Security Notes

Relayers cannot spoof users — all calls require valid signatures

Nonce or hash-based replay protection is required

May be upgraded to support batching, multi-signatures, or gas refunds



---

🌐 Cross-chain Role

On every destination chain, a compatible Trusted Forwarder contract must be deployed.
It interprets the signed payload and invokes the appropriate logic locally — no bridge needed.


---

✅ Summary

Trusted Forwarders are a critical element of KIP-CK, ensuring both security and flexibility in cross-chain intent execution.
They decouple gas-payer from logic-sender, allowing truly decentralized and sponsorless interoperability.

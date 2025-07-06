function startSimulation() { const wallet = document.getElementById("wallet").value.trim(); const log = document.getElementById("log"); log.innerHTML = "";

if (!wallet || !wallet.startsWith("0x") || wallet.length < 10) { appendLog(<p class="error">⚠️ Please enter a valid wallet address.</p>); return; }

appendLogAnimated(🔐 Signing intent as ${wallet}..., () => { setTimeout(() => { appendLogAnimated("📡 Relayer forwarding transaction to destination chain...", () => { setTimeout(() => { appendLogAnimated("✅ Signature verified on destination chain.", () => { setTimeout(() => { appendLogAnimated(🏁 Transaction executed as ${wallet}, () => { appendLogAnimated("🎉 Simulation complete."); }); }, 1000); }); }, 1000); }); }, 1000); }); }

function appendLog(message) { const log = document.getElementById("log"); const p = document.createElement("p"); p.textContent = message; p.classList.add("log-line"); log.appendChild(p); }

function appendLogAnimated(message, callback) { const log = document.getElementById("log"); const p = document.createElement("p"); p.classList.add("log-line"); log.appendChild(p);

let i = 0; const interval = setInterval(() => { p.textContent += message[i]; i++; if (i === message.length) { clearInterval(interval); if (callback) callback(); } }, 20); }


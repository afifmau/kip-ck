function startSimulation() {
  const wallet = document.getElementById("wallet").value.trim();
  const log = document.getElementById("log");
  log.innerHTML = "";

  if (!wallet || !wallet.startsWith("0x") || wallet.length < 10) {
    appendLog("⚠️ Please enter a valid wallet address.", true);
    return;
  }

  appendLog(`🔐 Signing intent as ${wallet}...`);

  setTimeout(() => {
    appendLog("📡 Relayer forwarding transaction to destination chain...");

    setTimeout(() => {
      appendLog("✅ Signature verified on destination chain.");

      setTimeout(() => {
        appendLog(`🏁 Transaction executed as ${wallet}`);
        appendLog("🎉 Simulation complete.");
      }, 1000);
    }, 1000);
  }, 1000);
}

function appendLog(message, isError = false) {
  const log = document.getElementById("log");
  const p = document.createElement("p");
  p.textContent = message;
  p.style.color = isError ? "red" : "inherit";
  log.appendChild(p);
}

function toggleTheme() {
  const isDark = document.body.style.backgroundColor === "rgb(13, 13, 13)";
  if (isDark) {
    document.body.style.backgroundColor = "#f5f5f5";
    document.body.style.color = "#111";
  } else {
    document.body.style.backgroundColor = "#0d0d0d";
    document.body.style.color = "#f0f0f0";
  }
}

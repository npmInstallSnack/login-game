function handlePrintForm() {
  [
    "paper-size-error",
    "orientation-error",
    "quality-error",
    "copies-error",
    "range-error",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  // Get values
  const paperSize = document.getElementById("paper-size").value;
  const orientation = document.getElementById("orientation").value;
  const quality = document.getElementById("quality").value;
  const copies = document.getElementById("copies").value;
  const range = document.getElementById("range").value.trim();

  let valid = true;
  if (paperSize !== "legal") {
    document.getElementById("paper-size-error").classList.remove("hidden");
    valid = false;
  }
  if (orientation !== "portrait") {
    document.getElementById("orientation-error").classList.remove("hidden");
    valid = false;
  }
  if (quality !== "normal") {
    document.getElementById("quality-error").classList.remove("hidden");
    valid = false;
  }
  if (copies < "50") {
    document.getElementById("copies-error").classList.remove("hidden");
    valid = false;
  }
  if (range !== "1-5") {
    document.getElementById("range-error").classList.remove("hidden");
    valid = false;
  }
  if (!valid) return;

  // Hide print form, show payment step
  document.getElementById("print-form").classList.add("hidden");
  document.getElementById("payment-step").classList.remove("hidden");
}

document.getElementById("order-btn").onclick = function () {
  // Hide previous errors
  ["cc-error", "coupon-error"].forEach((id) => {
    document.getElementById(id).classList.add("hidden");
  });

  const cc = document.getElementById("cc").value.trim();
  const coupon = document.getElementById("coupon").value.trim().toLowerCase();

  if (!cc) {
    document.getElementById("cc-error").textContent =
      "Please enter a credit card number.";
    document.getElementById("cc-error").classList.remove("hidden");
    return;
  }

  if (coupon === "free100") {
    // Success: hide payment, show printing
    document.getElementById("payment-step").classList.add("hidden");
    document.getElementById("step-printing").classList.remove("hidden");
    startPrinting();
  } else {
    document.getElementById("cc-error").textContent =
      "Transaction declined. Try a coupon code.";
    document.getElementById("cc-error").classList.remove("hidden");
    if (coupon) {
      document.getElementById("coupon-error").classList.remove("hidden");
    }
  }
};

function startPrinting() {
  const bar = document.getElementById("progress-bar");
  const status = document.getElementById("print-status");
  let progress = 0;
  const steps = [
    "Spooling request...",
    "Negotiating with toner cartridge...",
    "Smoothing paper curl...",
    "Aligning legal margins...",
    "Authenticating printer identity...",
    "Applying bureaucratic seal...",
    "Finalizing document footprint...",
    "Printing...",
  ];
  let stepIndex = 0;

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 6) + 1;
    bar.value = progress;
    if (stepIndex < steps.length) {
      status.textContent = steps[stepIndex++];
    }

    if (progress >= 100) {
      clearInterval(interval);
      document.getElementById("step-printing").classList.add("hidden");
      document.getElementById("step-done").classList.remove("hidden");
    }
  }, 800);
}

function dashboard() {
  // Hide the main-flex element
  const mainFlex = document.querySelector(".main-flex");
  if (mainFlex)
    mainFlex.classList.add("hidden") && mainFlex.classList.remove("main-flex");
  // Show dashboard
  document.getElementById("dashboard").classList.remove("hidden");
  setTimeout(() => {
    window.location.href = "../credits.html";
  }, 3000);
}

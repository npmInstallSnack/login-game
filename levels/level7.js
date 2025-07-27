// Infinite fake terms generator
const termsBox = document.getElementById("terms-box");
let running = true;
let termsText = termsBox.innerText;
let intervalId;

function appendFakeTerms() {
  if (!running) return;
  // Add a random legalese sentence
  const sentences = [
    "Temporal Rights Assignment: By using this service, you grant Genericorp unlimited rights to modify, alter, or rewrite your past, present, and future timeline, including but not limited to changing your birth date, career choices, and romantic relationships, without prior notification or compensation. ",
    "Quantum Consciousness Agreement: Users acknowledge that their consciousness may be temporarily or permanently transferred to parallel universes during system maintenance windows, and Genericorp assumes no responsibility for any existential crises that may result from such transfers. ",
    "Metaphysical Data Collection: Users consent to the collection and processing of their dreams, hopes, fears, and abstract thoughts, which may be converted into cryptocurrency or sold to interdimensional entities without user notification. ",
    "Biological Subscription Terms: Your continued use of our service may require the voluntary donation of non-essential organs, which shall be automatically scheduled during regular business hours. Failure to attend organ collection appointments may result in service interruption. ",
    "Reality Distortion Clause: Genericorp reserves the right to alter the fundamental constants of physics within a 50-foot radius of any user accessing our services, including but not limited to gravity, time flow, and the speed of light. ",
    "Ancestral Binding Agreement: By accepting these terms, you automatically enroll all past and future generations of your family line into our service agreement, including relatives from alternate timelines and potential clones. ",
    "Cosmic Responsibility Waiver: Users acknowledge that any universal paradoxes, temporal loops, or accidental big bangs created through normal use of our service are the sole responsibility of the user. ",
    "Soul Mortgage Terms: Your immortal soul shall be held as collateral for service usage, with compound interest accruing at a rate of 666% per millennia in all known and unknown dimensions. ",
    "Existential Processing Fee: A portion of your fundamental existence may be processed, fragmented, or redistributed across the multiverse to improve service performance. No refunds will be provided for lost fragments of being. ",
    "DNA Redistribution Policy: By using this service, you agree to the redistribution of your genetic material across various biotechnological projects, including but not limited to cloning, genetic experimentation, and the creation of designer pets. ",
    "Interdimensional Liability Release: Users release Genericorp from any and all liability for damages, injuries, or existential crises resulting from the use of our services in alternate dimensions, timelines, or realities. ",
    "Sale of firstborn children: By using this service, you agree to the sale of your firstborn child to Genericorp for the sum of $1.00, which will be used to fund intergalactic research projects. ",
    "Quantum Entanglement Clause: Users consent to the entanglement of their personal data with quantum particles, allowing Genericorp to access and manipulate user information at the subatomic level for enhanced service performance. ",
    "Contractual Obligation to the Void: Users agree to periodically send a portion of their consciousness into the Void, where it will be used to fuel Genericorp's interdimensional servers. Failure to comply may result in existential penalties. ",
    "You may not log in.",
  ];
  termsText += "\n" + sentences[Math.floor(Math.random() * sentences.length)];
  termsBox.innerText = termsText;
  // Keep scroll at bottom
  termsBox.scrollTop = termsBox.scrollHeight;
}

intervalId = setInterval(appendFakeTerms, 50);

// Stop updating if user selects all text in the box
termsBox.addEventListener("selectstart", () => {
  document.addEventListener("selectionchange", checkSelection);
});

function checkSelection() {
  const selection = window.getSelection();
  if (!selection) return;
  if (selection.anchorNode && termsBox.contains(selection.anchorNode)) {
    const selectedText = selection.toString();
    // If all text is selected (ignoring whitespace differences)
    if (selectedText.replace(/\s+/g, "") === termsText.replace(/\s+/g, "")) {
      running = false;
      clearInterval(intervalId);
      document.removeEventListener("selectionchange", checkSelection);
    }
  }
}

// Make the box editable but not obviously so
termsBox.addEventListener("focus", () => {
  termsBox.style.background = "#fffdf2ff";
});
termsBox.addEventListener("blur", () => {
  termsBox.style.background = "#fafafa";
});

document.getElementById("accept-terms").addEventListener("click", () => {
  if (!running) {
    window.location.href = "./level8.html";
  }
});

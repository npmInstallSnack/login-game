const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const errorMsg = document.getElementById("error-msg");

const messages = [
  "Are you sure?",
  "Oh really?",
  "You absolutely certain?",
  "Like, 100% positive?",
  "No doubt whatsoever?",
  "It's strange, I just don't believe you.",
  "You know, I have a feeling you're not being honest.",
  "I think you might be lying to me.",
  "AHA! I knew it! You are lying! You said you were sure, but you weren't!",
  "You know, I don't think you really mean it.",
  "Are you just saying that to get out of this?",
  "Why would you lie to me?",
  "You know, lying is not a good habit.",
  "I don't appreciate being lied to.",
  "You know, I trusted you.",
  "You broke my trust.",
  "You know, I thought we had something special.",
  "You know, I thought you were different.",
  "You know, I thought you were honest.",
  "You know, I thought you were trustworthy.",
  "You know, I thought you were sincere.",
  "You know, I thought you were genuine.",
  "You know, I thought you were real.",
  "I thought you were... my friend.",
  "But you lied to me.",
  "And now, I don't know what to think.",
  "I don't know if I can trust you anymore.",
  "I thought you were better than this.",
  "So I guess this is it.",
  "This is where we part ways.",
  "I guess I'll just have to move on.",
  "I'll just have to forget about you. And this.",
  "I'll just have to find someone else.",
  "Someone who won't lie to me. And who will save their recovery codes.",
  "So I just need to ask you one last time.",
  "Are you sure you saved the codes?",
  "Final answer?",
  "Switcheroo!",
];

let currentMessageIndex = 0;
let isSwapped = false;

function reset() {
  errorMsg.textContent = "";
  currentMessageIndex = 0;
  // Reset button positions if they were swapped
  if (isSwapped) {
    const temp = yesButton.parentNode.removeChild(yesButton);
    noButton.after(temp);
    isSwapped = false;
  }
}

yesButton.addEventListener("click", () => {
  if (currentMessageIndex === messages.length - 1) {
    if (!isSwapped) {
      // Physically move the buttons in the DOM
      const temp = yesButton.parentNode.removeChild(yesButton);
      noButton.before(temp);
      isSwapped = true;
    } else {
      window.location.href = "./level9.html"; // Redirect to next level
    }
  }

  errorMsg.textContent = messages[currentMessageIndex];
  if (currentMessageIndex < messages.length - 1) {
    currentMessageIndex++;
  }
});

noButton.addEventListener("click", reset);

// Set up container for button swapping
const container = yesButton.parentElement;
container.style.display = "flex";
container.style.gap = "10px";

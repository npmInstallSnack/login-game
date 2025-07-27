function biasedHash(input) {
  // Convert input to string and get a hash-like number
  const str = JSON.stringify(input);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Force 32-bit integer
  }

  // Normalize to [0, 1)
  const normalized = Math.abs(hash % 10000) / 10000;

  // Biased threshold: only values < 0.01 return 1 (i.e., ~10% chance)
  return normalized < 0.1 ? 1 : 0;
}
document.getElementById("username-form").onsubmit = function (e) {
  e.preventDefault();
  const username = document
    .getElementById("username")
    .value.trim()
    .toLowerCase();
  const bias = biasedHash(username);
  if (bias) {
    // Store username in localStorage
    localStorage.setItem("loginGameUsername", username);
    window.location.href = "level3.html";
  } else {
    const errorMsg = document.getElementById("error-msg");
    if (username.length < 5) {
      errorMsg.textContent = "Username must be at least 5 characters.";
    } else {
      {
        errorMsg.textContent = "Username is taken. Please choose another.";
      }
    }
  }
};

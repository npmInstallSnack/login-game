document.getElementById("confirm-form").onsubmit = function (e) {
  e.preventDefault();
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMsg = document.getElementById("error-msg");
  const originalPassword = localStorage.getItem("loginGamePassword");
  if (confirmPassword !== originalPassword) {
    errorMsg.textContent = "Passwords do not match.";
  } else {
    window.location.href = "level5.html";
  }
};

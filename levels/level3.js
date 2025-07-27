document.getElementById("password-form").onsubmit = function (e) {
  e.preventDefault();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");
  if (password.length < 8) {
    errorMsg.textContent = "Password must be at least 8 characters.";
  } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    errorMsg.textContent =
      "Password must contain at least one uppercase letter and one number.";
  } else {
    localStorage.setItem("loginGamePassword", password);
    window.location.href = "level4.html";
  }
};

document.getElementById("email-form").onsubmit = function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const errorMsg = document.getElementById("error-msg");
  if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    // Store email in localStorage
    localStorage.setItem("loginGameEmail", email);
    // Store game start time for completion tracking
    if (!localStorage.getItem("gameStartTime")) {
      localStorage.setItem("gameStartTime", Date.now().toString());
    }
    window.location.href = "level2.html";
  } else {
    errorMsg.textContent = "Please enter a valid email address.";
  }
};

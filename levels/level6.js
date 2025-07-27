const birthdateInput = document.getElementById("birthdate");
const today = new Date();
// Create date using UTC to avoid timezone issues
const eighteenYearsAgo = new Date(
  Date.UTC(today.getFullYear() - 18, today.getMonth(), today.getDate())
);

birthdateInput.addEventListener("change", () => {
  // Convert input value to UTC date at midnight
  const [year, month, day] = birthdateInput.value.split("-").map(Number);
  const birthdate = new Date(Date.UTC(year, month - 1, day));

  const isSameDay = (d1, d2) =>
    d1.getUTCFullYear() === d2.getUTCFullYear() &&
    d1.getUTCMonth() === d2.getUTCMonth() &&
    d1.getUTCDate() === d2.getUTCDate();
  if (isNaN(birthdate.getTime())) {
    birthdateInput.setCustomValidity("Please enter a valid date.");
  } else if (!isSameDay(birthdate, eighteenYearsAgo)) {
    birthdateInput.setCustomValidity("You must be 18 years old. Exactly 18.");
  } else {
    birthdateInput.setCustomValidity(""); // Clear the error
    window.location.href = "/levels/level7.html";
  }
});

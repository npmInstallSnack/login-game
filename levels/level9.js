const form = document.getElementById("security-form");
const errorMsg = document.getElementById("error-msg");
const hintElement = document.getElementById("hint");

// Track selected questions to prevent duplicates
const selectedQuestions = new Set();

// Add change listeners to all question selects
["question1", "question2", "question3"].forEach((id) => {
  const select = document.getElementById(id);
  select.addEventListener("change", () => {
    const value = select.value;
    if (value && selectedQuestions.has(value)) {
      errorMsg.textContent =
        "Each security question must be unique... in this timeline.";
      select.value = "";
    } else {
      selectedQuestions.delete(select.dataset.lastValue);
      if (value) {
        selectedQuestions.add(value);
      }
      select.dataset.lastValue = value;
      errorMsg.textContent = "";
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const question1 = document.getElementById("question1").value;
  const question2 = document.getElementById("question2").value;
  const question3 = document.getElementById("question3").value;

  const answers = {
    [question1]: document.getElementById("answer1").value.trim(),
    [question2]: document.getElementById("answer2").value.trim(),
    [question3]: document.getElementById("answer3").value.trim(),
  };

  let isValid = true;

  // Validate answers based on question type
  // Add absurd validations
  if (
    question1 === "past" &&
    !answers[question1].toLowerCase().includes("maybe")
  ) {
    errorMsg.textContent =
      "Are you really sure about that dream? *Maybe* add some uncertainty. Maybe?";
    isValid = false;
  }
  if (
    (question1 === "theoretical" &&
      answers[question1].toLowerCase().includes("bark")) ||
    answers[question1].toLowerCase().includes("ruff") ||
    answers[question1].toLowerCase().includes("meow") ||
    answers[question1].toLowerCase().includes("purr")
  ) {
    errorMsg.textContent = "That's already their catchphrase!";
    isValid = false;
  }
  if (question1 === "metaphysical") {
    errorMsg.textContent = "Socks go to";
    isValid = false;
  }

  if (question2 === "quantum" && !/^\d+$/.test(answers[question2])) {
    errorMsg.textContent =
      "Please count your blinks more carefully. Numbers only!";
    isValid = false;
  }

  if (
    question2 === "alternative" &&
    answers[question2].toLowerCase().includes("rich")
  ) {
    errorMsg.textContent =
      answers[question2].charAt(0).toUpperCase() +
      answers[question2].slice(1) +
      "? You wouldn't be rich in any universe!";
    isValid = false;
  }
  if (question3 === "existential" && answers[question3].length < 42) {
    errorMsg.textContent =
      "That doesn't seem like a deep and looooong enough answer to 'Why?'";
    isValid = false;
  }

  if (
    question3 === "recursive" &&
    answers[question3].toLowerCase() !== "this answer"
  ) {
    errorMsg.textContent =
      "Your recursive answer doesn't seem to be recursing correctly.";
    isValid = false;
  }

  if (question3 === "paradox" && !answers[question3].endsWith("?")) {
    errorMsg.textContent =
      "That doesn't look like a question. It should end with '?'";
    isValid = false;
  }
  if (
    answers[question2].toLowerCase().includes("blue") &&
    question2 === "future"
  ) {
    errorMsg.textContent =
      "Sorry, blue will be obsolete by 2037 and be called akizhulphin.";
    isValid = false;
  }

  if (
    answers[question1].length === answers[question2].length &&
    answers[question2].length === answers[question3].length
  ) {
    errorMsg.textContent =
      "Your answers are suspiciously consistent. Please add more chaos.";
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("securityAnswers", JSON.stringify(answers));
    // Remove storing selectedQuestions separately
    errorMsg.textContent = "";
    hintElement.textContent =
      "WARNING: Due to temporal anomalies, your answers may have changed by the time you need them.";

    // Redirect after a dramatic pause
    setTimeout(() => {
      window.location.href = "level10.html";
    }, 4000);
  }
});

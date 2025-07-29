const grid = document.getElementById("captchaGrid");
const gridSize = 10;
const totalTiles = gridSize * gridSize;

// Define which tiles are correct (these are fake "dog" boxes)
const correctIndexes = [
  24, 25, 33, 34, 35, 36, 43, 44, 45, 46, 54, 55, 56, 63, 64, 65, 66, 73, 74,
  75, 76, 83, 84,
];

// Generate grid tiles
for (let i = 0; i < totalTiles; i++) {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.dataset.index = i;
  tile.addEventListener("click", () => {
    tile.classList.toggle("selected");
  });
  grid.appendChild(tile);
}

function checkCaptcha() {
  const selected = Array.from(document.querySelectorAll(".tile.selected")).map(
    (tile) => parseInt(tile.dataset.index)
  );

  const isCorrect = correctIndexes.every((index) => selected.includes(index));

  const result = document.getElementById("result");
  if (isCorrect) {
    result.textContent = "✅ You're hummus!";
    result.style.color = "green";
    setTimeout(() => {
      window.location.href = "./level6.html";
    }, 1500);
  } else {
    result.textContent = "❌ Try again.";
    result.style.color = "red";
  }
}

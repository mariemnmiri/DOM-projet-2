document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeBtn = document.getElementById("change-color-btn");

  // Function to generate a random hex color
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Change color when button is clicked
  changeBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
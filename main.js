document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "gautam sahani updated resume 05242024.pdf";
    link.download = "gautam-sahani-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
// hero section effect
document.addEventListener("DOMContentLoaded", function () {
  // Trigger animations for columns
  document.querySelector(".col-left").style.animationDelay = "0.5s";
  document.querySelector(".col-right").style.animationDelay = "0.5s";

  // Typing effect
  const text = "I'm Gautam Shahani...";
  const typingElement = document.getElementById("typing-effect");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
    }
  }

  // Start typing after the columns have animated in
  setTimeout(type, 1500); // Adjust delay to match the column animations
});

// skilll section javascript
document.addEventListener("DOMContentLoaded", function () {
  // Select all progress bars
  const progressBars = document.querySelectorAll(".progress-bar");

  // Array of target widths for each progress bar
  const widths = [
    "82%",
    "78%",
    "75%",
    "65%",
    "60%",
    "55%",
    "65%",
    "40%",
    "80%",
    "60%",
  ];

  // Function to animate progress bars sequentially
  function animateProgressBars(index) {
    if (index >= progressBars.length) return;

    const progressBar = progressBars[index];
    const width = widths[index]; // Get the width from the array

    // Set initial width to 0% and trigger the loadProgress animation
    progressBar.style.width = "0";
    progressBar.style.opacity = 1;

    // Set the final width after the initial animation starts
    setTimeout(() => {
      progressBar.style.width = width;
    }, 10); // Small delay to allow the initial state to apply

    // Move to the next progress bar after a delay
    setTimeout(() => animateProgressBars(index + 1), 2000); // Adjust timing here
  }

  // Start the animation
  animateProgressBars(0);
});

// javascript for skill and experience container
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".border");

  function animateOnScroll() {
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (index % 2 === 0) {
          el.classList.add("animate-left");
        } else {
          el.classList.add("animate-right");
        }
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Trigger animation on page load
});

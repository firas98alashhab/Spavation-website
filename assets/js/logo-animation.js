// // script.js

// // Get a reference to the GIF element
// const gifElement = document.getElementById("robot-gif");

// // Function to play the GIF
// function playGif() {
//     gifElement.classList.remove("hidden");
//     gifElement.src = gifElement.src; // Reloads the GIF to restart the animation
// }

// // Function to hide the GIF
// function hideGif() {
//     gifElement.classList.add("hidden");
// }

// // Function to check if the GIF has entered or exited the viewport
// function checkGifVisibility() {
//     const gifTop = gifElement.getBoundingClientRect().top;
//     if (gifTop < window.innerHeight && gifTop > 0) {
//         playGif();
//     } else {
//         hideGif();
//     }
// }

// // Add a scroll event listener to check GIF visibility
// window.addEventListener("scroll", checkGifVisibility);

// // Initial check to see if the GIF is visible when the page loads
// checkGifVisibility();

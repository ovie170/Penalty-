// How long to show the splash (ms)
const DURATION = 3000;

// After DURATION, go to your next page
window.addEventListener("load", () => {
  setTimeout(() => {
    // Change this to "signin.html" once your sign-in page is ready
    window.location.href = "signin.html";
  }, DURATION);
});

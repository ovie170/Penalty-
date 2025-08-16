// Wait 3 seconds then hide splash and show sign in
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("signin").classList.remove("hidden");
}, 3000);

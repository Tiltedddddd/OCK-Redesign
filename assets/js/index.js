// Sidebar Menu Logic
function openNav() {
  document.getElementById("sideNav").style.width = "250px";
  document.getElementById("sideNavOverlay").style.display = "block";
  document.getElementById("sideNavOverlay").style.zIndex = "9";

  // Disable page scrolling when sideNav is open  
  document.body.style.overflow = "hidden";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("sideNavOverlay").style.display = "none";

  // Re-enable scrolling
  document.body.style.overflow = "auto";
}

// Makes sure esc closes the navbar for uiux 
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeNav();
    }
  });
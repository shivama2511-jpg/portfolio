
  document.querySelector(".menu-toggle").onclick = () => {
    document.querySelector(".nav-links").classList.toggle("show");
  };

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
  }, 2500);
});


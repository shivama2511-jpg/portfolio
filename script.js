
  document.querySelector(".menu-toggle").onclick = () => {
    document.querySelector(".nav-links").classList.toggle("show");
  };

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
  }, 3600);
});
const openBtn = document.getElementById("form-float-btn");
const popup = document.getElementById("form-popup");
const closeBtn = document.getElementById("close-form");

openBtn.onclick = () => popup.style.display = "block";
closeBtn.onclick = () => popup.style.display = "none";
setTimeout(() => {
  document.getElementById("form-float-btn").style.display = "flex";
}, 5000); // intro 4-0.0 sec ka hai to


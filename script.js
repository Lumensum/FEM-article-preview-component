const shareButton = document.getElementById("sharebutton");
const shareBar = document.querySelector(".sharebar");

shareButton.addEventListener("click", toggleSharebar);

function toggleSharebar() {
  shareBar.classList.toggle("show");
}

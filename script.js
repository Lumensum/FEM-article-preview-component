const shareButton = document.getElementById("shareButton");
const shareButton2 = document.getElementById("shareButton2");
const shareBar = document.querySelector(".sharebar");
const authorBar = document.querySelector(".authorbar");

shareButton.addEventListener("click", toggleSharebar);
shareButton2.addEventListener("click", toggleSharebar);

function toggleSharebar() {
  shareBar.classList.toggle("hideMe");
}

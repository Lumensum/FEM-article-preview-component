const shareButton = document.getElementById("shareButton");
const shareBar = document.querySelector(".main__share");
const authorBar = document.querySelector(".author");

shareButton.addEventListener("click", () => {
  if (shareBar.style.display == "block") {
    shareBar.style.display = "none";
  } else {
    shareBar.style.display = "block";
  }
});

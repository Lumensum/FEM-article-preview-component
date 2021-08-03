const shareButton = document.getElementById("shareButton");
const shareButton2 = document.getElementById("shareButton2");
const shareBar = document.querySelector(".main__share");
const authorBar = document.querySelector(".author");

shareButton.addEventListener("click", () => {
  if (shareBar.style.bottom == "-60px") {
    shareBar.style.bottom = "-150px";
  } else {
    shareBar.style.bottom = "-60px";
  }
});

shareButton2.addEventListener("click", () => {
  if (shareBar.style.bottom == "-60px") {
    shareBar.style.bottom = "-150px";
  } else {
    shareBar.style.bottom = "-60px";
  }
});

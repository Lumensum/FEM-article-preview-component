const shareButton = document.getElementById("shareButton");
const shareButton2 = document.getElementById("shareButton2");
const shareBar = document.querySelector(".main__share");
const authorBar = document.querySelector(".author");

shareButton.addEventListener("click", () => {
  if (shareBar.style.bottom == "-125px") {
    shareBar.style.bottom = "-250px";
  } else {
    shareBar.style.bottom = "-125px";
  }
});

shareButton2.addEventListener("click", () => {
  if (shareBar.style.bottom == "-125px") {
    shareBar.style.bottom = "-250px";
  } else {
    shareBar.style.bottom = "-125px";
  }
});

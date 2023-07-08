function playVideo() {
  document.getElementById("trailer").style.display = "flex";
  // docu
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  document.getElementById("trailer").style.display = "none";
  document.body.style.overflow = "auto";
}
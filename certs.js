function showModal(imagePath) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-image");
  modalImg.src = imagePath;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Optional: close when clicking outside the image
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  new Typed('#element', {
    strings: [
      '<i>C.V. Raman Global University</i>',
      'Bhubaneshwar',
      'Odisha'
    ],
    typeSpeed: 50,
    backSpeed: 30,        
    loop: true           
  });
});

function showResumeModal() {
    document.getElementById("resumeModal").style.display = "block";
  }

  function closeResumeModal() {
    document.getElementById("resumeModal").style.display = "none";
  }

  window.onclick = function (event) {
    const modal = document.getElementById("resumeModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
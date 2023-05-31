function displayImage(src) {
    let modal = document.getElementById("modal");
    let modalImage = document.getElementById("modalImage");
  
    modalImage.src = src;
    modal.style.display = "block";
  }
  
  function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
  }
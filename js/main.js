const titleElement = document.querySelector('#title');
const wishText = "For the one reading this, I hope life has been kind to you lately.";
let j = 0;

function typingWish() {
  if (j < wishText.length) {
    titleElement.innerHTML += wishText.charAt(j);
    j++;
    setTimeout(typingWish, 100);
  }
}

// Kasih jeda 1 detik biar bunganya mekar dulu baru tulisan ngetik
setTimeout(typingWish, 1000);

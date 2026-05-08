const title = document.querySelector('.title');
const text1 = "little gift from pradya";
const text2 = "For the one reading this, I hope life has been kind to you lately.";

title.style.display = 'block'; 
title.style.textAlign = 'center';

function typeWriter(text, i, callback) {
  if (i < text.length) {
    title.innerHTML = text.substring(0, i + 1);
    setTimeout(() => {
      typeWriter(text, i + 1, callback);
    }, 100);
  } else if (callback) {
    setTimeout(callback, 2000); 
  }
}

// Jalankan fungsi
typeWriter(text1, 0, () => {
  typeWriter(text2, 0);
});

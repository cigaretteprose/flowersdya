const title = document.querySelector('.title');
const text = "little gift from pradya";
let i = 0;

function typing() {
  if (i < text.length) {
    title.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

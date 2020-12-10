const bar = document.querySelector(".main__bodyMiddle");
const left = document.querySelector(".main__bodyLeft");
const right = document.querySelector(".main__bodyRight");
let mouse_is_down = false;

bar.addEventListener("mousedown", (e) => {
  mouse_is_down = true;
});

document.addEventListener("mousemove", (e) => {
  if (!mouse_is_down) return;

  let min_left = 400;
  if (e.clientX > min_left) {
    left.style.width = `${e.clientX}px`;
  } else {
    mouse_is_down = false;
  }

  let min_right = 250;
  if (screen.width - e.clientX > min_right) {
    right.style.width = `${screen.width - e.clientX}px`;
  } else {
    mouse_is_down = false;
  }
});

document.addEventListener("mouseup", () => {
  mouse_is_down = false;
});

function hideBodyRight() {
  bar.style.display = "none";
  //bar.remove();
  // right.remove();
  right.style.display = "none";
  left.style.width = `${screen.width}px`;
}
function goFull() {
  // bar.remove();
  // left.remove();
  bar.style.display = "none";
  left.style.display = "none";
  right.style.width = `${screen.width}px`;
}

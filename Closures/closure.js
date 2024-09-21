const myName = document.getElementById("my-name");
const myBtn = document.getElementById("my-btn");

function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}px`;
  }

  return changeSize;
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size30 = makeTextSizer(30);
const size50 = makeTextSizer(50);

myBtn.addEventListener("click", size50);

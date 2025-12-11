const kickSound = new Audio();
kickSound.src = "./ball_kick.mp3";
const wrapper = document.getElementById("wrapper");
const ball = document.getElementById("ball");

wrapper.addEventListener("click", (evt) => {
  kickSound.play();
  let r=ball.clientWidth/2;
  let ww=wrapper.clientWidth;
  let wh=wrapper.clientHeight;
  let cy = evt.offsetY;
  let cx = evt.offsetX;
  let fixedY=Math.max(r,Math.min(wh-r,cy));
  let fixedX=Math.max(r,Math.min(ww-r,cx));
  setTimeout(() => {
    ball.style.top = `${fixedY}px`;
    ball.style.left = `${fixedX}px`;
  }, 300);
});
const wrapper = document.getElementById("wrapper");
const ball = document.getElementById("ball");

wrapper.addEventListener("click", (evt) => {
  const rect = wrapper.getBoundingClientRect();
  const x = evt.clientX - rect.left; // X relative to wrapper
  const y = evt.clientY - rect.top;  // Y relative to wrapper

  setTimeout(() => {
    ball.style.top = `${y}px`;
    ball.style.left = `${x}px`;
  }, 300);
});

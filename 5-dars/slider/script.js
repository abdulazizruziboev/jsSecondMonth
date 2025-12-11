let elMainImg = document.getElementById("mainImg");
let elSelectBtns = document.querySelectorAll(".select_btns");
elSelectBtns.forEach((el,inx)=>{
    el.style.backgroundImage = `url("./imgs/${inx+1}.png")`;
});
function activeChanger() {
    elSelectBtns.forEach((btns)=>{
        btns.classList.remove("active");
        this.classList.add("active");
    })
};

function imgChanger() {
    elSelectBtns.forEach((el)=>{
        elMainImg.src = `./imgs/${this.getAttribute("data-img")}.png`;
    })
};

elSelectBtns.forEach(btns => {
    btns.addEventListener("click",activeChanger);
    btns.addEventListener("click",imgChanger);
});
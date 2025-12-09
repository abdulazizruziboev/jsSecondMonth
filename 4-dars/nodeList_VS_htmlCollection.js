/////////////////////////////////////////////////////////////////////////////////////
console.log("=====================================================")
const listElementsHTML = document.getElementsByClassName("fruits"); // No-Iterable
const listElementsNODE = document.querySelectorAll(".fruits"); // Iterable | Faqat forEach bilan!
console.log(listElementsHTML); // HTML Collection
console.log(listElementsNODE); // Node List
/////////////////////////////////////////////////////////////////////////////////////
console.log("=====================================================")
listElementsNODE.forEach(el => {
    el.style.color = "red";
    console.log(el.textContent);
    }
);
console.log("=====================================================")
/////////////////////////////////////////////////////////////////////////////////////
// HTML Collections faqat HTML elementlarni oladi.
/////////////////////////////////////////////////////////////////////////////////////
// Node esa barchasini: comment, text, HTML elementlarini va hokazolarni o'z ichiga oladi.
/////////////////////////////////////////////////////////////////////////////////////
const listElementsHTML2 = document.querySelector(".fruits"); // No-Iterable
const listElementsNODE2 = document.querySelector(".fruits"); // Iterable | Faqat forEach bilan!
console.log(listElementsHTML2.children); // Faqat teg ichiga o'ralganlarni oladi
console.log(listElementsNODE2.childNodes); // Barchasini oladi
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// HTML Collections faqat HTML elementlarni oladi.
/////////////////////////////////////////////////////////////////////////////////////
// Node esa barchasini: comment, text, HTML elementlarini va hokazolarni o'z ichiga oladi.
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// HTML Collections LIVE hisoblanib DOM o'zgarsa doimo yangilanib turadi.
/////////////////////////////////////////////////////////////////////////////////////
// Node List esa bazida o'zgaradi bazida o'zgarmaydi reload bo'lmaguncha. 
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
console.log("=====================================================")
console.log(listElementsHTML.length);
console.log(listElementsNODE.length);
const newChild = document.createElement("span");
newChild.classList.add("fruits");
newChild.textContent="Anjir"
document.querySelector(".listFruits").appendChild(newChild);
console.log(listElementsHTML.length); // Elementlar Ro'yxati O'zgardi
console.log(listElementsNODE.length); // O'zgarishi mumkin aksariyat xolarda 
console.log(document.querySelector(".listFruits").childNodes); // Bu methoda live o'zgarish mavjud yani DOM o'zgarsa bu ham o'zgaradi.
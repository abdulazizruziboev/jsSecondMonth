// console.log("Oddiy xabar"); berilgan messageni qaytaradi

// console.assert(1==2,"1 2 ga teng emas"); false bo'lsa messageni qaytaradi

// console.count("a") // Label nechi marta ishlatilganini aniqlab sonini qaytaradi
// console.count("b") // 1
// console.count("a") // 2
// console.countReset("a") // Aynan shu labeldagi countni 0 ga tenglaydi
// console.count("a") // 1

// console.error("a not defined") // Messageni error ko'rinishida aks etiradi.

// console.warn("Diapazondan tashqariga chiqb ketdingiz"); // Havfli ko'rinishida messageni aks etiradi

// console.group("Group") // guruh qilib o'raydi wrapper kabi.
// console.groupCollapsed("Collapsed Group"); // Guruhni details kabi berkitib qo'yadi agar berilmasa qatorasiga ketaveradi
// console.log("Group item"); 
// console.log("Group item");
// console.groupEnd() // Guruhni tugatadi

// let objTable = {name:"Ali",age:20}
// let arrTable = ["Anvar","No'mon","Kamron"];
// console.table(objTable) // Table ko'rinishida qaytaradi - key | value
// console.table(arrTable) // Table ko'rinishida qaytaradi - index | value

// console.time(); // Kod uchun timer | nechi ms kod ishlab tugab bo'lganini tekshirib beradi
// for (let i = 0; i<10; i++){
//     console.log(i);
// };
// console.timeEnd(); // Kodning timerini tugatish

// function x() {y()}; function y() {z()}; function z() {console.trace()};x(); // FUnksiyalarni zanjirini chiqarib beradi.  z -> y -> x !

// console.clear() // Consoleni tozalaydi

///////////////////////////////////////////////////////////////
// 1 - masala !
///////////////////////////////////////////////////////////////
function getAcronym(str){
    str = str.split(" ");
    const toUpper = str.map(el => {
        return el.charAt(0).toUpperCase();
    });
    let result = String(toUpper.map(el => {
        return el;
    }));
    result = result.split(",").join("");
    console.log(result);
};
///////////////////////////////////////////////////////////////
// 2 - masala !
///////////////////////////////////////////////////////////////
function extractNumbers(obj) {
    result = obj.map(el => {
        return parseInt(el.value.replace(/[a-z]/g,""));
    });
    console.log(result)
};
///////////////////////////////////////////////////////////////
// 3 - masala !
///////////////////////////////////////////////////////////////
function getUniqueColors(arr) {
    let x = new Set(arr);
    let y = Array.from(x);
    let z = y.map(el => {
        return el.toUpperCase();
    });
    let result = String(z).split(",").join(", ");
    console.log(result)
};
///////////////////////////////////////////////////////////////
// 4 - masala !
///////////////////////////////////////////////////////////////
function getTotalAmount(arr){
    let total = 0;
    arr.map(el => {
        let x = Number.parseFloat(el.amount);
        total = total+x;
    });
    console.log("Total:",total+"$");
};
///////////////////////////////////////////////////////////////
// 5 - masala !
///////////////////////////////////////////////////////////////
function cleanMessage(str) {
    str = str.trim();
    let x = str.split(/\s+/);
    x = String(x).split(",").join(" ").toUpperCase();;
    console.log(x);
};
///////////////////////////////////////////////////////////////
// 6 - masala !
///////////////////////////////////////////////////////////////
function getElectronicsProducts(arr) {
    arr = arr.filter(el => {
        el = el.tags.split(",");
        if(el.includes("electronics")) return true;
        else false;
    });
    console.log(arr);
};
///////////////////////////////////////////////////////////////
// 7 - masala !
///////////////////////////////////////////////////////////////
function formatUserProfiles(arr){
    arr.map(el => {
        let x = el.replace(/[0-9]/g,"");
        let y = el.replace(/[A-z]/g,"");
        let z = console.log(`${x}: ${2025-y} yoshda.`);
        return z;
    });
};
///////////////////////////////////////////////////////////////
// 8 - masala !
///////////////////////////////////////////////////////////////
function filterAndSum(arr) {
    let total = 0;
    let x2 = arr.map(el => {
        return el.value*2;
    });
    x2 = x2.filter(el => {
        if(el>30) return true;
        else return false;
    });
    x2 = x2.forEach(el => {
        total = el+total;
        return total;
    });
    console.log(total);
};
///////////////////////////////////////////////////////////////
// 9 - masala !
///////////////////////////////////////////////////////////////
function addTenToOddNumbers(arr) {
    let res = [];
    res = arr.filter(el => {
        if(el%2!==0) return el;
        else return false;
    });
    res = res.map(el => {
        return el+10;
    });
    console.log(res);
};
///////////////////////////////////////////////////////////////
// 10 - masala !
///////////////////////////////////////////////////////////////
function getTeamRoster(teams) {
  console.log(teams)  
  return teams;
}
///////////////////////////////////////////////////////////////
// 11 - masala !
///////////////////////////////////////////////////////////////
function toCamelCase(str) {
  let x = str.split("-");
  x = x.map(el => {
    let x = el.charAt(0).toUpperCase();  
    let y = el.slice(1).toLowerCase();
    let z = x+y;
    return z;
  });
  x=String(x).split(",").join('');
  console.log(x);
};
///////////////////////////////////////////////////////////////
// 12 - masala !
///////////////////////////////////////////////////////////////
function getAverageHighScores(arr){
  let result = 0;
  arr = arr.filter(el => {
    if(el>80) return true;
    else return false;
  });
  arr = arr.forEach(el=>{
    result = result+el/arr.length;
    result.toFixed(2);
    return result;
  });
  console.log(result);
};
///////////////////////////////////////////////////////////////
// 13 - masala !
///////////////////////////////////////////////////////////////
function formatWords(arr){
  let res = arr.map(el => {
    let x = el.charAt(0).toUpperCase();
    let y = el.slice(1).toLowerCase();
    let z = String(x+y);
    return z;
  });
  res = String(res).split(",").join(" - ");
  console.log(res);
};
///////////////////////////////////////////////////////////////
// 14 - masala !
///////////////////////////////////////////////////////////////
function adjustInventory(arr){
  total = 0;
  arr = arr.map(el => {
    let sku = el.sku; 
    let x = el.sku.split("-")[1];
    x = parseInt(x);
    total = x+el.qty;
    let res = {sku, total};
    return res;
  });
  console.log(arr)
};
///////////////////////////////////////////////////////////////
// 15 - masala !
///////////////////////////////////////////////////////////////
function getLongNames(arr) {
  arr = arr.filter(el => {
    if(el.length > 4) return true;
    else return false;
  });
  let res = arr.map(el => {
    return "Mr/Ms: " + el.toUpperCase();
  });
  res = String(res).split(",").join("\n");
  console.log(res);
};
///////////////////////////////////////////////////////////////
// 16 - masala !
///////////////////////////////////////////////////////////////
function getWordsWithLength(str) {
  str = str.split(" ");
  let res = str.map(el => {
    let word = el.replace(/[,.!?:;<>/-=+_"{}!@#$%^&*()\[\]]/g,"");
    let length = word.length; 
    return {word,length};
  });
  console.log(res);
};
///////////////////////////////////////////////////////////////
// 17 - masala !
///////////////////////////////////////////////////////////////
function getDiscountedPrices(arr) {
  arr = arr.filter(el => {
    let fp = 0;
    let x = el.price *(1-el.discount/100);
    if(x>500) return true;
    else return false;
  });
  arr = arr.map(el => {
    let name = el.name, finalPrice = el.price *(1-el.discount/100);
    return {name , finalPrice};
  });
  console.log(arr);
};
///////////////////////////////////////////////////////////////
// 18 - masala !
///////////////////////////////////////////////////////////////
function formatAddresses(arr) {
  arr = arr.map(el => {
    let x = Object.values(el);
    x = String(x).split(",").join(" - ");
    return x;
  });
  console.log(String(arr).split(",").join(" | "));
};
///////////////////////////////////////////////////////////////
// 19 - masala !
///////////////////////////////////////////////////////////////
function calculateDividedSum(arr) {
  arr = arr.filter(el => {
    if(el>10) return true;
    else return false;
  });
  arr = arr.map(el => {
    let x = el/3;
    x = x.toFixed(2);
    return x;
  });
  console.log(arr);
};
///////////////////////////////////////////////////////////////
// 20 - masala !
///////////////////////////////////////////////////////////////
function getActiveIds(arr) {
  arr = arr.filter(el => {
    if(el.active === true) return true;
    else return false;
  });
  arr = arr.map(el => {
    return `ID: ${el.id} - Active: ${el.active}`;
  });
  arr = String(arr).split(",").join(" | ");
  console.log(arr);
};
///////////////////////////////////////////////////////////////
// 21 - masala !
///////////////////////////////////////////////////////////////
function getUsernames(arr){
  arr = arr.map(el => {
    let x = el.split("@")[0];
    x = x.toLowerCase();
    return x;
  });
  arr = String(arr).split(",").join(", ");
  console.log(arr);
};
module.exports = {
  getAcronym,
  extractNumbers,
  getUniqueColors,
  getTotalAmount,
  cleanMessage,
  getElectronicsProducts,
  formatUserProfiles,
  filterAndSum,
  addTenToOddNumbers,
  getTeamRoster,
  toCamelCase,
  getAverageHighScores,
  formatWords,
  adjustInventory,
  getLongNames,
  getWordsWithLength,
  getDiscountedPrices,
  formatAddresses,
  calculateDividedSum,
  getActiveIds,
  getUsernames
};
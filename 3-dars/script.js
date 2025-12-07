// Array orqali paramlarni yeg'ib xisoblash
let arr = [];
function x(first){
    arr.push(first);
    return function(next) {
        if(next!=="="){
            return x(next);
        }
        let res = arr.toString().replaceAll(",","");
        return eval(res);
    }
};
console.log(x(2)("+")(2)("/")(2)("="));
// String orqali paramlarni yeg'ib xisoblash
let str = "";
function calc(first) {
    str = str+first;
    return function(next) {
        if(next!=="="){
            return calc(next);
        }
        return eval(str);
    };
};
console.log(calc(2)("+")(2)("="));
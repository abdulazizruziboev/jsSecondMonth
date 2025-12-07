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

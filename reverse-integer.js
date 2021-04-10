/*
https://leetcode.com/problems/reverse-integer/

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

var reverse = function(x) {
    const str= x.toString();
    if(str[0]==='-'){
        const myNum = Number("-"+str.toString().substr(1,str.length).split("").reverse().join(""));
        return Math.abs(myNum) > (Math.pow(2,31)-1) ? 0 : myNum;    
    }
    const myNum = Number(str.toString().substr(0,str.length).split("").reverse().join(""));
    return myNum > (Math.pow(2,31)-1) ? 0 : Number(str.toString().substr(0,str.length).split("").reverse().join(""))
};

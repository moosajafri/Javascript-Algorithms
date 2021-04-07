/*Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000]. */

function solution(A) {

    // write your code in JavaScript (Node.js 8.9.4)
    const sorted = A.sort((a,b)=>Number(a)-Number(b));
    const myMap = new Map();
    for(let i=0;i<sorted.length-1;i++){
        if(!myMap.has(sorted[i])){
            myMap.set(sorted[i])
        }
    }

    for(let i=1;i<sorted[sorted.length-1];i++){
        if(!myMap.has(i)){
            return i;
        }
    }
    return sorted[sorted.length-1] <= 0? 1: sorted[sorted.length-1]+1;
}

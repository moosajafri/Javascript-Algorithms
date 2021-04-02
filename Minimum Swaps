
/*
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. 
You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.

Complete problem link: https://www.hackerrank.com/challenges/minimum-swaps-2/problem
*/

function minimumSwaps(arr) {

    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            let temp = 0;
            temp = arr[i];
            arr[i] = arr[arr[i] - 1];
            arr[temp - 1] = temp;
            i = 0;
            counter++;
        }
    }
    return counter;
}

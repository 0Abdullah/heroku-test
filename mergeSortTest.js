let firstHalf = [];
let secondHalf = [];
let middleIdx = null;
function mergeSort(array) {
    if(array.length !== 1) {
        middleIdx = Math.floor(array.length / 2);
        // console.log(array)
        console.log(firstHalf = mergeSort(array.slice(0, middleIdx)))
        console.log(firstHalf = mergeSort(array.slice(0, middleIdx)))
        console.log(secondHalf = mergeSort(array.slice(middleIdx)))
        return 200
        // secondHalf = mergeSort(array.slice(middleIdx));
    } else {
        return array;
    }
}


console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8]))
// console.log(firstHalf, i, middleIdx)
// console.log('-------------------------------')
// test([1, 2, 3, 4, 5, 6, 7, 8]);

// function test(array) {
//     console.log(array.slice(0, array.length/8))
// }
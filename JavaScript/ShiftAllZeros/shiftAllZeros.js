/*
Approach: Two Pointer (modifying original array)
* input = [2,0,0,6,4,0], output = [2,6,4,0,0,0].
* shift all zeros at end OR shift all non zero values to start.
* To shift all non zero values to start, we need one pointer to keep track of start indexes, here we took that as 'nonZeroPointer'.
* Iterating over an array to check for non zero value, if found moving it to start indexes using nonZeroPointer and incrementing pointer by 1.
* This way through swapping with zeros and nonZeros value all nonZero values shift at start and zeros at end.
*/
const shiftAllZeros = (array) => {
    let nonZeroPointer = 0;

    for (let i in array) {
        if (array[i] !== 0) {
            [array[nonZeroPointer], array[i]] = [
                array[i],
                array[nonZeroPointer],
            ];
            nonZeroPointer++;
        }
    }
    return array;
};

/*
Approach: Partitioning (without modifying original array)
* Diving array into two parts elements with zeros and nonZeros and mering both arrays while returning keeping nonZeros array at first.
* Iterating over an array to sort out zero and nonZero value based on condition.
*/
// const shiftAllZeros = (array) => {
//   const nonZeros = [];
//   const zeros = [];

//   for (let index in array) {
//     if (array[index] === 0) {
//       zeros.push(0);
//     } else {
//       nonZeros.push(array[index]);
//     }
//   }

//   return nonZeros.concat(zeros);
// };

module.exports = shiftAllZeros;

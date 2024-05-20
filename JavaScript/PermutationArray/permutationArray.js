/*
Approach: Backtracking/Recursion
* Iterating on array elements and collecting single element
* Using array slice to pull remaingElements except the current element
* Calling function again to find permutation pairs of remaining elements
* Merging the permutation pairs of remainingElements with current element and adding it to result array
* Returning result array, if array length is 1 then simply returning array inside another array.
*/
const permutationArray = (array) => {
    if (array.length === 1) return [array];

    const result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const remainingEle = array.slice(0, i).concat(array.slice(i + 1));

        let permuteArray = permutationArray(remainingEle);

        for (let j = 0; j < permuteArray.length; j++) {
            let temp = [element].concat(permuteArray[j]);
            result.push(temp);
        }
    }

    return result;
};

module.exports = permutationArray;

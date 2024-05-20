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

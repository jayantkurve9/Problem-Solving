const twoSum = (array, target) => {
    const cacheData = {};

    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (cacheData[num]) {
            return [cacheData[num], num];
        } else {
            const diff = target - num;
            cacheData[diff] = num;
        }
    }

    return [];
};

module.exports = twoSum;

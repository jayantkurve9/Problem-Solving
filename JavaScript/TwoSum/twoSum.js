/*
Approach: Hash Map
* Created Hash Map cacheData.
* Using cacheData to store keys and values where key is difference of target and array element and value is array element itself
* While iterating on next element, first check if that element exists as a key in our cacheData.
* If element found means that we had previously calculated its difference with target and its stored in cache.
* Returning cacheData value and element as a two sum pair
* If element not found in cache, storing the element as value against key as difference of target and element
*/
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

/*
Approach: Custom Recursion Function
* In first condition check if object is null or non object type/type of primitive then simply returning that object.
* Second condition check for array type if it is array, then that array might contain primitve data as well as non primitive.
* So again calling deepCopy for each entry of an array.
* Lastly if is not array and non primitive it is of type object
* Iterating on object keys to copy key to key, again calling deepCopy on each key.
* In object each key might contain primitive or non-primitive value so for non primitive type it might be array or another object.
* To copy that deeply calling deepCopy and passing that value from obj using key.
*/
const deepCopy = (obj) => {
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	if (Array.isArray(obj)) {
		return obj.map(deepCopy);
	}

	const copy = {};

	Object.keys(obj).forEach(key => {
		copy[key] = deepCopy(obj[key]);
	})

	return copy;
};

module.exports = deepCopy;

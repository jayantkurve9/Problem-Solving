const deepCopy = require("./deepCopy");

describe("Test to check for deep copying for object", () => {
	test("should return new copy of object", () => {
		const originalObject = {
			"name" : "jayant",
			"age" : 24,
			"courses": ["java", "python"],
			"familyData": {
				"fatherName" : "rajan",
				"motherName" : "sunanda",
				"familyMembers" : 3
			}
		};

		const newObject = deepCopy(originalObject);
		const isAddressEqual = newObject === originalObject;
		expect(isAddressEqual).toBeFalsy();
	});

	test("should match the object data", () => {
		const originalObject = {
			"name" : "jayant",
			"age" : 24,
			"courses": ["java", "python"],
			"familyData": {
				"fatherName" : "rajan",
				"motherName" : "sunanda",
				"familyMembers" : 3
			}
		};

		const newObject = deepCopy(originalObject);
		const isObjectEqual = JSON.stringify(newObject) === JSON.stringify(originalObject);
		expect(isObjectEqual).toBeTruthy();			
	})
});
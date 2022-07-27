const arr1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const arr2 = [1, "2", "3", 2];


let cleanTheRoom = (array) => {
	const newArray = array.slice();
	//return the array in ascending order
	newArray.sort(function(a,b){return a-b});

	//separating the strings and the integers

	const numberArray = newArray.filter(item => typeof(item) === "number");
	const stringArray = newArray.filter(item => typeof(item) === "string");

	// console.log("number", numberArray);
	// console.log("string", stringArray);

	let groupArray = numberArray.slice();

	//sorting through same value - checking if array is empty
	if (numberArray.length) {
		for (let i = 0; i < groupArray.length; i++) {

			let lastIndex = groupArray.lastIndexOf(groupArray[i])
			let repetitionNumber = (lastIndex - i) + 1;

			// console.log('numero', groupArray[i]);
			// console.log('index', i);
			if (repetitionNumber > 1){ //number is repeated
				//remove numbers from array using splice
				//splice(start, deleteCount, item1)
				// console.log('n repetition', repetitionNumber);
				groupArray.splice(i, repetitionNumber, Array(repetitionNumber).fill(groupArray[i]));
				// console.log(groupArray);
			}
		}
	}
	console.log('final array', groupArray);
	return(groupArray);
}
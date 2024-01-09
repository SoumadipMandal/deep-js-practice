function getLength(array) {
	array = array.flat();
	return array.length
}
const output = (getLength([1, [2, [3, 4]]]))
console.log(output);

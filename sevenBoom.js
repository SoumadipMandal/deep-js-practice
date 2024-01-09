function sevenBoom(arr) {
	let filtered = arr
  .join('')
  .split('')
  .filter(x => parseInt(x) === 7)
  .length;
  
  if (filtered >= 1) {
  return 'Boom'
    } else {
    return 'there is no 7 in the array'}
}
const output = (sevenBoom([1, 2, 3, 4, 5, 6]));
console.log(output);

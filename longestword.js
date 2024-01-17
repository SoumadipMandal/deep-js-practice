function findlongestword(str){
  const words = str.split(' ');
  let longestword = ' ';
  
  for(let i=0;i<words.length;i++){
    if(words[i].length > longestword.length){
      longestword = words[i];
    }
  }
  return longestword;

}
console.log(findlongestword('javascript is a scripted language'));

// naive string search
//     // this solution is O(n^2)
function countSubString(string, substr){
	// count how many times the substr appears in the longest string
	let count = 0;
  
	for(let i = 0; i < string.length; i++){
    for(let j = 0; j < substr.length; j++){
    	if(string[i+j] !== substr[j]){
      		break;
      }
      
      if(j === substr.length - 1){
      	count++;
      }
    }
  }
  
  return count;
}
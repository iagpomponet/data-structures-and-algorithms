// naive solution O(n^2)
function solution(s) {
    // return the first character that not repeats
    let temp = +Infinity;
    let solution = "_";
    let freq = {};
    
    
    // O(n^2)
    for(let i = 0; i < s.length; i++){
      const val = s[i];
      
      freq[val] = {
          count: (freq[val]?.count | 0) + 1,
          index: freq[val]?.index ? [...freq[val].index, i] : [i]
      }
    }
    
    
    // O(n)
    for(let val in freq){
      const index = freq[val].index;
      const count = freq[val].count;
      
      if(count === 1 && index[0] < temp){
          temp = index[0]
          solution = val;
      }
    }
    
    return solution;
  }

  // this solution is also O(n^2) but it is shorter
  function solution(s) {
    // i could iterate over the string as an array
    // and check if it appears again
    // the first one that doesnt is the answer;
    let solution = "_";
    
    let arr = s.split("");
    
    for(let i = 0; i < arr.length; i++){
      if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
        solution = arr[i];
        break;
      }
    }
    
    return solution;
  }


    // this solution is O(n)
  function solution(s) {
    const map = {};
    let arr = s.split("");
    
    // O(n) time complexity
    for(let i = 0; i < arr.length; i++){
      map[arr[i]] = (map[arr[i]] | 0) + 1;
    }
    
    // O(n) time complexity
    for(let val in map){
      if(map[val] === 1){
        return val;
      }
    }
    
    return "_"
  }      
  
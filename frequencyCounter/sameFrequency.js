function sameFrequency(n1, n2){
    // check if both numbers have the same frequency of digits
    let n1Frequency = {};
    let n2Frequency = {};
    
    
    for(let i = 0; i < String(n1).length; i++){
       const digit = String(n1)[i];
  
       n1Frequency[digit] = (n1Frequency[digit] | 0) + 1;
    }
    
    for(let i = 0; i < String(n2).length; i++){
       const digit = String(n2)[i];
       n2Frequency[digit] = (n2Frequency[digit] | 0) + 1;
    }
    
    for(let digit in n1Frequency){
      let frequencyOf1 = n1Frequency[digit];
      let frequencyOf2 = n2Frequency[digit];
  
      if(frequencyOf1 !== frequencyOf2){
        return false;
      }
    }
  
    return true;
  }
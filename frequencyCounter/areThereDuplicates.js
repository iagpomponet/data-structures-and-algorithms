function areThereDuplicates(...args) {
    const frequency = {};
    
    for(let val of args){
        if(frequency[val]) return true;
        frequency[val] = 1;
    }
    
    return false;
  }
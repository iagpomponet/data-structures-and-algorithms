function areThereDuplicates(...args) {
    let left = 0;
    let right = 1;
    
    const arr = args.sort();
    
    while(right < arr.length){
        if(arr[left] === arr[right]){
            return true;
        } 
        
        left++;
        right++;
    }
    
    
    return false;
}
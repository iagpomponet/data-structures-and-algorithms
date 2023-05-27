function areThereDuplicates(...args) {
    let left = 0;
    let right = 1;
    
    const arr = args.sort();
    
    while(right < arr.length){
        console.log(arr[left], arr[right])
        if(arr[left] === arr[right]){
            console.log("true")
            return true;
        } 
        
        left++;
        right++;
    }
    
    
    return false;
}
// my naive solution 

function solution(sequence) {
    // the sequence should be stricly increasing 
    // if not, we can try to remove up to one element in order for it to become
    
    
    // O(n)
    function isIncreasing(arr){
            for(let i = 0; i < arr.length - 1; i++){
            const val = arr[i];
            const nxt = arr[i + 1];
            
            if(val >= nxt) {
                return false;
            }
        }
        return true;
    }
    
    if(isIncreasing(sequence)) return true;
    
    // O(n^2)
    for(let i = 0; i < sequence.length; i++){
        let tempArray = [...sequence];
        // O(n)
        tempArray.splice(i, 1);
        
        
        if(isIncreasing(tempArray)){
            return true;
        }
    }
    
    return false;
}



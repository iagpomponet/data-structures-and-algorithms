function averagePair(arr, avg){
    let left = 0;
    let right = arr.length - 1;
  
    while(left < right){
        const thisAverage = (arr[left] + arr[right]) / 2;
        
        if(thisAverage === avg){
            return true;
        }
        else if (thisAverage < avg){
            left++;
        }
        else {
            right--;
        }
    }  
    
    return false;
  }
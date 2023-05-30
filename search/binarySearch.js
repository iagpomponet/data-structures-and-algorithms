function binarySearch(arr, value){
    let left = 0;
    let right = arr.length - 1;
    
    let middle = Math.floor((right + left) / 2);

    while(arr[middle] !== value && left < right){
        // check value in the middle
         console.log("aaa", middle, arr[middle])
        // if smaller than value, all values before it can be discarted
        if(arr[middle] < value){
            // 1,2,3,4,5,6,8 
            left = middle + 1;
        }
        else if (arr[middle] > value){
            right = middle - 1;
        }
        else {
            return middle;
        }
        middle = Math.floor((right + left) / 2);
        console.log("middle", middle, value);
    }

    
    return arr[middle] === value ? middle : -1;
}


function countUniqueValues(arr){
    let left = 0;
    let right = 1;

    while(right < arr.length){
        if(arr[left] === arr[right]){
            right++;
        } else {
            left++;
            arr[left] = arr[right];
            right++;
        }
    }   

    return left + 1;
}
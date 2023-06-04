function merge(left, right){
    const result = [];
    let i = 0;
    let j = 0;
  
    while(i < left.length && j < right.length){
      if(left[i] < right[j]){
        result.push(left[i]);
        i++;
      } else {
          result.push(right[j]);
          j++;
      } 
    }
  
  
  
    if(i < left.length){
      result.push(...left.slice(i));
    }
  
    if(j < left.length){
      result.push(...right.slice(j));
    }
  
    return result;
}

   
function mergeSort(arr){
   	if(arr.length <= 1) return arr;
    
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}
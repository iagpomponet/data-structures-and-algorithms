function pivot (arr, start=0, end=arr.length-1){
  const pivot = arr[start];
  let swapIndex = start;
  
  for(let i = start + 1; i <= end; i++){
  	if(pivot > arr[i]){
    	swapIndex++;
      let temp = arr[i];
      arr[i] = arr[swapIndex];
      arr[swapIndex] = temp;
    }
  }
  
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length){
	if(left < right){
  	const pivotIndex = pivot(arr, left, right);
    quickSort(arr,left, pivotIndex - 1);
    quickSort(arr,pivotIndex + 1, right);
  }
  
  return arr;
}

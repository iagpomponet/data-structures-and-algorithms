//  [0,1,2,2,6,2,3,4]
//         i currentval
//   j

// O(n^2) time complexity   
function insertionSort(arr){

    for(let i = 1; i < arr.length; i++){
      const currentValue = arr[i];
      let j = i - 1;
      while(j >= 0 && arr[j] > currentValue){
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j+1] = currentValue;
    }
  
    return arr;
  }
  
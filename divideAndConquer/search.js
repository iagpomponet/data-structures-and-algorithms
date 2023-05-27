function search(arr, val){
    // to build this search using the divide and conquer pattern i must divide the array in half and start the
    // search from the middle, checking if the val is bigger or smaller than the value im looking for
    // i will use the low and high pointers so we can handle the array in smaller subarrays, so if the value is bigger 
    // or smaller than the one we are looking for, we can use them to limit the array in a smaller subarray containing
    // only the bigger or smaller part of the array
    let low = 0;
    let high = arr.length - 1;


    while(low <= high){
      const mid = Math.floor(low + high / 2);
      const currentVal = arr[mid];

      // if current value is smaller than the one we are looking for, then we should considerate only the values bigger
      // than this one
      if(currentVal < val){
        low = mid + 1;
      }

      // if current value is bigger than the val so we move the high pointer to one value before our 
      // current middle 
      else if (currentVal > val){
        high = mid - 1;
      }

      // if its not bigger or smaller its equal so we have the value as the middle
      //  so we return it
      else {
        return mid;
      }
    }

    return -1;
}


const test = search([1,2,3,4,5,6,7], 7);

console.log("test", test)
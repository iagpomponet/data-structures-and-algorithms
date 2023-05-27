function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
  
    if(arr.length < num) return null;
    // count from 0 til num position and sum the first
    for(let i = 0; i < num; i++){
      maxSum += arr[i];
    }
  
    tempSum = maxSum;
  
    for(let i = num; i === num; i++){
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
  
    return maxSum;
  }
  
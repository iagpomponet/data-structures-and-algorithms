// The objective is having a pointer at the end of the arr and one at the end 
// At each time, we check the sum of both left and right pointers
// If sum is bigger than zero, we move right one to the left
// if sum is less than zero we move left one to the right


function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
      let sum = arr[left] + arr[right];
     
      if(sum === 0){
        return [arr[left], arr[right]];
      } else if (sum > 0){
        right--;
      } else {
        left++;
      }
    }
}
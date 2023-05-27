function isSubsequence(str1, str2) {
    // the way that we are checking if all chars of str1 are in str2
    // is cutting str1 eveytime we find a char and checking ]
    // if there is chars left
   if(str1.length === 0) return true;
   // if we ran out of chars in str2 it means that 
   // we could not find a match for all chars
   if(str2.length === 0) return false;
   

   
   // if the first char of str1 is a match with 
   // first char of str2, it means that we can remove both
   // and call the function again 
   if(str1[0] === str2[0]){
       return isSubsequence(str1.slice(1), str2.slice(1))
   }
   
   
   // if both firsts chars are not equal, we move to next char in str2
   return isSubsequence(str1, str2.slice(1));
}
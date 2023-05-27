function isSubsequence(str1, str2) {
    // pointer to follow in str1
    let i = 0;
    // pointer to follow in str2
    let j = 0;
    
    // i want to check all chars of str2
    while(j < str2.length){
        if(str1[i] === str2[j]){
            i++;
        }
        
        if(i === str1.length){
            return true;
        }
        
        j++;
    }
}


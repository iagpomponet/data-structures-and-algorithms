function isSubsequence(str, sentence) {
    // good luck. Add any arguments you deem necessary.
    const freqInString = {};
    const freqInSubString = {};
    
    for(let i = 0; i < str.length; i++){
        const char = str[i];
        freqInSubString[char] = (freqInSubString[char] || 0) + 1;
    }
    
    for(let i = 0; i < sentence.length; i++){
        const char = sentence[i];
        freqInString[char] = (freqInString[char] || 0) + 1;
    }
    
    for(let char in freqInSubString){
        if(freqInString[char] === 0){
            return false;
        }
    }

    
    return true;
  }
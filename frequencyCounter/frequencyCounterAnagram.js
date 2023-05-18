function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for(char of str1){
      frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }

    for(char of str2){
      frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    // the keys are the letters
    for(letter in frequencyCounter1){
      if(!(letter in frequencyCounter2)){
        return false
      }

      // if the frequency counter for this letter is different in both arrays, return false
      if(frequencyCounter1[letter] !== frequencyCounter2[letter]){
        return false;
      }
    }

    return true;
}

const t1 = validAnagram("arara", "arara");

console.log(t1)
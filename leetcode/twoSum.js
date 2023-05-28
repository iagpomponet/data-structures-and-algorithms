var twoSum = function(nums, target) {
    const map = {};

    for(let i = 0; i < nums.length; i++){
        map[nums[i]] = i;
    }

    for(let i = 0; i < nums.length; i++){
        // so iterate over the map and for each item, subtract it from the target
        // the result would be a number that summed to this current val would add uo
        // to the target
        // so after this i could check if we have the complement in map and if its not the 
        // same value
        const complement = target - nums[i];

        if(map[complement] && map[complement] !== i){
            return [i, map[complement]];
        }


    }

    console.log("map", map);
    
};


// best solution
var twoSum = function(nums, target) {
    const map = {};

    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(map[complement] !== undefined) return [i, map[complement]];

        map[nums[i]] = i;
    }
};
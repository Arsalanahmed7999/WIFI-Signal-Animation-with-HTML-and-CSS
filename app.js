var sumOfUnique = function (nums) {
    let result = []
    let counts = []
    for (let num of nums) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    // for (let i = 0; i < counts.length; i++) {
    //     if (counts[i] == 1) {
    //         result.push(counts[i])
    //     }
    // }
    return counts
    // let sum = 0;
    // for(let i = 0 ; i < result.length ; i++){
    //     sum+=result[i]
    // }
    //     return sum
};

console.log(sumOfUnique([1, 2, 3, 2]))
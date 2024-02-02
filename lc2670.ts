function longestConsecutive(nums: number[]): number {
    let set = new Set(nums)
    let longestCount = 0
    for (const num of nums) {
        if (set.has(num - 1)) continue
        let currentCount = 1
        let currentNum = Number(num)
        num
        nums
        currentNum
        currentCount
        console.log(set.has(4))
        while (set.has(Number(currentNum) + 1)) {
            currentCount += 1
            currentNum += 1
            currentCount
            currentNum
        }
        longestCount = Math.max(currentCount, longestCount)
    }
    return longestCount
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
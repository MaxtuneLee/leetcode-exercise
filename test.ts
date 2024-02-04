/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let length = nums.length
    let b = 0
    for (let a = 0;a< length;a++){
        if (nums[a]!==0){
            let swap = nums[b]
            nums[b++] = nums[a]
            nums[a] = swap
        }
    }
    console.log(nums)
};
console.log(moveZeroes([0,1,0,3,12]))
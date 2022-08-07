function solution(nums) {
    const count = nums.length / 2;
    const type = new Set(nums).size;
    
    return count > type ? type : count;
}
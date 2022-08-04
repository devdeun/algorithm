function solution(nums) {
    const answer = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) answer.push(sum);
            }
        }
    }
    
    return answer.length;
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (!(num % i)) return false;
    }
    return true;
}
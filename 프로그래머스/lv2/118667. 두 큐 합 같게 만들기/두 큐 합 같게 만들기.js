function solution(queue1, queue2) {
    let totalArr = [...queue1, ...queue2];
    let maxCount = totalArr.length * 2;

    const getSum = (arr) => arr.reduce((acc, cur) => acc + cur);
    
    let currentSum = getSum(queue1);
    let average = getSum(totalArr) / 2;
    let count = 0;
    let start = 0;
    let end = queue1.length;
    
    const push = () => {
        currentSum += totalArr[end];
        end++;
    }
    const shift = () => {
        currentSum -= totalArr[start];
        start++;
    }
    
    while (count <= maxCount){
        if (currentSum < average) push();
        else if (currentSum > average) shift();
        else if (currentSum === average) return count;
        count++;
    }
    
    return -1;
}
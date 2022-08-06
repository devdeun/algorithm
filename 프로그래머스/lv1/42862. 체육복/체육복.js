function solution(n, lost, reserve) {
    let answer;
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    const filteredReserve = reserve.filter(num => !lost.includes(num));
    const filteredLost = lost.filter(num => !reserve.includes(num));
    answer = n - filteredLost.length;
    
    let count = 0;
    while (count < filteredReserve.length && filteredLost.length) {
        const resNumber = filteredReserve[count];
        for (let i = 0; i < filteredLost.length; i++) {
            if (filteredLost[i] === resNumber + 1 || filteredLost[i] === resNumber - 1) {
                answer++;
                filteredLost.splice(i, 1);
                break;
            }
        }
        count++;
    }
    
    return answer;
}
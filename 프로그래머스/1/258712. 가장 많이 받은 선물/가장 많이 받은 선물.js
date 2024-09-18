function solution(friends, gifts) {
    const n = friends.length;
    const giftTable = Array(n).fill(null).map(() => Array(n).fill(0));
    const giftScore = Array(n).fill(0);
    
    gifts.forEach(gift => {
        const [from, to] = gift.split(' ').map(name => friends.indexOf(name));
        giftTable[from][to]++;
        giftScore[from]++;
        giftScore[to]--;
    });
    
    const result = giftTable.map((table, index) => {
        return table.filter((number, friendIndex) => {
            if (friendIndex === index) return false;
            
            const count = number - giftTable[friendIndex][index];
            if (count === 0) return giftScore[index] > giftScore[friendIndex];
            return count > 0;
       }).length;
    });
    
    return Math.max(...result);
}
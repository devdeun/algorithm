function solution(friends, gifts) {
    const giftTable = Array(friends.length).fill(null).map(() => Array(friends.length).fill(0));
    
    const giftScore = Array(friends.length).fill(0);
    
    gifts.forEach(gift => {
        const [from, to] = gift.split(' ');
        const giver = friends.indexOf(from);
        const taker = friends.indexOf(to);
        giftTable[giver][taker]++;
        giftScore[giver]++;
        giftScore[taker]--;
    });
    
    const result = giftTable.map((table, index) => {
        return table.filter((number, friendIndex) => {
            if (friendIndex === index) return false;
            
            const count = number - giftTable[friendIndex][index];
            
            if (count > 0) return true;
            if (count === 0) return giftScore[index] > giftScore[friendIndex];
            return false;
       }).length;
    });
    
    return Math.max(...result);
}
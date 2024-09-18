function solution(friends, gifts) {
    const giftTable = Array(friends.length).fill(null).map(() => Array(friends.length).fill(0));
    
    gifts.forEach(gift => {
        const [from, to] = gift.split(' ');
        giftTable[friends.indexOf(from)][friends.indexOf(to)]++;
    });
    
    const giftScore = friends.map((friend, index) => {
        return giftTable[index].reduce((acc, cur) => acc + cur, 0) - giftTable.reduce((acc, cur) => acc + cur[index], 0);
    })
    
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
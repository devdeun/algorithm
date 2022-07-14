function solution(lottos, win_num) {
    const lanking = [6, 6, 5, 4, 3, 2, 1];
    const unknownCount = lottos.filter(num => num === 0).length;
    const minCount = lottos.filter(num => win_num.includes(num)).length;
    const maxCount = minCount + unknownCount;
    
    return [lanking[maxCount], lanking[minCount]];
}
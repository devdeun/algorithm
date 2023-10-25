function solution(rank, attendance) {
    const topList = [];
    for (let i = 1; i <= rank.length; i++) {
        const studentNumber = rank.indexOf(i);
        if (attendance[studentNumber]) topList.push(studentNumber);
        if (topList.length === 3) {
            const [a, b, c] = topList;
            return 10000*a + 100*b + c;
        } 
    }
}
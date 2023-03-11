function solution(cards1, cards2, goal) {
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < goal.length; i++) {
        if (goal[i] === cards1[p1]) p1++;
        else if (goal[i] === cards2[p2]) p2++;
        else return "No";
    }
    return "Yes";
}
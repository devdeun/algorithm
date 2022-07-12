function solution(n)
{
    const answer = String(n).split("").reduce((a, b) => a + +b, 0);
    return answer;
}
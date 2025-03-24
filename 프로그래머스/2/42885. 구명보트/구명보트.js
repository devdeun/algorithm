function solution(people, limit) {
    people.sort((a, b) => b - a)
    
    let result = 0
    let j = people.length - 1
    for (let i = 0; i <= j; i++) {
        if (people[i] + people[j] <= limit) {
            j--
        }
        result++
    }
    
    return result
}
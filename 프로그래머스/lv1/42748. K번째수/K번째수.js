function solution(array, commands) {
    const answer = [];
    
    commands.forEach(command => {
        const smallArray = array.slice(command[0] - 1, command[1]);
        const sortedArray = smallArray.sort((a, b) => a - b);
        answer.push(sortedArray[command[2] - 1]);
    });    
        
    return answer;
}
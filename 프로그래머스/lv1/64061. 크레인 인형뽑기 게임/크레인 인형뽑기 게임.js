function solution(board, moves) {
    let answer = 0;
    const pivots = Array(board[0].length).fill(0);
    const stack = [];
    board.forEach(row => {
        row.forEach((num, index) => {
            if (!num) pivots[index]++;
        });
    });
    
    moves.forEach(move => {
        const index = move - 1;
        const target = board[pivots[index]];
        
        if (target) stack.push(target[index]); 
        if (isSame(stack)) {
            answer += 2; 
            stack.pop();
            stack.pop();
        };
        pivots[index]++;
    }); 
    
    return answer;
}

function isSame(stack) {
    const last = stack.length - 1;
    if (!stack.length) return false;
    return stack[last] === stack[last - 1];
}
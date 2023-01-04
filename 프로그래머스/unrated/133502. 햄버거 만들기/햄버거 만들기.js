function solution(ingredient) {
    const stack = [];
    let count = 0;
    const isOrder = () => {
        const lastIndex = stack.length -1;
        if (stack[lastIndex] === 1 &&
            stack[lastIndex - 1] === 3 &&
            stack[lastIndex - 2] === 2 &&
            stack[lastIndex - 3] === 1
        ) return true;
        return false;
    }
    const makeBurger = () => {
        for (let i = 0; i < 4; i++) stack.pop();
        count++;
    }
    ingredient.forEach(num => {
        stack.push(num);
        if (stack.length >= 4 && isOrder()) makeBurger();
    });
    return count;
}
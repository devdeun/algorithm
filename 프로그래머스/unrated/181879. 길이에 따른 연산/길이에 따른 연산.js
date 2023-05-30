function solution(num_list) {
    const sum = () => {
        return num_list.reduce((a, c) => a + c , 0);
    }
    const multiply = () => {
        return num_list.reduce((a, c) => a * c , 1);
    }
    return num_list.length < 11 ? multiply() : sum();
}
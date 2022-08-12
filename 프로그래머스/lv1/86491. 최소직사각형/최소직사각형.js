function solution(sizes) {
    let x = 0;
    let y = 0;
    
    sizes.forEach(size => {
        const [short, long] = size.sort((a, b) => a - b);
        x = Math.max(x, long);
        y = Math.max(y, short);
    });

    return x * y;
}
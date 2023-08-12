function solution(order) {
    return order.reduce((total, menu) => {
        return total + (menu.includes("cafelatte") ? 5000 : 4500);
    }, 0);
}
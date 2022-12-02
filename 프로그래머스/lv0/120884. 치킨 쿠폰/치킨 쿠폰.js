function solution(chicken) {
    let couponCount = Math.floor(chicken / 10);
    let temp = chicken % 10;
    let result = couponCount;
    couponCount += temp;
    
    while (couponCount) {
        temp = couponCount % 10;
        couponCount = Math.floor(couponCount / 10);
        result += couponCount;
        if (!couponCount) break; 
        couponCount += temp; 
    }
    
    return result;
}
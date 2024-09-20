function solution(enroll, referral, seller, amount) {
    const PRICE = 100;
    const earnings = Array(enroll.length).fill(0);
    const enrollMap = new Map();
    enroll.forEach((name, index) => enrollMap.set(name, index));
    
    const setEarnings = (price, sellerIndex) => {
        if (sellerIndex === undefined) return;
        
        const fee = Math.floor(price * 0.1);
        earnings[sellerIndex] += price - fee;
        
        const referralIndex = enrollMap.get(referral[sellerIndex]);
        if (fee) setEarnings(fee, referralIndex);
    }
    
    seller.forEach((currentSeller, index) => {
        const sellerIndex = enrollMap.get(currentSeller);
        setEarnings(amount[index] * PRICE, sellerIndex);
    });
    
    return earnings;
}


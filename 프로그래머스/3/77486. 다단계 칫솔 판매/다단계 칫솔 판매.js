function solution(enroll, referral, seller, amount) {
    const PRODUCT_PRICE = 100;
    const COMMISSION_RATE = 0.1;
    const earnings = Array(enroll.length).fill(0);
    const enrollMap = new Map();
    enroll.forEach((name, index) => enrollMap.set(name, index));
    
    const distributeEarnings = (profit, sellerIndex) => {
        if (sellerIndex === undefined) return;
        
        const commission = Math.floor(profit * COMMISSION_RATE);
        earnings[sellerIndex] += profit - commission;
        
        const referralIndex = enrollMap.get(referral[sellerIndex]);
        if (commission) distributeEarnings(commission, referralIndex);
    }
    
    seller.forEach((currentSeller, index) => {
        const sellerIndex = enrollMap.get(currentSeller);
        distributeEarnings(amount[index] * PRODUCT_PRICE, sellerIndex);
    });
    
    return earnings;
}


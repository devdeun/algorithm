function solution(fees, records) {
    const recordMap = new Map();
    setRecordMap(recordMap, records);
    return getFees(recordMap, fees);
}

function setRecordMap(recordMap, records) {
    records.forEach(record => {
        let [minutes, car, state] = record.split(" ");
        if (!recordMap.has(car)) recordMap.set(car, {"IN": [], "OUT": []});
        const carInfo = recordMap.get(car);
        carInfo[state].push(minutes);       
    });
    
    recordMap.forEach(value => {
        if (value["IN"].length !== value["OUT"].length) value["OUT"].push("23:59");
    });
}

function getFees(recordMap, fees) {
    const [time, price, unitTime, unitPrice] = fees;
    const sortedRecords = [...recordMap].sort((a, b) => a[0] - b[0]);
    const result = sortedRecords.map(record => {
        const [car, { IN, OUT }] = record;
        let totalTime = 0;
        let totalFee = 0;

        for (let i = 0; i < IN.length; i++) {
            const [inHour, inMinute] = IN[i].split(":");
            const [outHour, outMinute] = OUT[i].split(":");
            totalTime += (outHour * 60 + +outMinute) - (inHour * 60 + +inMinute);
        }
        totalFee += price;
        if (totalTime - time > 0) {
            totalFee += Math.ceil((totalTime - time) / unitTime) * unitPrice;
        } 
        
        return totalFee;
    });

    return result;
}
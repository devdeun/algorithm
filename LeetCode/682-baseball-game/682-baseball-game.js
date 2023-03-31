/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const record = [];
    operations.forEach(operation => {        
        if (operation === "+") record.push(record[record.length - 1] + record[record.length - 2]);
        else if (operation === "C") record.pop();
        else if (operation === "D") record.push(record[record.length - 1] * 2);
        else record.push(+operation);
    });
    return record.reduce((acc, cur) => acc + cur, 0);
};
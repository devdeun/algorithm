function solution(arr) {
    const transform = (arr) => {
        return arr.map(num => {
            if (50 <= num && num % 2 === 0) {
                return num / 2
            }
            if (num < 50 && num % 2) {
                return num * 2 + 1
            }
            return num
        })
    }
    
    const isSame = (arr1, arr2) => {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false
        }
        return true
    }
    
    let x = 0
    let arrX = arr
    while (true) {
        const transformedArr = transform(arrX)
        if (isSame(arrX, transformedArr)) {
            break;
        }
        x++
        arrX = transformedArr
    }
    
    return x;
}
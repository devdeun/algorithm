function solution(my_string, queries) {
    const reverseByQuery = (string, query) => {
        const [from, to] = query
        const reversed = string.slice(from, to + 1).split('').reverse().join('')
        return string.substring(0, from) + reversed + string.substring(to + 1)
    }
    
    return queries.reduce((string, query) => {
        return reverseByQuery(string, query)
    }, my_string)
}
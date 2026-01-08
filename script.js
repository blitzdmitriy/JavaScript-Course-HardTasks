const cutMessage = function(str) {
    if (typeof str !== 'string') return 'Передана не строка'
    str = str.trim()
    if (str.length > 30) return str.slice(0, 31) + '...'
}

console.log(cutMessage('                 cbshcbvwhbcwhyjhcbwyhrvwhbecwhbhbvfwjhdbcwkjbjwkbevjwbekjvb                       '));
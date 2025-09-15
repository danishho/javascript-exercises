
const repeatString = (str, n) => {
    if(n == -1) return "ERROR";
    let words = "";
    for(let i = 0; i<n; i++){
        words += str
    }
    return words
} 

// Do not edit below this line
module.exports = repeatString;

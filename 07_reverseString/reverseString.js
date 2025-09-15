const reverseString = function(str) {
    const arrStr = str
    .split(' ')
    .map(
        (word) => word.split('').reverse().join('')
    )
    .join(' ')
    .split(' ')
    .reverse()
    .join(' ')

    return arrStr
};

// Do not edit below this line
module.exports = reverseString;

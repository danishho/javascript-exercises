const palindromes = function (str) {
    str = str.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
;
    console.log(str);
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

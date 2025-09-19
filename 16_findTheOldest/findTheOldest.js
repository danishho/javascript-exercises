const findTheOldest = (arr) => { const oldest = arr.reduce((a,b) => {
    const ageA = (a.yearOfDeath || 2025)- a.yearOfBirth;
    const ageB = (b.yearOfDeath || 2025) - b.yearOfBirth; 
    const higher = ageA > ageB ? a : b;
    return higher
})
return oldest
}
// Do not edit below this line
module.exports = findTheOldest;

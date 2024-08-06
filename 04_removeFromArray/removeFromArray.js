const removeFromArray = function (array, ...argToRemove) {
    const arr = array

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < argToRemove.length; j++) {
            if (arr[i] === argToRemove[j]) {
                arr.splice(i, 1)
                i--;
            }
        }

    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;

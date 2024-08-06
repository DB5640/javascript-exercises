const repeatString = function(string, times) {
    if (times < 0) return "ERROR";
    let stringResult = ""
    for (let index = 0; index < times; index++) {
        stringResult = stringResult + string
        
    }
return stringResult
};

// Do not edit below this line
module.exports = repeatString;

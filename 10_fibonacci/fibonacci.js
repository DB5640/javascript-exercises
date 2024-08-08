const fibonacci = function (member) {
    const fibo = [1, 1]
    for (let i = 1; i <= member; i++) {
        let lastNums =[fibo[i - 1],(fibo[i])]
        fibo.push(lastNums.reduce((total, actual) => total + actual))
    }
    return fibo[fibo.length - 3]
};

let resultado = fibonacci(4)

// Do not edit below this line
module.exports = fibonacci;

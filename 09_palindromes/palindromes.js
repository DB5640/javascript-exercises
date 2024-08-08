const palindromes = function (word) {
    const onlyLetterWord = word.replace(/\W/gi,"").toLowerCase()
    isPalindrome = true
    for (let index = 0; index < onlyLetterWord.length; index++) {
        const element = onlyLetterWord.charAt(index);
        if (element != onlyLetterWord.charAt(onlyLetterWord.length - index -1)) //Comparamos que cada letra sea igual a la longitud del onlyLetterWord de word menos el indice actual
        { isPalindrome = false; break}
    }
    return isPalindrome
};
palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;

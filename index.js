function printString(string) {
    console.log(string[0])
    if(string.length > 1) {
        printString(string.substring(1, string.length))
    }
    else { 
        return true
    }
}

function reverseString(string) {
    if(string.length > 1) {
        return string[string.length - 1] + reverseString(string.substring(0, string.length - 1))
    }
    else
    {
        return string
    }
}

function isPalindrome(word) {
   if (word.length == 1){
       return true
   }
   else if (word.length == 2){
        return false
   } else {
        if(word[0] === word[word.length - 1]) {
            let newWord = word.substring(1,word.length - 1)
            return isPalindrome(newWord)
        } else {
            return false
        }
   }
}

// printString('nasrin')

// console.log(reverseString('nasrin'))

console.log(isPalindrome('ababa'))


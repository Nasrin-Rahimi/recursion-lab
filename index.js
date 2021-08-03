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

function addUpTo(array, index) {
    if (index == 0){
        return array[0]
    } else {
        return addUpTo(array.slice(0, index), index - 1) + array[index]
    }
}



// printString('nasrin')

// console.log(reverseString('nasrin'))

// console.log(isPalindrome('ababa'))

console.log(addUpTo([4, 3, 1, 5], 0))


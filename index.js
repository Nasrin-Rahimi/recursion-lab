function stringCharacters(string) {
    console.log(string[0])
    if(string.length > 1) {
        stringCharacters(string.substring(1, string.length))
    }
    else { 
        return true
    }
}

stringCharacters('nasrin')



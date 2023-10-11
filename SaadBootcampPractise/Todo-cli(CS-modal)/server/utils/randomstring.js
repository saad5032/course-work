function randomStringGenerator(size){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const charlength = characters.length  // string length method to get the length of string value
    let result = ""  // In this empty string we gonna pick random string values from const characters and insert 
    //them in this result. The no of string values we insert depend on the size passed a paramenter in this function.

    // lets first generate random numbers between 0 and length of this characters const, and the number of random numbers is equal 
    // to size, so we have to use for loop of length size and call math.random inside that for loop
    for (let i=0 ; i<size; i++){
        let index = Math.floor(Math.random()*charlength) // math.floor to convert decimal to int (generate random numbers between 0 and length of this characters const)
        result += characters[index]
    }
    return result  

}

export default randomStringGenerator
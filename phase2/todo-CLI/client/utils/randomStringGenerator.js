function randomStringGenerator(size){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const charLength = characters.length

    let result = ""
    for (let i=0;i<size;i++){
        let index = Math.floor(Math.random()*charLength)
        result+= characters[index]
    }
    return result;
}

export default randomStringGenerator
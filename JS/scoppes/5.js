function abc(){
    var fname = "ateeq"    // functions limit the var scope so you cannot access fname
}
abc()
// console.log(fname);

// on creating a variable with var,let and const they are going to be in that function only
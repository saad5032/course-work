import Stack from "./stack.js"

function isValidParenthesis(s){
    let stack = new Stack(10);
    let paranthesisArr = s.split("")
    let pairs ={
        "(":")",
        "{":"}",
        "[":"]"
    }
   
    paranthesisArr.forEach((ele) => {
        if (ele=="(" || ele=="{" || ele=="["){
            stack.firstIn(ele)
            // console.log(ele);
            // console.log(stack);
        }   
        else{
            // console.log(ele);
            let peak = stack.peak()
            if (pairs[peak] == ele ){
                stack.lastOut()
            }
        }
       
    });
    
    if (stack.isEmpty()) return true;
}
console.log(isValidParenthesis("(){}[]"))
console.log(isValidParenthesis("([{}])"))
console.log(isValidParenthesis("(}[){]"))
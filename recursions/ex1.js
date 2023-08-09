function fun(n) {
    if (n == 4) return n;
    else return 2 * fun(n + 1);
}
console.log(fun(2));

/*
The best example of recursion !!!
stack-1 : f(2)    -> n is 2
stack-2 : 2*f(3)  -> value of function f(2) and n is now 3
stack-3 : 2*f(4)  -> value of function f(3) and n is now 4
stack-4 : 4       -> value of function f(4)

Now, last in first out
stack-3 : 2*4 =8  value of f(3)
stack-3 : 2*8 =16 value of f(2)
stack-1 : 16,  answer
*/


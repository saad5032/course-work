function fun(n) {
    if (n == 0 || n == 1) return n;
    if (n % 3 != 0) return 0;
    return fun(n / 3);
}
console.log(fun(12));
// This function is chacking the powers of given number
/*
1. fun(12) -> fun(4)
2. fun(4)  -> return 0 

2nd approach

1. fun(27)  
2. fun(9)
3. fun(3)
4. fun(1)  -> returns 1

LIFo effect
so every function till 1 returns 1

*/
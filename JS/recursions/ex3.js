function fun(n) {
    if (n == 0) return;
    console.log(n % 2);
    fun(Math.floor(n / 2));
}
console.log(fun(25));

/*
1. n is 25 , log of f(25) -> 1 , fun(12)
2. n is 12,  f(12) -> 0 , fun(6)
3. n is 6 , f(6) -> 0 , fun(3)
4. n is 3, f(3) -> 1 , fun(1)
5. n is 1, f(1) -> 1 , fun(0)
6, n is 0 retruns
10011 -> binary value of 19


LIFO
5. 

*/
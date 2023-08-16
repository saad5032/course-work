function fun(x, y) {
    if (x == 0) return y;
    return fun(x - 1, x + y);
}
console.log(fun(4, 3));

/*
1. f(4,3) => f(3,7)
2. f(3,7) => f(2,10)
3. f(2,10) => f(1,12)
4. f(1,12) => f(0,13)  
5. f(0,13) => 13        

last in first out (here all of the functions are not modifying anything they all just return 13)
4. f(1,12) =>13
3. f(2,10) =>13
2. f(3,7) => 13
1. f(4,3) => 13
*/
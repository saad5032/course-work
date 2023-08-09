function fun(x, y) {   // this function just multiply x and y we know from ex4.js
    if (y == 0) return 0;
    return x + fun(x, y - 1);
}
function fun2(a, b) {
    if (b == 0) return 1;
    return fun(a, fun2(a, b - 1));
}

console.log(fun2(2,4));

/*
1. fun2(2,4)
2. fun(2,fun2(2,3))
3. fun(2,fun2(2,2))
4. fun(2,fun2(2,1))
5. fun(2,fun2(2,0))
6. fun2(2,0) valus returns 1

LIFO
5. fun(2,1) -> 2
4. fun(2,2) -> 4
3. fun(2,4) -> 8
2. fun(2,8) -> 16



*/
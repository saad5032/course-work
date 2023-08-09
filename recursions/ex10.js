function f(n) {
    var i = 1;
    if (n >= 5) return n;
    n = n + i;
    i++;
    return f(n);
} console.log(f(1));

/*
1.n=1 ,i = 1 f(1) =>f(2)
2.f(2) =>f(3)
3.f(3) =>f(4)
4.f(5) returns 5

*/
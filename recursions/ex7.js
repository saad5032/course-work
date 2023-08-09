function f(n) {
    if (n <= 1) return 1;
    if (n % 2 == 0) return f(n / 2);
    return f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1));
}
console.log(f(11));

/*
1.f(11)
2.f(5)                     +   f(6)
3.f(2)   + f(3)            |   f(3)=2
4.f(1)   | f(1)+f(2)=1+1=2
5.f(1)=1 | f(3)=2


2. f(5)= 1+2 = 3 and f(6)=2
1. f(11) =5

*/
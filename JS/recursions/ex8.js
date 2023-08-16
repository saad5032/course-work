function foo(n, r) {
    if (n > 0) return n % r + foo(Math.floor(n / r), r);
    else return 0;
}
foo(513, 2);

/*

*/
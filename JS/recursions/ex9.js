function robot(n, a, b) {
    if (n <= 0) return;
    robot(n - 1, a, b + n);
    console.log(n, a, b);
    robot(n - 1, b, a + n);
}
robot(2, 5, 2);

/*

doubt
1. robot(n=2, a=5 ,b=2)
2. robot(n=1,a=5, b=4) it wont go to line 4 and 5 yet
3. robot(n=0 , a= 5, b=5) as n is 0 it just returns nothings 
robot()
        log(1,5,4) will be printed 
5. now it goes to line 5 robot(0,4,6)
6.




*/
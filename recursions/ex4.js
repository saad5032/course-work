function fun( x,  y){
    if (y == 0)   return 0;
    return (x + fun(x, y-1));
}



console.log(fun(2,4));  // -> 8
console.log(fun(3,5));  // ->15 
// so the option is C) x*y

/*
1.f(2,4)
2.2+f(2,3)
3.2+f(2,2)
4.2+f(2,1)
5.2+f(2,0) 
6. f(2,0) -> 0

last in first out
5. 2+0 =2
4. 2+2=4
3. 6
2. 8
1.f(2,4) -> 8
*/
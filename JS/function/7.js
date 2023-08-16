var arr=[-2,-4,3,-6,7,8,12,-2,-8]

for(var i=0;i<arr.length;i++){
    // console.log(arr);
    if (arr[i]<0){          // -2 at index 0 is removed at i=0 but -4 is not removed as new array is formed with -4 at index 0 and i now becomes 1 skipping to remove -4
        arr.splice(i,1)     // to counter this decrement i
        i--;
    }
}
console.log(arr);
function sum (a,b)  {
    console.log(a+b);
}
sum(456123, 789456123);


function T_ratios(a,b,c,d,e,f,) {

    a1 = Math.sin(a)
    b1 = Math.sin(b)
    c1 = Math.sin(c)
   
    console.log("sin of a is:" , a1)
    console.log("sin of b is:" , b1)
    console.log("sin of c is:" , c1)
   

}
T_ratios("30", "45", "60" )

console.log("The number of arguments passed to the function is: " + T_ratios.length);

console.log("The sum of the t-ratios  is: " + (a1 + b1 + c1) );
//or ya can do it in the following way

sum=a1 + b1 + c1
console.log("The sum of the t-ratios  is: " + sum);
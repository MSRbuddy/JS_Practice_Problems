// JS program to check for a Perfect Number

var num = 496;
var i = 1;
var total = 0;

for(i = 1; i < num; i++)
{
 if(num % i == 0)
  total += i;
}
if(total == num)
 console.log(num +" is a perfect number");
else
 console.log(num +" is not a perfect number");
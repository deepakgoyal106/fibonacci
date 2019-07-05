//Fibonacci Function
function fibSeries(x){
  var num1 = 0;
  var num2 = 1;
  
  var result = num2;
  
  for(var i = 0; i < x; i++){
    var numTotal = num1 +num2;
    if(numTotal < x)result += ', ' + numTotal;
    else break;
    num1 = num2;
    num2 = numTotal;
  }
  
  console.log(result);
}
fibSeries(10);

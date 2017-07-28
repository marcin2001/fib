Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Gist
 @Banderovez
 Sign out
 Watch 0
  Star 0
  Fork 0 Banderovez/discriminant
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Settings Insights 
Branch: gh-pages Find file Copy pathdiscriminant/index.js
2530fc1  5 hours ago
@Banderovez Banderovez vfadf
1 contributor
RawBlameHistory     
47 lines (38 sloc)  1.19 KB
/*a function that adds fibonacci numbers to an array */
function fibonacciArray(arrayNumber){
    var arr = [1,1];
    var a = 1;
    var b = 1;
    for(var i = 3; i<=arrayNumber; i++){
        var c = a + b;
        a = b;
        b = c;
        arr.push(c);
    }
    for(var i = 0; i<arr.length; i++){
        document.write(arr[i] + "<br>");
    }
}
/*end of the function that adds fibonacci numbers to the array*/

/*a function that calculate fibonacci numbers using cycle for*/
function fibonacciNumber(number){
    var a = 1;
    var b = 1;
    for(var i = 3; i<=number; i++){
        var c = a + b;
        a = b;
        b = c;
    }
    return c;
}
/*End of the function that calculate fibonacci numbers using cycle for*/

/*function calls*/

/*function call which calculate fibonacci numbers using cycle for*/
var number = parseInt(prompt("Your number: "));
alert(fibonacciNumber(number));
/*end call function which calculate fibonacci numbers using cycle for*/

/*function call which adds fibonacci numbers to the array*/
var arrayNumber = parseInt(prompt("Input your number: "));
fibonacciArray(arrayNumber);
/*end call function which adds fibonacci numbers to the array*/

/*end of the function calls*/


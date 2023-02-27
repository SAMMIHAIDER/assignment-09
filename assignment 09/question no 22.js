//2. Write a JS code to print Even numbers in given array.

 let abc =[2,3,4,5,6,7,8,];
 document.write(abc +"<br>");
   let bc = abc.filter(even);
   document.write( "even number :"+bc );
    function even(number){
       return number %2==0;
      }
      document.write("<br>");
    
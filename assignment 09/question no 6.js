

    //  6. Write a js program to count total number of even and odd elements in an array.


     let ary = [12,33,56,73,91,];
      document.write(ary +"<br>");
      let eve = ary.filter(odd);
      document.write("odd number :"+ eve +"<br>");
      let z = ary.filter(even);
      document.write("even number :"+ z);
      function odd(number){
       return number %2==1;
      }
      function even(number){
       return number %2==0;
      }
      document.write("<br>");
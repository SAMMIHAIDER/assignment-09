

    // 4. Write a js program to find maximum and minimum element in an array.

      let min = [12,34,56,78,90,];
      document.write(min +"<br>");
      let mix = min.find(minimum);
      document.write("minimum number :"+ mix +"<br>");
      let c = min.find(maximum);
      document.write("maximum number :"+ c);
      function minimum(number){
       return number <=31;
      }
      function maximum(number){
       return number > 79;
      }
      document.write("<br>");
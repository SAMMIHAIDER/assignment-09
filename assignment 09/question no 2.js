 // 2. Write a js program to print all negative elements in an array.

     let negative = [ 12,-12,34,-32,23,-35];
           document.write(negative + "<br>");
      let b = negative.filter(checkvalue);
      document.write(b);
      function checkvalue(number){
        return number < 0;
      }
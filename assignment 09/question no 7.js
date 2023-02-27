 //  7. Write a js program to count total number of negative elements in an array.

     let negativ = [ 12,-11,34,-42,-23,-25];
           document.write(negativ + "<br>");
      let y = negativ.filter(checkvalue);
      document.write(y);
      function checkvalue(number){
        return number < 0;
      }
      document.write("<br>");
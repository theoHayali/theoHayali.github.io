

document.addEventListener("DOMContentLoaded", function(){
    function whileLoop(){
        const table = document.querySelector(".table");

        let i;
        let result = 1;
        let layout = ""
        let P = 1000;

        for(let i = 5;i <= 7; i++){
         layout += "<br/><table><th>Year</th><th>Amount of Deposit</th><th>Interest Rate</th>"
         for(let j = 1;j <= 5; j++){
            layout += "<tr>"
            layout += "<td>" + j + "</td><td>"+ (P*(1 + (i*.01))**j).toFixed(2) +"</td><td>"+ (i*.01) +"</td>"
              layout += "</tr>"




         }
         table.innerHTML = layout + "<br/>"
        }
        layout += "</table>"

      }
    whileLoop()
   // console.log("loaded")
  });

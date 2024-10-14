

document.addEventListener("DOMContentLoaded", function(){
    function loopOne(){
        const output = document.querySelector(".output");
        const outputTwo = document.querySelector(".outputTwo");
        let i;
        let result = 1;
        let resultTwo = 0;
        output.innerHTML += "<br/><br/> ";
        output.innerHTML += "For Loop ";
        output.innerHTML += "<br/><br/> ";
        output.innerHTML += "The result of ";
        outputTwo.innerHTML += "The result of ";
        for(let i = 5;i <= 25; i += 4){

            output.innerHTML += i;
            outputTwo.innerHTML += i;
            result *= i;
            resultTwo += i;
            if(i !== 25){
            output.innerHTML += " * ";
            outputTwo.innerHTML += " + ";
        }else{
            output.innerHTML += " is ";
            output.innerHTML += result.toLocaleString();
            outputTwo.innerHTML += " is ";
            outputTwo.innerHTML += resultTwo.toLocaleString();
        }
        }
    }
    function loopTwo(){
        const outputThree = document.querySelector(".outputThree");
        const outputFour = document.querySelector(".outputFour");
        let i = 3;
        let result = 1;
        let resultTwo = 0;
        outputThree.innerHTML += "<br/><br/> ";
        outputThree.innerHTML += "While Loop ";
        outputThree.innerHTML += "<br/><br/> ";
        outputThree.innerHTML += "The result of ";
        outputFour.innerHTML += "The result of ";
        while(i <= 18){

            outputThree.innerHTML += i;
            outputFour.innerHTML += i;
            result *= i;
            resultTwo += i;
            i += 3;
            console.log(" i " + i)
            if(i <= 18){
            outputThree.innerHTML += " * ";
            outputFour.innerHTML += " + ";
        }else{
            outputThree.innerHTML += " is ";
            outputThree.innerHTML += result.toLocaleString();
            outputFour.innerHTML += " is ";
            outputFour.innerHTML += resultTwo.toLocaleString();
        }
        }
    }
   loopOne()
   loopTwo()
   // console.log("loaded")
  });

function process(){
    var number1, number2, number3, n1, n2, n3, sum, product, average,largest,smallest;

number1 = document.forms["myform"].elements["num1"].value;
number2 = document.forms["myform"].elements["num2"].value;
number3 = document.forms["myform"].elements["num3"].value;

n1 = parseInt(number1);
n2 = parseInt(number2);
n3 = parseInt(number3);
sum = n1 + n2;
product = n1 * n2 * n3;
average = product/3;
smallest = Math.min(n1,n2,n3);
largest = Math.max(n1,n2,n3);
let html = '';
let result = '';
html = document.getElementById('result');
if(isNaN(n1) || isNaN(n2) || isNaN(n3)){

    result += '<p >Invalid Data Entered</p><br/>';
   // result += '<button><a href="index.html">Home Page</a></button>';


}else{

   result = '<p>Sum' + sum + '</p><br/>';
    result += '<p>Product ' + product + '</p><br/>';
    result += '<p>Average ' + average + '</p><br/>';
    result += '<p>Largest ' + largest + '</p><br/>';
    result += '<p>Smallest ' + smallest + '</p><br/>';


}

html.innerHTML = result;

}


function convert(){
    var amount = document.getElementById('myTable').rows[6].cells[1].firstChild.value;

    // Calculate Yen
    var yen = amount*156.73;
    document.getElementById('myTable').rows[4].cells[2].innerHTML = yen.toFixed(2);

      // Calculate Euro
   var euro = amount*.92;
   document.getElementById('myTable').rows[1].cells[2].innerHTML = euro.toFixed(2);

   // Calculate Canadian Dollar
   var canadian = amount*1.38;
   document.getElementById('myTable').rows[2].cells[2].innerHTML = canadian.toFixed(2);

   // Calculate Hong Kong Dollar
   var hongKong = amount*7.81;
   document.getElementById('myTable').rows[3].cells[2].innerHTML = hongKong.toFixed(2);

   // Calculate Mexican Peso
    var peso = amount*18.41;
    document.getElementById('myTable').rows[5].cells[2].innerHTML = peso.toFixed(2);
}

function calculateGrades(){
    let html = '';
    let result = '';
    let error = false;
    html = document.getElementById('result');
    let hwAvg = document.forms["myform"].elements["num1"].value;
    let midExam = document.forms["myform"].elements["num2"].value;

    let finalExam = document.forms["myform"].elements["num3"].value;

    let participation = document.forms["myform"].elements["num4"].value;
    const final = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * participation);
    if(hwAvg == NaN || hwAvg == "" || hwAvg < 0 || hwAvg > 100){
       html.innerHTML = "Error! Please Enter Valid Number"
    }else if(midExam == NaN || midExam == "" || midExam < 0 || midExam > 100){
       html.innerHTML = "Error! Please Enter Valid Number"
     }else if(finalExam == NaN || finalExam == "" || finalExam < 0 || finalExam > 100){
        html.innerHTML = "Error! Please Enter Valid Number"
      }else if(participation == NaN || participation == "" || participation < 0 || participation > 100){
        error = true;
      }
      if(error === true){
         html.innerHTML = "Error! Please Enter Valid Number"
      }else if(final > 90){
                 html.innerHTML = "Grade A : " + final;
              }else if(final > 80)  {
                 html.innerHTML = "Grade B : " + final;
              }else if(final > 70){
                html.innerHTML = "Grade C : " + final;
              }
             else if(final > 60) {
                html.innerHTML = "Grade D : " + final + " Student must retake the course";
              } else{
                html.innerHTML = "Grade F : " + final + " Student must retake the course";
              }

    console.log(final)
}

function calculateComission(){
   let result = document.getElementById('result')
    let item1 = document.forms["myform"].elements["item1"].value;

    let item2 = document.forms["myform"].elements["item2"].value;

    let item3 = document.forms["myform"].elements["item3"].value;

    let item4 = document.forms["myform"].elements["item4"].value;



document.getElementById('myTable').rows[1].cells[2].innerHTML = item1;
if(item1 < 0 || item1 === "" ){
 result.innerHTML = "<h2 style='color:red'>Error! Invalid data enetered</h2>"
}else if (item2 < 0 || item2 === "" ){
   result.innerHTML = "<h2 style='color:red'>Error! Invalid data enetered</h2>"
  }else if (item3 < 0 || item3 === "" ){
   result.innerHTML = "<h2 style='color:red'>Error! Invalid data enetered</h2>"
  }else if (item4 < 0 || item4 === "" ){
   result.innerHTML = "<h2 style='color:red'>Error! Invalid data enetered</h2>"
  }else{
   result.innerHTML = ""
  }
document.getElementById('myTable').rows[1].cells[3].innerHTML = '$'  + (item1*20.99).toFixed(2);
document.getElementById('myTable').rows[2].cells[2].innerHTML = item2;
document.getElementById('myTable').rows[2].cells[3].innerHTML = '$'  + (item2*12.75).toFixed(2);
document.getElementById('myTable').rows[3].cells[2].innerHTML = item3;
document.getElementById('myTable').rows[3].cells[3].innerHTML = '$' + (item3*9.95).toFixed(2);
document.getElementById('myTable').rows[4].cells[2].innerHTML = item4;
document.getElementById('myTable').rows[4].cells[3].innerHTML = '$' + (item4*35.89).toFixed(2);
 document.getElementById('myTable').rows[5].cells[1].innerHTML = '$' + ((item4*35.89) + (item3*9.95) + (item2*12.75) + (item1*20.99)).toFixed(2);

document.getElementById('myTable').rows[6].cells[1].innerHTML = '$' + ((((item4*35.89) + (item3*9.95) + (item2*12.75) + (item1*20.99))*.09)+250.00).toFixed(2);
}
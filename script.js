function compute()
{
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("years").value;

    //Check empty
    if (p == "") {
        alert("Please enter an amount");
        document.getElementById("principal").focus();
        return false;
    } else { //Checking wether the number is positive number or not
        if (p <= 0) {
            alert("Please enter positive number");
            document.getElementById("principal").focus;
            return false;
        }
    }
    


var getThe_Year = new Date().getFullYear();
var theYear = parseInt(getThe_Year, 10) + parseInt(year, 10);
var interest = Math.floor(p * year * rate / 100);
var result = "If you deposit <mark>" + p +
    "</mark>,<br> at an interest rate of <mark mark > " + rate +
    "% </mark>,<br> You will receive an amount of <mark>" + interest +
        ",</mark> <br> in the year <mark>" + theYear + "</mark>";

document.getElementById("result").innerHTML =result;

}
function showVal(newVal) {
    document.getElementById("showRate").innerHTML = newVal + '%';    
}

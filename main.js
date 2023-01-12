document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;

})
document.getElementById("calculator1").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;

})
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;
  
})
document.getElementById("calculator3").addEventListener("click",function(){
    
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;
    
})

function myalert(result){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;
    alert("result : " + sum);
}
function myalert1(result){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;
    alert("result : " - sum);
}
function myalert2(result){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;
    alert("result : " * sum);
}
function myalert3(result){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum;
    alert("result : " / sum);
}
function showalert(){
    alert("Alert ")
}
function bmi(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = num1 / (num2/100 * num2/100);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " +sum.toFixed(2);
    alert(sum);
}
const img = document.createElement("img");

img.src = "img/main.jpg";
img.style.width = "200px";

document.getElementById("mydiv").appendChild(img);

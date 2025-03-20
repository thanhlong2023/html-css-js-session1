let numb1 = parseFloat(prompt("Mời bạn nhập số thứ nhất:"));
let numb2 = parseFloat(prompt("Mời bạn nhập số thứ hai:"));
let numb3= parseFloat(prompt("Mời bạn nhập số thứ ba:"));

if(numb1 > numb2 && numb1 > numb3){
    alert("Số lớn nhất trong 3 số là: " + numb1);
} else if(numb2 > numb1 && numb2 > numb3){
    alert("Số lớn nhất trong 3 số là: " + numb2);
} else{
    alert("Số lớn nhất trong 3 số là: " + numb3);
}
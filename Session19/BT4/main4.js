let numb = Number(prompt("Mời bạn nhập vào một số bất kì:"));

if(numb % 3 === 0 && numb % 5 === 0){
    alert(numb + " chia hết cho cả 3 và 5");
} else{
    alert(numb + " không chia hết cho cả 3 và 5");
}
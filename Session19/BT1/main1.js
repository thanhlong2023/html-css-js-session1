let month = Number(prompt("Mời bạn nhập vào một tháng bất kì"));

if(month > 0 && month <= 12){
    if(month === 4 || month === 6 || month === 9 || month === 11){
        alert(`Tháng ${month} có 30 ngày!`);
    } else if(month === 2){
        alert(`Tháng ${month} có 28 ngày hoặc 29 ngày năm nhuận!`);
    } else{
        alert(`Tháng ${month} có 31 ngày!`);
    }
} else{
    alert("Tháng nhập vào không hợp lệ!");
}
let a = Number(prompt("Mời bạn nhập vào số a:"));
let b = Number(prompt("Mời bạn nhập vào số b:"));
let c = Number(prompt("Mời bạn nhập vào số c:"));

let delta = Math.pow(b, 2) - 4*a*c;

if(delta === 0){
    alert(`Phương trình có nghiệm kép x1 = x2 = ${(-b)/(2*a)}`);
} else if(delta > 0){
    alert(`Phương trình có 2 nghiệm phân biệt: x1 = ${(-b + Math.sqrt(delta)) / (2*a)}; x2 = ${(-b - Math.sqrt(delta)) / (2*a)}`);
} else{
    alert("Phương trình vô nghiệm!");
}
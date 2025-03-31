let arrEmail = ['b0lQd@ example.com', 'KpR1N@example.com', 'KpR1N@example.com', 'lqoY7@example.com', 'KpR1N@example.com'];
//lọc ra email có chứa @ và không chứa khoảng trắng

let email = arrEmail.filter(email => email.includes('@') && !email.includes(' '));
console.log(email);
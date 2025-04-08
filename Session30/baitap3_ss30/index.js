let store = {};
let cart = [];
let mainMenu = `========== MENU ==========
`
    + `1. Hiển thị danh sách điện thoại theo hãng.
`
    + `2. Thêm điện thoại mới vào cửa hàng.
`
    + `3. Tìm kiếm điện thoại theo tên hoặc ID.
`
    + `4. Mua điện thoại.
`
    + `5. Sắp xếp điện thoại theo giá.
`
    + `6. Thanh toán giỏ hàng.
`
    + `7. Hiển thị tổng số tiền của điện thoại trong kho.
`
    + `8. Hiển thị tổng số lượng điện thoại theo hãng.
`
    + `9. Thoát chương trình.
`
    + `==========================
Lựa chọn của bạn:`;

while (true) {
    let choice = Number(prompt(mainMenu));
    switch (choice) {
        case 1:
            showPhonesByCompany();
            break;
        case 2:
            addNewPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            sortPhones();
            break;
        case 6:
            checkout();
            break;
        case 7:
            showTotalStockValue();
            break;
        case 8:
            showTotalPhonesByCompany();
            break;
        case 9:
            alert("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
    if (choice === 9) break;
}

function addNewPhone() {
    let company = prompt("Nhập hãng điện thoại (Samsung, Apple, Xiaomi,...):").trim();
    let id = Number(prompt("Nhập mã điện thoại:"));
    let name = prompt("Nhập tên điện thoại:").trim();
    let price = Number(prompt("Nhập giá điện thoại:"));
    let quantity = Number(prompt("Nhập số lượng:"));

    if (!store[company]) store[company] = [];
    store[company].push({ id, name, price, quantity });
    alert("📱 Điện thoại đã được thêm vào cửa hàng!");
}

function showPhonesByCompany() {
    if (Object.keys(store).length === 0) {
        alert("Cửa hàng chưa có điện thoại nào!");
        return;
    }
    let storeText = "===== DANH SÁCH CỬA HÀNG =====\n";
    for (let company in store) {
        storeText += `\n🏢 ${company}\n`;
        store[company].forEach((phone, index) => {
            storeText += `${index + 1}. ID: ${phone.id} - Tên: ${phone.name} - Giá: ${phone.price} - SL: ${phone.quantity}\n`;
        });
    }
    alert(storeText);
}

function searchPhone() {
    let searchType = Number(prompt("Tìm kiếm theo:\n1. Tên\n2. ID"));
    if (searchType === 1) {
        let name = prompt("Nhập tên điện thoại:").trim().toLowerCase();
        let results = [];
        for (let company in store) {
            store[company].forEach(phone => {
                if (phone.name.toLowerCase().includes(name)) {
                    results.push(`${company}: ID: ${phone.id} - Tên: ${phone.name} - Giá: ${phone.price} - SL: ${phone.quantity}`);
                }
            });
        }
        alert(results.length ? results.join('\n') : "Không tìm thấy điện thoại!");
    } else if (searchType === 2) {
        let id = Number(prompt("Nhập ID điện thoại:"));
        let result = "Không tìm thấy điện thoại!";
        for (let company in store) {
            let phone = store[company].find(p => p.id === id);
            if (phone) {
                result = `${company}: ID: ${phone.id} - Tên: ${phone.name} - Giá: ${phone.price} - SL: ${phone.quantity}`;
                break;
            }
        }
        alert(result);
    }
}

function buyPhone() {
    let id = Number(prompt("Nhập ID điện thoại muốn mua:"));
    let foundPhone = null, companyName = "";
    for (let company in store) {
        let phone = store[company].find(p => p.id === id);
        if (phone) {
            foundPhone = phone;
            companyName = company;
            break;
        }
    }
    if (!foundPhone) {
        alert("Không tìm thấy điện thoại!");
        return;
    }
    let quantity = Number(prompt(`Nhập số lượng muốn mua (có ${foundPhone.quantity} chiếc):`));
    if (quantity > foundPhone.quantity) {
        alert("Không đủ hàng!");
        return;
    }
    foundPhone.quantity -= quantity;
    let cartItem = cart.find(p => p.id === foundPhone.id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...foundPhone, quantity });
    }
    alert("✅ Đã thêm vào giỏ hàng!");
}

function sortPhones() {
    let order = Number(prompt("1. Tăng dần\n2. Giảm dần"));
    for (let company in store) {
        store[company].sort((a, b) => order === 1 ? a.price - b.price : b.price - a.price);
    }
    alert("📊 Sắp xếp thành công!");
}

function checkout() {
    if (cart.length === 0) {
        alert("🛒 Giỏ hàng trống!");
        return;
    }
    cart = [];
    alert("💳 Thanh toán thành công, giỏ hàng đã được làm trống!");
}

function showTotalStockValue() {
    let totalValue = 0;
    for (let company in store) {
        store[company].forEach(phone => {
            totalValue += phone.price * phone.quantity;
        });
    }
    alert(`💰 Tổng giá trị hàng trong kho: ${totalValue} VND`);
}

function showTotalPhonesByCompany() {
    let result = "📦 Tổng số lượng điện thoại theo hãng:\n";
    for (let company in store) {
        let total = store[company].reduce((sum, phone) => sum + phone.quantity, 0);
        result += `🏢 ${company}: ${total} chiếc\n`;
    }
    alert(result);
}
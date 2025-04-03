let menu = `================== MENU ===================\n`
    + `1. Thêm đối tượng Contact vào danh sách liên hệ.\n`
    + `2. Hiển thị danh sách danh bạ.\n`
    + `3. Tìm kiếm thông tin Contact theo số điện thoại.\n`
    + `4. Cập nhật thông tin Contact(name, email, phone) theo id.\n`
    + `5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.\n`
    + `6. Thoát chương trình\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

let contact = [];
while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            add_contact_list();
            break;
        case 2:
            show_menu_contact();
            break;
        case 3:
            search_by_phone();
            break;
        case 4:
            update_information();
            break;
        case 5:
            delete_by_id();
            break;
        case 6:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice == 6) {
        break;
    }
}

function add_contact_list() {
    let id = Number(prompt("Nhập vào định danh liên hệ"));
    let name = prompt("Nhập vào tên của người liên hệ.")
    let email = prompt("Nhập vào Email của người liên hệ.")
    let phone = prompt("Nhập vào số điện thoại của người liên hệ.")

    contact.push({ id, name, email, phone });
    alert("Thêm thành công thông tin liên hệ.");
}

function show_menu_contact() {
    if (contact.length == 0) {
        alert("Chưa có thông tin liên hệ nào!!!");
        return;
    }

    let items_per_page = 5;
    let current_page = 1;
    let total_pages = Math.ceil(contact.length / items_per_page);

    while (true) {
        let start = (current_page - 1) * items_per_page;
        let end = start + items_per_page;
        let contact_on_page = contact.slice(start, end);

        let result_Text = `📖 Danh sách sách - Trang ${current_page}/${total_pages}\n`;
        contact_on_page.forEach((curr, index) =>
            result_Text += `\n${index + 1}. Mã định danh: ${curr.id} Tên: ${curr.name} Email: ${curr.email} Số điện thoại: ${curr.phone}\n`);

        result_Text += `\n\nChọn:\n- Nhập 'n' để trang tiếp theo.\n- Nhập 'p' để trang trước.\n- Nhập số trang để chuyển nhanh.\n- Nhập 'q' để thoát.`;

        let input = prompt(result_Text);

        if (input === 'n' && current_page < total_pages) {
            current_page++;
        }
        else if (input === 'p' && current_page > 1) {
            current_page--;
        }
        else if (!isNaN(input) && Number(input) >= 1 && Number(input) <= total_pages) {
            current_page = Number(input);
        }
        else break;
    }
}

function search_by_phone() {
    let index_phone = prompt("Nhập vào số điện thoại");

    let temp_contact = contact.filter(curr => curr.phone.includes(index_phone));

    if (temp_contact.length > 0) {
        let contact_text = `📞 Thông tin số điện thoại ${index_phone}\n`;
        temp_contact.forEach((curr, index) => {
            contact_text += `${index + 1}. Mã ĐD: ${curr.id} Tên: ${curr.name} Email: ${curr.email} Số điện thoại: ${curr.phone}\n`
        });

        alert(contact_text);
    }
    else {
        alert("Không tìm thấy số điện thoại này!!!");
    }
}

function find_contact_by_id(in_id) {
    return contact.find(curr => curr.id == in_id);
}

function update_information() {
    let index_id = Number(prompt("Nhập vào ID muốn cập nhật thông tin.")); 

    let temp_contact = find_contact_by_id(index_id);

    if (temp_contact) {
        let temp_text = `Thông tin hiện tại của ID ${index_id}:\n`
            + `Mã định danh: ${temp_contact.id}\n`
            + `Tên: ${temp_contact.name}\n`
            + `Email: ${temp_contact.email}\n`
            + `Số điện thoại: ${temp_contact.phone}\n`;

        alert(temp_text); 
        
        temp_contact.name = prompt("Nhập vào tên mới", temp_contact.name);
        temp_contact.email = prompt("Nhập vào email mới", temp_contact.email);
        temp_contact.phone = prompt("Nhập vào số điện thoại mới", temp_contact.phone);

        alert("Cập nhật thông tin thành công.");
    } else {
        alert(`Không tìm thấy ID ${index_id}`);
    }
}

function delete_by_id() {
    let delete_id = Number(prompt("Nhập vào id cần xóa"));

    let temp_contact = find_contact_by_id(delete_id);

    if(temp_contact) {
        let delete_confirm = confirm(`Bạn có chắc chắn muốn xóa id ${delete_id}`);
        if(delete_confirm) {
            contact = contact.filter(element => element.id != temp_contact.id);
            alert(`ID ${delete_id} đã được xóa thành công.`);
        }
    }
    else{
        alert(`Không tìm thấy ID ${delete_id}`);
    }
}
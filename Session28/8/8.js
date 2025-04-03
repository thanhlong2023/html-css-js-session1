const employees = []; // Mảng lưu trữ danh sách nhân viên

function showMenu() {
    return prompt(
        `MENU\n\n` +
        `1. Thêm nhân viên mới\n` +
        `2. Xóa nhân viên theo ID\n` +
        `3. Cập nhật mức lương theo ID\n` +
        `4. Tìm kiếm nhân viên theo tên\n` +
        `5. Hiển thị danh sách nhân viên\n` +
        `6. Thoát\n\n` +
        `Lựa chọn của bạn: `
    );
}

function addEmployee() {
    const id = prompt("Nhập ID nhân viên:");
    const name = prompt("Nhập tên nhân viên:");
    const position = prompt("Nhập vị trí công việc:");
    const salary = parseFloat(prompt("Nhập mức lương:"));
    employees.push({ id, name, position, salary });
    alert("Đã thêm nhân viên thành công!");
}

function deleteEmployee() {
    const id = prompt("Nhập ID nhân viên cần xóa:");
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa nhân viên có ID: ${id}?`);
        if (confirmDelete) {
            employees.splice(index, 1);
            alert("Đã xóa nhân viên thành công!");
        }
    } else {
        alert("Không tìm thấy nhân viên có ID này!");
    }
}

function updateSalary() {
    const id = prompt("Nhập ID nhân viên cần cập nhật lương:");
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        const newSalary = parseFloat(prompt(`Nhập mức lương mới cho nhân viên ${employee.name}:`));
        employee.salary = newSalary;
        alert("Đã cập nhật mức lương thành công!");
    } else {
        alert("Không tìm thấy nhân viên có ID này!");
    }
}

function searchEmployeeByName() {
    const name = prompt("Nhập tên nhân viên cần tìm:");
    const results = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
    if (results.length > 0) {
        console.table(results);
    } else {
        alert("Không tìm thấy nhân viên nào với tên này!");
    }
}

// Thêm chức năng hiển thị danh sách nhân viên
function showEmployees() {
    if (employees.length > 0) {
        console.table(employees);
    } else {
        alert("Danh sách nhân viên trống!");
    }
}

function main() {
    let choice;
    do {
        choice = showMenu();
        switch (choice) {
            case "1":
                addEmployee();
                break;
            case "2":
                deleteEmployee();
                break;
            case "3":
                updateSalary();
                break;
            case "4":
                searchEmployeeByName();
                break;
            case "5":
                showEmployees();
                break;
            case "6":
                alert("Chương trình kết thúc!");
                break;
            default:
                alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
        }
    } while (choice !== "6");
}

main(); // Chạy chương trình
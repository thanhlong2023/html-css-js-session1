let result = "javascript" + 5;
// tạo thành 1 chuỗi vì dấu "+" ưu tiwwn nối chuỗi.

result = "javascript" - 1;
// kết quả là NaN vì kết quả không phải là số số nên không thể xác định

result = "3" + 2;
// kết quả là 32 vì chuỗi "+" số ưu tiên nối chuỗi nên tạo thành chuỗi 32

result = "5" - 4;
// kết quả là 1 vì "-" không áp dụng cho chuỗi

result = isNaN("123");
// chuỗi 123 là một số hợp lệ nên mà isNaN chuyển đổi về số nên giá trị trả về là flase

result = isNaN("hello")
// vì chuỗi hello không thể chuyển về số nên giá trị trả về là true

result = Number.isNaN("123");
// chuuỗi 123 là chuỗi hợp lệ không phải NaN nên giá trị trả về là flase

result = Number.isNaN(NaN);
// Vì giá trị NaN là NaN nên giá trị trả về là true
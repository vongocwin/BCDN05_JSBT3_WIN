/** 
 * Khối 1:
 * num1
 * num2
 * num3
 * 
 * Khối 2:
 * B1: Lấy giá trị từ form
 * B2: Lập điều kiện:
 * if (num1 === num2 && num2 === num3)
 * 
 * if(num1 <= num2 && num1 <= num3)
 * 
 * if (num3 <= num2 && num3 <= num1)
 * 
 *  if(num2 <= num1 && num2 <= num3)
 * 
 * Khối 3:
 * result
 * 
 */


function sapXep(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var num3 = document.getElementById("num3").value;
var result = document.getElementById("txtKq1")

if (num1 === num2 && num2 === num3) {
    result.innerText = num1 + " " + num2 + " " + num3
}

else if(num1 <= num2 && num1 <= num3){
    result.innerText = num1
    if(num2 <= num3) {
        result.innerText += " " + num2 + " " + num3
    }
    else {
        result.innerText += " " + num3 + " " + num2
    }
}
else if (num3 <= num2 && num3 <= num1) {
    result.innerText = num3
    if(num2 < num1) {
        result.innerText += " " + num2 + " " + num1
    }
    else {
        result.innerText += " " + num1 + " " + num2
    }
}
else if (num2 <= num1 && num2 <= num3) {
    result.innerText = num2
    if(num1 < num3) {
        result.innerText += " " + num1 + " " + num3
    }
    else {
        result.innerText += " " + num3 + " " + num1
    }
}
}
 
// Bài 2

/** 
 * Khối 1:
 * input
 * Khối 2:
 * B1: lấy giá trị từ bộ chọn
 * B2: lập điều kiện
 * if (input == 1) { kq.innerHTML = "Xin chào Bố!" }
    else if (input == 2) { kq.innerHTML = "Xin chào Mẹ!" }
    else if (input == 3) { kq.innerHTML = "Xin chào Anh Trai!" }
    else if (input == 4) { kq.innerHTML = "Xin chào Em gái!" }
    else { t.innerHTML = "Xin chào Người lạ ơi!" }
 * 
 * Khối 3:
 * kq
 */

function chaoHoi(){

    var input = document.getElementById("input").value;
    var kq = document.getElementById("txtKq2")

    if (input == 1) { kq.innerHTML = "Xin chào Bố!" }
    else if (input == 2) { kq.innerHTML = "Xin chào Mẹ!" }
    else if (input == 3) { kq.innerHTML = "Xin chào Anh Trai!" }
    else if (input == 4) { kq.innerHTML = "Xin chào Em gái!" }
    else { t.innerHTML = "Xin chào Người lạ ơi!" }
}

// Bài 3

/** 
 * Khối 1:
 * 
 * num4
 * num5
 * num6
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: điều kiện
 * if(num4 % 2 == 0){
        soChan++;
    }else {
        soLe++;
    }
    if(num5 % 2 == 0){
        soChan++;
    }else {
        soLe++;
    }
    if(num6 % 2 == 0){
        soChan++;
    }else {
        soLe++;
    }
 * 
 * 
 * Khối 3:
 * 
 * soLe
 * soChan
 */

function timSo(){
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    var num6 = document.getElementById("num6").value;

    var soLe = 0;
    var soChan = 0;

    if(num4 % 2 == 0){
        soChan++;
    }else {
        soLe++;
    }
    if(num5 % 2 == 0){
        soChan++;
    }else {
        soLe++;
    }
    if(num6 % 2 == 0){
        soChan++;
    }else {
        soLe++;
    }

    document.getElementById("txtKq3").innerHTML = "Có " +soChan+ " Số Chắn và " +soLe+ " Số Lẻ"
}

// Bài 4

/**
 * Khối 1:
 * 
 * num7
 * num8
 * num9
 * 
 * Khối 2:
 * 
 * B1: lấy giá trị từ form
 * B2: Lập điều kiện
 * if( num7 <= 0 || num8 <= 0 || num9 <= 0){

        alert("Mời nhập lại")

    }else{
        if(num7 == num8 && num8 == num9){
            document.getElementById("txtKq4").innerHTML = "Hình Tam Giác Đều"
        }else if(num7 == num8 || num8 == num9 || num7 == num9){
            document.getElementById("txtKq4").innerHTML = "Hình Tam Giác Cân"
        }else if(c1 == num9 || c2 == num8 || c3 == num7){
            document.getElementById("txtKq4").innerHTML = "Hình Tam Giác VUông"
        }else {
            document.getElementById("txtKq4").innerHTML = " Tam Giác Khác"
        }
    }
 * 
 * Khối 3:
 * 
 * xuất ra màn hình
 */

function tamGiac(){

    var num7 = document.getElementById("num7").value;
    var num8 = document.getElementById("num8").value;
    var num9 = document.getElementById("num9").value;
    var c1 =Math.sqrt(Math.pow(num7, 2) + Math.pow(num8, 2));
    var c2 =Math.sqrt(Math.pow(num7, 2) + Math.pow(num9, 2));
    var c3 =Math.sqrt(Math.pow(num8, 2) + Math.pow(num9, 2));

    if( num7 <= 0 || num8 <= 0 || num9 <= 0){

        alert("Mời nhập lại")

    }else{
        if(num7 == num8 && num8 == num9){
            document.getElementById("txtKq4").innerHTML = "Hình Tam Giác Đều"
        }else if(num7 == num8 || num8 == num9 || num7 == num9){
            document.getElementById("txtKq4").innerHTML = "Hình Tam Giác Cân"
        }else if(c1 == num9 || c2 == num8 || c3 == num7){
            document.getElementById("txtKq4").innerHTML = "Hình Tam Giác Vuông"
        }else {
            document.getElementById("txtKq4").innerHTML = " Tam Giác Khác"
        }
    }


}
function baiTapHaiNangCao(){
    var thang=document.getElementById("txt-thang-2").value*1;
    var nam=document.getElementById("txt-nam-2").value*1;
    var ketQua=0;
    if (thang==0||nam==0) return "";
    switch (thang){
        case 4: case 6: case 9: case 11:
            ketQua="Tháng"+" " + thang+" "+"Năm"+" "+nam+" " + "có 30 ngày";
            break;
        case 2:
            if ((nam%4==0 && nam%100!=0)|| (nam%400==0)){
                ketQua="Tháng"+" " + thang+" "+"Năm"+" "+nam+" "  + "có 29 ngày";
            } else {
                ketQua="Tháng"+" " + thang+" "+"Năm"+" "+nam+" "  + "có 28 ngày";
            }
            break;
        default:
            ketQua="Tháng" +" "+ thang+" "+"Năm"+" "+nam+" "  + "có 31 ngày";
    }
    document.getElementById("thangNam").innerText=ketQua;
}
function baiTapBa(){
    var soThu1=document.getElementById("txt-so-nguyen-1").value*1;
    var soThu2=document.getElementById("txt-so-nguyen-2").value*1;
    var soThu3=document.getElementById("txt-so-nguyen-3").value*1;
    var soLe=0;
    let soLe1=0;
    let soLe2=0;
    let soLe3=0;
    var soChan=0;
    let soChan1=0;
    let soChan2=0;
    let soChan3=0;
    if (soThu1==0&&soThu2==0&&soThu3==0) return "";
    if ((soThu1%2)!=0){
        soLe1=1;
    }   else {
        soChan1=1;
    }
    if ((soThu2%2)!=0){
        soLe2=1;
    }   else {
        soChan2=1;
    }
    if ((soThu3%2)!=0){
        soLe3=1;
    }   else {
        soChan3=1;
    }
    soLe=soLe1+soLe2+soLe3;
    soChan=soChan1+soChan2+soChan3;
    document.getElementById("chapNhan").innerHTML=`<span> Số lẻ là: ${soLe} <br>Số chẵn là: ${soChan}</span>`
}
function baiTapBon(){
    var a=document.getElementById("txt-canh1").value*1;
    var b=document.getElementById("txt-canh2").value*1;
    var c=document.getElementById("txt-canh3").value*1;
    let tamGiac=0;
    if (a==0&&b==0&&c==0) return "";
    if (a==b&&b!==c||a==c&&c!==b||b==c&&c!==a){
        tamGiac="Tam giác cân";
    } else if (a==b&&b==c){
        tamGiac ="Tam giác đều";
    } else if (c*c==(a*a+b*b)){
        tamGiac ="Tam giác vuông";
    } else {
        tamGiac="Không có kết quả"
    }
    document.getElementById("xacNhan").innerText=tamGiac;
}
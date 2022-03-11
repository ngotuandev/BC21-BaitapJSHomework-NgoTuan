function baiTapMot(){
    var so1=document.getElementById("txt-so-nguyen1").value*1;
    var so2=document.getElementById("txt-so-nguyen2").value*1;
    var so3=document.getElementById("txt-so-nguyen3").value*1;
    let soTangDan=0;
    if (so1==0&&so2==0&&so3==0) return "";
    if (so1>so2 && so2>so3){
        soTangDan=so3+""+so2 +""+so1;
    } else if (so1>so3 && so3>so2){
        soTangDan=so2+""+so3+""+so1;
    } else if (so2>so3 && so3>so1){
        soTangDan=so1+""+so3+""+so2;
    } else if (so2>so1 && so1>so3){
        soTangDan=so3+""+so1+""+so2;
    } else if (so3>so1 && so1>so2){
        soTangDan=so2+""+so1+""+so3;
    } else if(so1==so2&&so2<so3){
        soTangDan=so1+""+so2+""+so3;
    } else if(so1==so3&&so3<so2){
        soTangDan=so1+""+so3+""+so2;
    } else if(so2==so3&&so2<so1){
        soTangDan=so2+""+so3+""+so1;
    } else if(so1==so2&&so2>so3){
        soTangDan=so3+""+so1+""+so2;
    } else if(so1==so3&&so3>so2){
        soTangDan=so2+""+so1+""+so3;
    } else if(so2==so3&&so2>so1){
        soTangDan=so1+""+so2+""+so3;
    }
    document.getElementById("ketQua").innerHTML=`<span> Kết Quả là ${soTangDan} </span>`
}
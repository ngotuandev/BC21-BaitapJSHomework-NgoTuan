function baiTapBaNangCao(){
    var chu=new Array(""," một "," hai "," ba "," bốn "," năm "," sáu "," bảy "," tám "," chín ");
    var soNguyen1=document.getElementById("txt-so-nguyen-nang-cao1").value*1;
    var soNguyen2=document.getElementById("txt-so-nguyen-nang-cao2").value*1;
    var soNguyen3=document.getElementById("txt-so-nguyen-nang-cao3").value*1;
    var baSo=soNguyen1+""+soNguyen2+""+soNguyen3;
    var tram;
    var chuc;
    var donVi;
    var ketQua=0;
    tram=Math.floor(baSo/100);
    chuc=Math.floor((baSo%100)/10);
    donVi=baSo%10;
    if (soNguyen1==0 && soNguyen2==0 && soNguyen3==0) return "";

if (tram!=0){
    ketQua =chu[tram] +" trăm ";
}
if (tram!=0&&chuc==0&&donVi==0){
    ketQua=chu[tram]+" trăm ";
}

if (chuc!=0&&chuc!=1){
    ketQua+=chu[chuc]+" mươi ";
}
if (chuc==0&&donVi!=0&&tram!=0){
    ketQua +=" lẻ ";
}
if (chuc==1){
    ketQua+=" mười ";
}
switch(donVi){
    case 1:
        if (chuc!=0&&chuc!=1){
            ketQua +=" mốt ";
        } else {
            ketQua+=chu[donVi];
        }
        break;
    case 5:
        if (chuc!=0){
            ketQua +=" lăm ";
        } else{
            ketQua +=chu[donVi];
        }
        break;
    default:
        if (donVi!=0&&chuc==0&&tram==0)
        {
            ketQua =chu[donVi]
        } else {
            ketQua+=chu[donVi]
        }
        break;
}
    document.getElementById("baNangCao").innerHTML=ketQua;
}
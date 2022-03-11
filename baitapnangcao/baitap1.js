function baiTapMotNangCao(){
    var ngayHienTai=document.getElementById("txt-ngay-hien-tai").value*1;
    var thangHienTai=document.getElementById("txt-thang-hien-tai").value*1;
    var namHienTai=document.getElementById("txt-nam-hien-tai").value*1;
    let ngayTruocDo=0;
    let thangTruocDo=0;
    let namTruocDo=0;
    var ngayTiepTheo=0;
    var thangTiepTheo=0;
    var namTiepTheo=0;
    // var truocDo=ngayTruocDo+""+thangTruocDo+""+namTruocDo;
    // var tiepTheo=ngayTiepTheo+""+thangTiepTheo+""+namTiepTheo;
    if (ngayHienTai==0||thangHienTai==0||namHienTai==0) return "";
    if ((thangHienTai==1||thangHienTai==3||thangHienTai==5||thangHienTai==7||thangHienTai==8||thangHienTai==10||thangHienTai==12)&&ngayHienTai<31&&ngayHienTai>=1){
        ngayTiepTheo=" ngày " + (ngayHienTai+1);
        thangTiepTheo= " tháng " + thangHienTai;
        namTiepTheo=" năm " + namHienTai;
    }
    if ((thangHienTai==1||thangHienTai==3||thangHienTai==5||thangHienTai==7||thangHienTai==8||thangHienTai==10||thangHienTai==12)&&ngayHienTai<=31&&ngayHienTai>=2){
        ngayTruocDo=" ngày " + (ngayHienTai-1);
        thangTruocDo = " tháng " + thangHienTai;
        namTruocDo= " năm " + namHienTai;
    }
    if ((thangHienTai==1||thangHienTai==3||thangHienTai==5||thangHienTai==7||thangHienTai==8||thangHienTai==10)&&ngayHienTai==31){
        ngayTiepTheo= " ngày 1";
        thangTiepTheo= " tháng " + (thangHienTai+1);
        namTiepTheo=" năm " + namHienTai;
    }
    if ((thangHienTai==5||thangHienTai==7||thangHienTai==10||thangHienTai==12)&& ngayHienTai==1){
        ngayTruocDo= "ngày 30";
        thangTruocDo= " tháng " + (thangHienTai-1);
        namTruocDo= " năm " + namHienTai;
    }
    if (thangHienTai==12&&ngayHienTai==31){
        ngayTiepTheo=" ngày 1";
        thangTiepTheo=" tháng 1";
        namTiepTheo=" năm " + (namHienTai+1);
    }
    if (thangHienTai==1&&ngayHienTai==1){
        ngayTruocDo=" ngày 31"; 
        thangTruocDo= " tháng 12 ";
        namTruocDo=" năm " +(namHienTai-1);
    }
    if (thangHienTai==3&&ngayHienTai==1&&((namHienTai%4==0 && namHienTai%100!=0)|| (namHienTai%400==0))){
        ngayTruocDo=" ngày 29";
        thangTruocDo= " tháng " + (thangHienTai-1);
        namTruocDo= " năm " + namHienTai;
    } else if (thangHienTai==3&&ngayHienTai==1!==((namHienTai%4==0 && namHienTai%100!=0)|| (namHienTai%400==0))){
        ngayTruocDo=" ngày 28 ";
        thangTruocDo= " tháng " + (thangHienTai-1);
        namTruocDo= " năm " + namHienTai;
    }
    if (thangHienTai==3&&ngayHienTai>=2&&ngayHienTai<=31){
        ngayTruocDo=" ngày " + (ngayHienTai-1);
        thangTruocDo=" tháng " + (thangHienTai);
        namTruocDo= " năm " + (namHienTai);
    }
    if (thangHienTai==2&&ngayHienTai>=1&&ngayHienTai<29&&((namHienTai%4==0 && namHienTai%100!=0)|| (namHienTai%400==0))){
        ngayTiepTheo= " ngày " + (ngayHienTai+1);
        thangTiepTheo= " tháng " + thangHienTai;
        namTiepTheo=" năm " + namHienTai;
    }
    if (thangHienTai==2&&ngayHienTai>=2&&ngayHienTai<=29&&((namHienTai%4==0 && namHienTai%100!=0)|| (namHienTai%400==0))){
        ngayTruocDo=" ngày " + (ngayHienTai-1);
        thangTruocDo = " tháng " + thangHienTai;
        namTruocDo= " năm " + namHienTai;
    }
    if (thangHienTai==2&&ngayHienTai>=1&&ngayHienTai<28&&namHienTai!==((namHienTai%4==0 && namHienTai%100!=0)|| (namHienTai%400==0))){
        ngayTiepTheo= " ngày " + (ngayHienTai+1);
        thangTiepTheo= " tháng " + thangHienTai;
        namTiepTheo=" năm " + namHienTai;
    }
    if (thangHienTai==2&&ngayHienTai>=2&&ngayHienTai<=28&&namHienTai!==((namHienTai%4==0 && namHienTai%100!=0)|| (namHienTai%400==0))){
        ngayTruocDo=" ngày " + (ngayHienTai-1);
        thangTruocDo = " tháng " + thangHienTai;
        namTruocDo= " năm " + namHienTai;
    }
    if (thangHienTai==2&&ngayHienTai==29&&((namHienTai%4==0 && namHienTai%100!=0)|| (namHienTai%400==0))){
        ngayTiepTheo = " ngày 1";
        thangTiepTheo= " tháng " + (thangHienTai+1);
        namTiepTheo=" năm " + namHienTai;
    } 
    if (thangHienTai==2&&ngayHienTai==28&&namHienTai!==((namHienTai%4==0 && namHienTai%100!=0)|| (namHienTai%400==0))){
        ngayTiepTheo = " ngày 1";
        thangTiepTheo= " tháng " + (thangHienTai+1);
        namTiepTheo=" năm " + namHienTai;
    }
    if ((thangHienTai==2||thangHienTai==4||thangHienTai==6||thangHienTai==8||thangHienTai==9||thangHienTai==11)&&ngayHienTai==1){
        ngayTruocDo=" ngày 31"
        thangTruocDo= " tháng " + (thangHienTai-1);
        namTruocDo=" năm " + namHienTai;
    }
    if ((thangHienTai==4||thangHienTai==6||thangHienTai==9||thangHienTai==11)&&ngayHienTai==30){
        ngayTiepTheo=" ngày 1";
        thangTiepTheo= " tháng " + (thangHienTai+1);
        namTiepTheo=" năm " + namHienTai;
    }
    if ((thangHienTai==4||thangHienTai==6||thangHienTai==9||thangHienTai==11)&&ngayHienTai>=1&&ngayHienTai<30){
        ngayTiepTheo=" ngày " +(ngayHienTai+1);
        thangTiepTheo=" tháng " + thangHienTai;
        namTiepTheo=" năm " + namHienTai;
    }
    if ((thangHienTai==4||thangHienTai==6||thangHienTai==9||thangHienTai==11)&&ngayHienTai>=2&&ngayHienTai<=30){
        ngayTruocDo=" ngày " + (ngayHienTai-1);
        thangTruocDo= " tháng " + thangHienTai;
        namTruocDo= " năm " + namHienTai;
    }

    var truocDo=ngayTruocDo+""+thangTruocDo+""+namTruocDo;
    var tiepTheo=ngayTiepTheo+""+thangTiepTheo+""+namTiepTheo;
    document.getElementById("motNangCao").innerHTML=`<span> Ngày trước đó: ${truocDo}<br>Ngày tiếp theo: ${tiepTheo}`
}

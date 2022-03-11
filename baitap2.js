function baiTapHai(){
    var chonAi=document.getElementById("inputGroupSelect04").value;
    var cauChao=0;
    if (chonAi=="B"){
        cauChao="Chào Bố";
    } else if (chonAi=="M"){
        cauChao="Chào Mẹ";
    } else if (chonAi=="A"){
        cauChao="Chào Anh Trai";
    } else {
        cauChao=" Chào Em Gái ";
    }
     document.getElementById("dongY").innerHTML=cauChao;
}
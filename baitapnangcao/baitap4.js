function baiTapBonNangCao(){
    var x1=document.getElementById("sinh-vien-1-X").value*1;
    var x2=document.getElementById("sinh-vien-2-X").value*1;
    var x3=document.getElementById("sinh-vien-3-X").value*1;
    var x4=document.getElementById("truong-hoc-X").value*1;
    var y1=document.getElementById("sinh-vien-1-Y").value*1;
    var y2=document.getElementById("sinh-vien-2-Y").value*1;
    var y3=document.getElementById("sinh-vien-3-Y").value*1;
    var y4=document.getElementById("truong-hoc-Y").value*1;
    let xy1=Math.sqrt(Math.pow((x4-x1),2)+Math.pow((y4-y1),2));
    let xy2=Math.sqrt(Math.pow((x4-x2),2)+Math.pow((y4-y2),2));
    let xy3=Math.sqrt(Math.pow((x4-x3),2)+Math.pow((y4-y3),2));
    let ketQua=0;
    if (xy1>xy2&&xy2>xy3){
        ketQua=" Sinh viên thứ 1 xa trường nhất ";
    } else if (xy2>xy1&&xy1>xy3){
        ketQua=" Sinh viên thứ 2 xa trường nhất ";
    } else if (xy3>xy1&&xy1>xy2){
        ketQua=" Sinh viên thứ 3 xa trường nhất ";
    } else if (xy1==xy2&&xy2>xy3){
        ketQua=" Sinh viên thứ 1 và thứ 2 xa trường nhất ";
    } else if (xy1==xy3&&xy3>xy2){
        ketQua=" Sinh viên thứ 1 và thứ 3 xa trường nhất ";
    } else if (xy2==xy3&&xy3>xy1){
        ketQua=" Sinh viên thứ 2 và thứ 3 xa trường nhất ";
    } else if (xy1==xy2&&xy2==xy3){
        ketQua=" Cả ba sinh viên đều bằng khoảng cách nhau ";
    }
    document.getElementById("bonNangCao").innerHTML=ketQua;
}
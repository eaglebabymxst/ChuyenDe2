import { myFont } from './myFont.js';
$(".xacnhan").on('click',function () {
    var doc = new jsPDF();
    var img= new Image()
    img.src = './img/FileAnh9.jpg'
    doc.addFileToVFS("time-normal.ttf", myFont);
    doc.addFont("time-normal.ttf", "time", "normal");
    doc.setFont("time");
    doc.text(10,10,"Hồ Sơ Đăng Kí")
    doc.text(10,20,"Huỳnh Duy Khánh")
    doc.addImage(img, 'jpg', 10, 40,30,30);
    doc.save();
})
import {myFont} from './myFont.js';
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
    var blob = doc.output('blob');
    Upload(blob) 
})
async function Upload(blob) {
    let formData = new FormData();           
    formData.append("pdf", blob);
    await fetch('./php/upload.php', {
        method: "POST", 
        body: formData,
    }).then(response => response.text());
}
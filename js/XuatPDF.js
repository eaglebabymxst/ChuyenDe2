import {myFont} from './myFont.js';

$(".xacnhan").on('click',function () {
    var doc = new jsPDF();
    var ten = $(".txtten").val()
    var cmnd = $(".txtcmnd").val()
    var ngaysinh = $(".txtngaysinh").val()
    var quoctich = $(".txtquoctich").val()
    var gioitinh = $(".txtgioitinh").val()
    var mail = $(".txtmail").val()
    var sdt = $(".txtsdt").val()
    var diachi = $(".txtdiachi").val()
    var tencha = $("#txttencha").val()
    var cmndcha = $("#txtcmndcha").val()
    var nghenghiepcha = $("#txtnghenghiepcha").val()
    var tenme = $("#txttenme").val()
    var cmndme = $("#txtcmndme").val()
    var nghenghiepme = $("#txtnghenghiepme").val();
    var chandung =new Image();
    var cmndtrc = new Image()
    var cmndsau = new Image()
    var bangtn = new Image()
    var theduthi = new Image()
    var bangdiem = new Image()
    var nvqs = new Image()
    chandung.src = document.getElementById("imgPreviewchandung").src
    cmndtrc.src = document.getElementById("imgPreviewcmndtrc").src
    cmndsau.src = document.getElementById("imgPreviewcmndsau").src
    bangtn.src = document.getElementById("imgPreviewbangtn").src
    theduthi.src = document.getElementById("imgPreviewtheduthi").src
    bangdiem.src = document.getElementById("imgPreviewbangdiem").src
    nvqs.src = document.getElementById("imgPreviewnvqs").src
    doc.addFileToVFS("time-normal.ttf", myFont);
    doc.addFont("time-normal.ttf", "time", "normal");
    doc.setFont("time");
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 255);
    doc.text(30, 20, '------ Hồ sơ đăng ký nhập học ------');
    doc.setTextColor(0, 0, 255);
    doc.setFontSize(18);
    doc.setTextColor(0, 255, 0);
    doc.text(10, 40, 'Thông tin cá nhân');
    doc.addImage(chandung,130,40,60,60);
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(20,35+20,"Họ Và Tên: "+ten)
    doc.text(20, 45+20, 'CMND/CCCD: '+cmnd);
    doc.text(20, 55+20, 'Ngày sinh: '+ngaysinh);
    doc.text(20, 65+20, 'Quốc tịch: '+quoctich);
    doc.text(20, 75+20, 'Giới tính: '+gioitinh);
    doc.text(20, 85+20, 'Email: '+mail);
    doc.text(20, 95+20, 'Số điện thoại: '+sdt);
    doc.text(20, 105+20, 'Địa chỉ: '+diachi);

    doc.setFontSize(18);
    doc.setTextColor(0, 255, 0);
    doc.text(10, 115+20, 'Thông tin lý lịch: ');
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 125+20, 'Họ và tên cha: '+tencha);
    doc.text(20, 135+20, 'CMND/CCCD: '+cmndcha);
    doc.text(20, 145+20, 'Nghề nghiệp: '+nghenghiepcha);
    doc.text(20, 155+20, 'Họ và tên mẹ: '+tenme);
    doc.text(20, 165+20, 'CMND/CCCD: '+cmndme);
    doc.text(20, 175+20, 'Nghề nghiệp: '+nghenghiepme);
    doc.addPage();
    doc.setFontSize(22);
    doc.setTextColor(0, 255, 0);
    doc.text(10, 20, 'Ảnh hồ sơ: ');
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 30, 'Ảnh CMND/CCCD mặt trước: ');
    doc.addImage(cmndtrc, 30, 40,150,100);
    doc.text(20, 150, 'Ảnh CMND/CCCD mặt sau: ');
    doc.addImage(cmndsau, 30, 160,150,100);
    doc.addPage()
    doc.text(20, 30, 'Ảnh bằng tốt nghiệp: ');
    doc.addImage(bangtn, 30, 40,150,100);
    doc.text(20, 150, 'Ảnh thẻ dự thi: ');
    doc.addImage(theduthi, 30, 160,150,100);
    doc.addPage()
    doc.text(20, 30, 'Ảnh bảng điểm: ');
    doc.addImage(bangdiem, 30, 40,150,100);
    doc.text(20, 150, 'Ảnh xác nhận hoãn nghĩa vụ quân sự: ');
    doc.addImage(nvqs, 30, 160,150,100);
    doc.save();
    var blob = doc.output('blob');
    UploadPDF(blob,mail,ten) 
})
async function UploadPDF(blob,mail,hoten) {
    let formData = new FormData();           
    formData.append("pdf", blob);
    await fetch('./php/uploadPDF.php', {
        method: "POST", 
        body: formData,
    }).then(response => response.text())
      .then(response=>{
        console.log(response);
        UploadDataBase(response,mail,hoten)
    })
}
function queryDataPost(url,dataSend,callback){
    $.ajax({
        type: 'POST',
        url: url,
        data: dataSend,
        async: true,
        dataType: 'json',
        success: callback
    });
}
function UploadDataBase(TenFilePDF,mail,hoten) {
    var datasend={
        event : "UploadData",
        NamePDF : TenFilePDF,
        Email : mail,
        HoTen : hoten
    }
    queryDataPost("./php/uploadDatabase.php", datasend,function (res) {
        if(res['success'] == 1){
            alert("Gửi Thành Công")
            $(".thongtin").addClass("is-hidden");
        }else{
        };
    });
}
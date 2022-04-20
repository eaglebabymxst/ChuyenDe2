function showdata(params) {
    var dataSend = {
        event: "ShowDSSV",
       };
    queryDataPost("./php/uploadDatabase.php",dataSend,function (data) {
        var dssv = "";
        data.items.forEach(element => {
            dssv = "<li class='w-100 py-2 ps-4 pe-4 "+element.idPDF+"' onclick=showPDF('"+element.idPDF+"','"+element.mail+"')><i class='bx bx-user' ></i><span>"+element.hoten+"</span></li>"+ dssv;
        });
        $(".danhsachsinhvien").html(dssv)
    })
}
function dautien() {
    var dataSend = {
        event: "ShowDSSV",
       };
    queryDataPost("./php/uploadDatabase.php",dataSend,function (data) {
        if(data.items[0] != null && data.items[0] != null){
            showPDF(data.items[0].idPDF,data.items[0].mail);
        }
    })
}
$(document).ready(function () {
    showdata();
    dautien();
})
var email = "";
var gnamePDF = "";
function showPDF(namePDF,mail) {
    var viewer =$(".viewpdf");
    email = "";
    gnamePDF = "";
    PDFObject.embed('./uploadFile/'+namePDF+".pdf",viewer)
    email =  mail;
    gnamePDF = namePDF;
}
document.getElementById("duyet").addEventListener('click', function () {
    var noidung= "Hồ Sơ Của Bạn Được Duyệt Thành Công Mời Thanh Toán Tại "+" https://sandbox.vnpayment.vn/paymentv2/VnPayQR/Transaction/Index.html?token=060c39e426b449cd8587c34381898c47"
    sendEmail(email,noidung);
    uploadtrangthaiduyet(gnamePDF);
    showdata();
    dautien();
})
function uploadtrangthaiduyet(namepdf) {
    datasend={
        event : "uploadtrangthai",
        NamePDF : namepdf
    }
    queryDataPost("./php/uploadDatabase.php",datasend,function (data) {
        console.log(data.success)
    })
}
document.getElementById("khongduyet").addEventListener('click', function () {
    var noidung= $(".txtlydo").val()
    if (noidung==""){
        alert("Nhập Lý Do Không Duyệt")
    }else{
        noidung ="Hồ Sơ Không Của Bạn Không Được Duyệt Lý Do: "+noidung 
        sendEmail(email,noidung);
        deletefilePDF(gnamePDF);
        dautien();
    }
})
function deletefilePDF(namePDF) {
    var datasend={
        event:"deletePDF",
        NamePDF: namePDF
    }
    console.log(datasend)
    queryDataPost("./php/uploadDatabase.php", datasend, function (res) {
        if(res.success==1){
             showdata();
        }else{
           alert("Lỗi xóa File");
        }
    });
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
function sendEmail(mail,noidung) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "maildhabc@gmail.com",
	Password : "01255314331hDk",
	To : mail,
	From : "maildhabc@gmail.com",
	Subject : "Trạng Thái Duyệt Hồ Sơ",
	Body : noidung,
	}).then(
		message =>  {
            if(message=="OK"){
                alert("Gửi Thành Công")
            }
        }
	);
}
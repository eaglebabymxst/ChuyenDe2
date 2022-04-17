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
        showPDF(data.items[0].idPDF,data.items[0].mail);
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
    var noidung= "Hồ Sơ Của Bạn Được Duyệt Thành Công"
    sendEmail(email,noidung);
    dautien();
})
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
function showdata(params) {
    var dataSend = {
        event: "ShowDSSV",
       };
    queryDataPost("./php/uploadDatabase.php",dataSend,function (data) {
        var dssv = "";
        data.items.forEach(element => {
            dssv = dssv + "<li class='w-100 py-2 ps-4 pe-4' onclick=showPDF('"+element.idPDF+"','"+element.mail+"')><i class='bx bx-user' ></i><span>"+element.hoten+"</span></li>";
        });
        $(".danhsachsinhvien").html(dssv)
    })
}
$(document).ready(function () {
    showdata();
})
function showPDF(namePDF,mail) {
    var viewer =$(".viewpdf");
    PDFObject.embed('./uploadFile/'+namePDF+".pdf",viewer)
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

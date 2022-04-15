$(".ttformtt").on('click',function () {
    $(".formThongTin").addClass("is-hidden");
    $(".formLyLich").addClass("is-hidden");
    $(".formAnh").removeClass("is-hidden");
})
$(".tvformanh").on('click',function () {
    $(".formAnh").addClass("is-hidden");
    $(".formLyLich").addClass("is-hidden");
    $(".formThongTin").removeClass("is-hidden");
})
$(".tvformcuoi").on('click',function () {
    $(".formAnh").removeClass("is-hidden");
    $(".formLyLich").addClass("is-hidden");
    $(".formThongTin").addClass("is-hidden");
})
$(".ttformanh").on('click',function () {
    $(".formAnh").addClass("is-hidden");
    $(".formLyLich").removeClass("is-hidden");
    $(".formThongTin").addClass("is-hidden");
})
$(".guiform").on('click',function () {
    document.getElementById("hovaten").innerHTML = $(".txtten").val()
    document.getElementById("CMND").innerHTML = $(".txtcmnd").val()
    document.getElementById("ngaysinh").innerHTML = $(".txtngaysinh").val()
    document.getElementById("quoctich").innerHTML = $(".txtquoctich").val()
    document.getElementById("gioitinh").innerHTML = $(".txtgioitinh").val()
    document.getElementById("mail").innerHTML = $(".txtmail").val()
    document.getElementById("sdt").innerHTML = $(".txtsdt").val()
    document.getElementById("diachi").innerHTML = $(".txtdiachi").val()
    document.getElementById("tencha").innerHTML = $("#txttencha").val()
    document.getElementById("cmndcha").innerHTML = $("#txtcmndcha").val()
    document.getElementById("nghenghiepcha").innerHTML = $("#txtnghenghiepcha").val()
    document.getElementById("tenme").innerHTML = $("#txttenme").val()
    document.getElementById("cmndme").innerHTML = $("#txtcmndme").val()
    document.getElementById("nghenghiepme").innerHTML = $("#txtnghenghiepme").val()
    $(".thongtin").removeClass("is-hidden");
})
$(".lamlai").on('click',function () {
    $(".thongtin").addClass("is-hidden");  
})
function show(ten) {
    document.getElementById(ten).addEventListener('change',e=>
    {
        if (e.target.files.length) {
            const src = URL.createObjectURL(e.target.files[0]);
            document.getElementById("imgPreview"+ten).src = src;
            document.getElementById("FileAnh"+ten).src = src
            $("."+ten).removeClass("is-hidden")
        }
    }
    )
}
function DeleteFileAnh(ten) {
    document.getElementById("imgPreview"+ten).src = "";
    document.getElementById("FileAnh"+ten).src = null;
    document.getElementById(ten).value = null;
    $("."+ten).addClass("is-hidden")
}

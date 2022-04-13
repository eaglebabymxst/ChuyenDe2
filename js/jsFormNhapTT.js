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
    $(".thongtin").removeClass("is-hidden");
})
$(".lamlai").on('click',function () {
    $(".thongtin").addClass("is-hidden");
})
function showdata() {
    
}
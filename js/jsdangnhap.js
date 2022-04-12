$(".dangnhap").on('click',function () {
        $(".login").removeClass("is-hidden");
})
$(".btn_close").on('click',function () {
    $(".login").addClass("is-hidden");
})
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
$(".ttformanh").on('click',function () {
    $(".formAnh").addClass("is-hidden");
    $(".formLyLich").removeClass("is-hidden");
    $(".formThongTin").addClass("is-hidden");
})
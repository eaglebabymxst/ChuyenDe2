$(document).ready(function () {
    $(".dangnhap").on('click',function () {
        $(".login").removeClass("is-hidden");
        $(".btn_login").click(function() {
            var username = $(".txtemail").val();
            var pass = $(".txtpass").val();
                if(username==""){
                    alert("Nhập Tên Tài Khoản");
                }else if(pass == "")
                {
                    alert("Nhập Mật khẩu");
                }else{
                    var datasend = {
                                event: "login",
                                username : username,
                                password : pass
                            };  
                            console.log(datasend);      				
                            queryData("./php/uploadDatabase.php", datasend , function (data) {		
                                console.log(data.items);
                                 if(data.success == 1){						
                                    localStorage.setItem("user", username);
                                    localStorage.setItem("pass", pass);
                                    location.href="Admin.html";	
                                 }else
                                 {
                                     alert("Tài khoản chưa đúng");
                                     $(".txtemail").val("");
                                     $(".txtpass").val("");
                                 }
                            });
                }
        });
    })
})
function queryData(url,dataSend,callback){
    $.ajax({
        type: 'POST',
        url: url,
        data: dataSend,
        async: true,
        dataType: 'json',
        success: callback
    });
}
$(".btn_close").on('click',function () {
    $(".login").addClass("is-hidden");
})


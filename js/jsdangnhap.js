$(document).ready(function () {
    var myUser=JSON.parse(localStorage.getItem("userbookstore"));
    console.log(myUser);
    console.log(localStorage.getItem("rememberbookstore"));
    if(myUser!=null ||myUser!=undefined){
            var r=	localStorage.getItem("rememberbookstore");	 
            if(r=="true"){
                $(".txtemail").val(localStorage.getItem("usernamebookstore"));
                $(".txtpass").val(localStorage.getItem("passwordbookstore"));
            }
    }
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
                                        if ($(".remember").is(':checked')) {
                                            localStorage.setItem("rememberbookstore", true);
                                        }else{
                                            localStorage.removeItem("rememberbookstore");
                                        }
                                        localStorage.setItem("usernamebookstore", username);
                                        localStorage.setItem("passwordbookstore", pass);
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


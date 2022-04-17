function buildUserDropdown(){	
    var myUser=localStorage.getItem('user');
	if(myUser==undefined || myUser==null||myUser==""){
        location.href="index.html";
    }
	else{	
	}
}
$(document).ready(function () {
    buildUserDropdown();
})
$(".dangxuat").on('click',function () {
    localStorage.setItem("user", "");
    location.href='index.html'
})
<?php
require_once("server.php");//add code php file server vào trong file api.php
$event=$_POST['event'];//Lấy giá trị từ biến event từ client gửi lên theo dạng post 
switch ($event) {
	case "UploadData":
		$namePDF = $_POST['NamePDF'];
        $mail = $_POST['Email'];
        $hovaten =$_POST['HoTen'];
        $rs=mysqli_query($conn,"SELECT COUNT(*) as total FROM `user` WHERE idPDF = '.$namePDF.'");
        $row=mysqli_fetch_array($rs);
        if((int)$row['total']>0){
			 $res["success"] = 2; 
		}else{
            $sql="INSERT INTO `user`(`hovaten`, `idPDF`, `mail`, `trangthaiTT`, `trangthaiduyeths`) VALUES ('".$hovaten."','".$namePDF."','".$mail."','0','0')";
            if (mysqli_query($conn, $sql)) {
				if(mysqli_affected_rows($conn)>0){ //có thay đổi dữ liệu
                         $res["success"] = 1; //Insert dữ liệu thành công
				}
				else{
					$res["success"] = 0;//Không thành công
				}
            } else {
                $res["success"] = 0;  //Không thành công
            }
        }
        echo json_encode($res);
        mysqli_close($conn);
        break; 
    case "updatepass":
        $username=$_POST['username'];
        $pass=$_POST['pass'];
        $sql="update `users` set password='$pass' where username='".$username."'";
            if (mysqli_query($conn,$sql)) {
                if(mysqli_affected_rows($conn)>0){
                    $res[$event] = 1;
                }
                else
                {
                    $res[$event] = 0;
                }
            } else {
                $res[$event] = 0;
            }
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "login":
        $mang=array();
        $username=$_POST['username'];
        $password=$_POST['password'];
        $rs=mysqli_query($conn,"SELECT * FROM `admin` WHERE tendangnhap = '".$username."' and matkhau = '".$password."'");
        if(mysqli_num_rows($rs)>0){
            while ($rows=mysqli_fetch_array($rs)){
                $usertemp['username']=$rows['tendangnhap'];
                $usertemp['password']=$rows['matkhau'];
                array_push($mang,$usertemp);
            }
            $jsondata['success'] = 1 ;
            $jsondata['items'] = $mang;
            echo json_encode($jsondata);
        }
        else{
            $jsondata['success'] = 0;
            $jsondata['items']  = $mang ;
            echo json_encode($jsondata);
        }
        mysqli_close($conn);
        break;
    case "ShowDSSV":
        $mang=array();
        $rs=mysqli_query($conn,"SELECT hovaten, mail , idPDF FROM `user` WHERE trangthaiTT = '0' and trangthaiduyeths = '0'");
        if(mysqli_num_rows($rs)>0){
            while ($rows=mysqli_fetch_array($rs)){
                $usertemp['hoten']=$rows['hovaten'];
                $usertemp['mail']=$rows['mail'];
                $usertemp['idPDF']=$rows['idPDF'];
                array_push($mang,$usertemp);
            }
            $jsondata['success'] = 1 ;
            $jsondata['items'] = $mang;
            echo json_encode($jsondata);
        }
        else{
            $jsondata['success'] = 0;
            $jsondata['items']  = $mang ;
            echo json_encode($jsondata);
        }
        mysqli_close($conn);
        break;
    case "deletePDF":
        $filelinkpdf=$_POST['NamePDF'];
        $sql = "DELETE FROM `user` WHERE idPDF = '".$filelinkpdf."'";      
        if (mysqli_query($conn, $sql)) {
                $res["success"] = 1; 
        }
        else{
            $res["success"] = 0;
        }
        if($filelinkpdf==""){
            $res["success"] = 1;
        }else{
            $filelinkpdf="../uploadFile/".$filelinkpdf.".pdf";
        if(unlink($filelinkpdf)){
                $res["success"] = 1;
            }else{
                $res["success"] = 2;//file not exsit
            }
        }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
}
?>
<?php
/* Get the name of the uploaded file */
    $filename = md5(mt_rand());
    /* Choose where to save the uploaded file */
    $location = "../uploadFile/".$filename.".pdf";
    /* Save the uploaded file to the local filesystem */
    if ( move_uploaded_file($_FILES['pdf']['tmp_name'], $location) ) { 
        echo $filename;
    } else { 
        echo "Không Thành Công";
    }
?>
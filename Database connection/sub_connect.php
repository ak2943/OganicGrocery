
<?php
$sub_email=$_POST['sub_email'];

         $host="localhost";
         $dbusername="root";
         $dbpassword="alisha@123";
         $dbname="grocery";
         

         $con =new mysqli($host,$dbusername,$dbpassword,$dbname,3307);
     if($con->connect_error)
      {
        die('Connection failed : '.$con->connect_error);
      }
     else{
        $stmt=$con->prepare("insert into subscribe(`sub_email`) values(?)");
        $stmt->bind_param("s",$sub_email);
        $stmt->execute();
        $stmt->close();
        $con->close();
        } 
   
        header("Location: http://localhost/project/index.html");
?>

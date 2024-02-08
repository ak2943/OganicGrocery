
<?php
$email=$_POST['email'];
$password=$_POST['password'];

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
        $stmt=$con->prepare("insert into login(`email`,`password`) values(?,?)");
        $stmt->bind_param("ss",$email,$password);
        $stmt->execute();
        $stmt->close();
        $con->close();
        } 
   
        header("Location: http://localhost/project/login.html");
?>

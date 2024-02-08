
<?php
$uname=$_POST['uname'];
$email2=$_POST['email2'];
$password2=$_POST['password2'];

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
        $stmt=$con->prepare("insert into register(`uname`,`email2`,`password2`) values(?,?,?)");
        $stmt->bind_param("sss",$uname,$email2,$password2);
        $stmt->execute();
        $stmt->close();
        $con->close();
        } 
        header("Location: http://localhost/project/login.html");
?>

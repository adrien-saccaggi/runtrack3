<?php

$dsn = 'mysql:host=localhost;dbname=utilisateurs;charset=utf8';
 $user = 'root';
 $pass = '';

 $cnx = null;
 try {
     $cnx = new PDO($dsn, $user, $pass);
    } catch (PDOException $e) {
     echo 'Une erreur est survenue !';
 }
 $req = 'SELECT * FROM utilisateurs';
 $stmt = $cnx->query($req);
 $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
$userEncode = json_encode($users);
echo ($userEncode);


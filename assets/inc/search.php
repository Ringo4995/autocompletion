<?php
include("./PDO.php");
//echo "je suis bien sur la page search.php";
//var_dump($_POST);
//echo $_POST["search"];
$search = $_GET["search"];
//Pouvez-vous écrire une requête mysql qui utilisera $search et me donnera le titre de film correspondant

$request = "SELECT * FROM movies_full WHERE title LIKE'%$search%' LIMIT 0,10;";
//echo $request;
$query = $pdo->prepare($request);
$query->execute();
//var_dump($query->fetchAll());
$json = json_encode($query->fetchAll());
echo $json;
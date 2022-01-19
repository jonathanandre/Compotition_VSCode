<?php
$params = file_get_contents("php://input");
$json=json_decode($params, true);
$file = 'assets/js/resultats.json';
file_put_contents($file, $params);
?>
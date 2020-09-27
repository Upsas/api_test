<?php

include 'db.php';

$sql = "SELECT `id`, `name` FROM `reklamos`";

$result = mysqli_query($conn, $sql);
$json = array();
while ($row = mysqli_fetch_assoc($result)) {

    $json[] = $row;
}


echo json_encode($json);

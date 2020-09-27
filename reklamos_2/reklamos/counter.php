<?php


// session_start();
// // if counter is not set, set to zero
// if (!isset($_SESSION['counter'])) {
//     $_SESSION['counter'] = 0;
// }

// // if button is pressed, increment counter
// if (isset($_POST['counter'])) {
//     ++$_SESSION['counter'];
// }


if (isset($_POST['counter'])) {

    $id = $_POST['counter'];
    $update = "UPDATE `reklamos` SET `counter` = `counter` + 1 WHERE `reklamos`.`id` = $id";
    mysqli_query($conn, $update);
}
if (isset($_POST['counter-1'])) {

    $id = $_POST['counter-1'];
    $update = "UPDATE `reklamos` SET `counter` = `counter` + 1 WHERE `reklamos`.`id` = $id";
    mysqli_query($conn, $update);
}
if (isset($_POST['counter-2'])) {

    $id = $_POST['counter-2'];
    $update = "UPDATE `reklamos` SET `counter` = `counter` + 1 WHERE `reklamos`.`id` = $id";
    mysqli_query($conn, $update);
}
if (isset($_POST['counter-3'])) {

    $id = $_POST['counter-3'];
    $update = "UPDATE `reklamos` SET `counter` = `counter` + 1 WHERE `reklamos`.`id` = $id";
    mysqli_query($conn, $update);
} 

// file_put_contents("clicks.txt", $_SESSION['counter'] . ' ', FILE_APPEND);

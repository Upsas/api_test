<?php
include 'db.php';
include 'json.php';
include 'counter.php';

$numbers = range(0, 5);
shuffle($numbers);
$array = array_slice($numbers, 0, 4);


$image_src = '<input name="ads"  type="image"  src="';
$image_size = ' " height="15%" width="30%">';

?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="cache-control" content="no-cache" />

  <link rel="stylesheet" href="css/style.css" />
  <title>Reklamos</title>
</head>

<body>
  <header>
    <div class="logo"></div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </header>
  <section class="bandymas center">
    <div>
      <p class="p-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
        placeat provident. Omnis repudiandae magnam similique necessitatibus
        ullam illum iste maiores minus, ratione assumenda nostrum asperiores
        vitae facere porro dolore tempore.
      </p>

      <a href="#">
        <input class="button" type="button" value="Show More" />
      </a>
    </div>

    <div class="top-right">
      <form method="POST" id="top-right">

        <?php
        $id = $array[0];
        $a = $json_data[$id]['id'];
        echo "<input type='hidden' id='counter' name='counter' value='$a'/>";
        echo $path =  $image_src . $json_data[$id]['image'] . $image_size;
        if (getimagesize($json_data[$id]['image']) > 0) {
          $update = "UPDATE `reklamos` SET `view_counter` = `view_counter` + 1 WHERE `reklamos`.`id` = $a";
          mysqli_query($conn, $update);
        }

        ?>


      </form>
    </div>

    <div class="top-left">
      <form method="POST" id="top-left">

        <?php
        $id = $array[1];
        $b = $json_data[$id]['id'];
        echo "<input type='hidden' id='counter-1' name='counter-1' value='$b' />";
        echo $path = $image_src . $json_data[$id]['image'] . $image_size;
        if (getimagesize($json_data[$id]['image']) > 0) {
          $update = "UPDATE `reklamos` SET `view_counter` = `view_counter` + 1 WHERE `reklamos`.`id` = $b";
          mysqli_query($conn, $update);
        }


        ?>
      </form>
    </div>
    <div class="bottom-left">
      <form method="POST" id='bottom-left'>
        <?php

        $id = $array[2];
        $c = $json_data[$id]['id'];
        echo "<input type='hidden' id='counter-2' name='counter-2' value='$c'/>";
        echo $image_src . $json_data[$id]['image'] . $image_size;

        if (getimagesize($json_data[$id]['image']) > 0) {
          $update = "UPDATE `reklamos` SET `view_counter` = `view_counter` + 1 WHERE `reklamos`.`id` = $c";
          mysqli_query($conn, $update);
        }

        ?>
      </form>
    </div>

    <div class="bottom-right">
      <form method="POST" id="bottom-right">

        <?php

        $id = $array[3];
        $d = $json_data[$id]['id'];
        echo "<input type='hidden' id='counter-3' name='counter-3' value='$d' />";
        echo $image_src . $json_data[$id]['image'] . $image_size;
        if (getimagesize($json_data[$id]['image']) > 0) {
          $update = "UPDATE `reklamos` SET `view_counter` = `view_counter` + 1 WHERE `reklamos`.`id` = $d";
          mysqli_query($conn, $update);
        }
        ?>


      </form>
    </div>
    </form>
  </section>
  <section class="bandymas-1 center">
    <div>
      <p class="p-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
        placeat provident. Omnis repudiandae magnam similique necessitatibus
        ullam illum iste maiores minus, ratione assumenda nostrum asperiores
        vitae facere porro dolore tempore.
      </p>

      <a href="#">
        <input class="button" type="button" value="Show More" />
      </a>

    </div>

  </section>
  <section class="bandymas center">
    <div>
      <p class="p-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
        placeat provident. Omnis repudiandae magnam similique necessitatibus
        ullam illum iste maiores minus, ratione assumenda nostrum asperiores
        vitae facere porro dolore tempore.
      </p>

      <a href="#">
        <input class="button" type="button" value="Show More" />
      </a>

    </div>

  </section>

</body>
<script src="http://localhost/reklamos_2/reklamos/ads.js"></script>

</html>
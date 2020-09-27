<?php

$url = '../banner/myflie.json';
$_a = file_get_contents($url);
$json_data = json_decode($_a, true);

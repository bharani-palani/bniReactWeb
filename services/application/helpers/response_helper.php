<?php
defined('BASEPATH') OR exit('No direct script access allowed');
if(!function_exists("json")){
    function json($array) {
        $ci = get_instance();
        header("Access-Control-Allow-Origin: *");
		header('Content-Type: application/json');
        return json_encode($array);
    }
}
?>
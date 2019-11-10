<?php
defined('BASEPATH') OR exit('No direct script access allowed');
if(!function_exists("json")){
    function json($response) {
		$ci =& get_instance();
		$ci->output->set_content_type('application/json');
		$ci->output->set_status_header(200);
		$ci->output->set_output(json_encode($response, JSON_PRETTY_PRINT));
    }
}
?>
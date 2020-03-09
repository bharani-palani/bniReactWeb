<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class awards extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('awards_model');
	}
	public function index()
	{

	}
	public function validateToken($token_id) {
		$tokenData = array();
		$tokenData['id'] = $token_id; 
		return AUTHORIZATION::generateToken($tokenData);
	}

	public function get_all_awards()
	{
		$data["response"] = $this->awards_model->get_all_awards();
		json($data,array(),200);	

		// ob_start();
		// $headers = apache_request_headers();
		// if(array_key_exists('Authorization', $headers)) {
		// 	if($this->validateToken(1) === $headers['Authorization']) {
		// 		$data["response"] = $this->awards_model->get_all_awards();
		// 		json($data,array(),200);	
		// 	} else {
		// 		$data["response"] = array("error" => "Invalid Token");
		// 		json($data,array(),401);
		// 	}
		// } else {
		// 	$data["response"] = array("error" => "Token Unavailable");
		// 	json($data,array(),401);		
		// }
	}
}

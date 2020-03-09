<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class home extends CI_Controller {
	public function __construct()
    {
        parent::__construct();
	}
	public function validateToken($token_id) {
		$tokenData = array();
		$tokenData['id'] = $token_id; 
		return AUTHORIZATION::generateToken($tokenData);
	}
	public function index()
	{
		$data["response"] = array("heading" => "Bharani Palani", "subHeading" => "Full Stack Devops");
		json($data,array(),200);	
		
		/*
		Start here: (headers set)
		but AJAX calling 2 times (options and get)
		Action: Resolve this issue
		*/

		// ob_start();
		// $headers = apache_request_headers();
		// if(array_key_exists('Authorization', $headers)) {
		// 	if($this->validateToken(1) === $headers['Authorization']) {
		// 		$data["response"] = array("heading" => "Bharani Palani", "subHeading" => "Full Stack Devops");
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

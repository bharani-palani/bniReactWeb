<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class home extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
		$this->load->library("../controllers/auth");
	}
	public function index()
	{
		$data["response"] = array("heading" => "Bharani Palani", "subHeading" => "Full Stack Devops");
		$this->auth->response($data,array(),200);
	}
}

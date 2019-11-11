<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class home extends CI_Controller {
	public function __construct()
    {
        parent::__construct();
    }
	public function index()
	{
		$this->load->view('welcome_message');
		// $data["response"] = array("heading" => "Bharani Palani", "subHeading" => "Full Stack Devops");
		// echo json($data);
	}
}

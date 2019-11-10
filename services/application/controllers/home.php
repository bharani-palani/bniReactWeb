<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class home extends CI_Controller {
	public function __construct()
    {
        parent::__construct();
        /*
        $check_auth_client = $this->MyModel->check_auth_client();
		if($check_auth_client != true){
			die($this->output->get_output());
		}
		*/
    }
	public function index()
	{
		$data['server'] = $_SERVER['SERVER_NAME'];
		$data['status'] = "Success";
		$data['base_url'] = base_url();
		$data['site_url'] = site_url();
		$data["response"] = array("heading" => "Bharani Palani", "subHeading" => "Full Stack Devops");
		echo json($data);
	}
}

<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class technologies extends CI_Controller {
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
		$this->load->model('technologies_model');
		$data['server'] = $_SERVER['SERVER_NAME'];
		$data['status'] = "Success";
		$data['site_url'] = site_url();
		$data['base_url'] = base_url();
		$data["response"] = $this->technologies_model->get_all_techs();
		echo json($data);
	}
}

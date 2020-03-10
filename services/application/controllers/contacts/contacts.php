<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class contacts extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('contact_model');
		$this->load->library("../controllers/auth");
	}
	public function get_all_contacts()
	{
		$data["response"] = $this->contact_model->get_all_contacts();
		$this->auth->response($data,array(),200);
	}
}

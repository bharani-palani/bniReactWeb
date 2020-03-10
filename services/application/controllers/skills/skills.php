<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class skills extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('skills_model');
		$this->load->library("../controllers/auth");
	}
	public function get_all_skills()
	{
		$data["response"] = $this->skills_model->get_all_skills();
		$this->auth->response($data,array(),200);
	}
}

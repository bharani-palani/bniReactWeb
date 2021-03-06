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
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
			$data["response"] = $this->skills_model->get_all_skills();
			$this->auth->response($data,array(),200);
		}
	}
}

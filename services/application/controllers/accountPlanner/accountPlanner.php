<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class accountPlanner extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
		$this->load->model('accountPlanner_model');
		$this->load->library("../controllers/auth");
    }
	public function post_write()
	{
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
		$post = array(
				'bank_name'=>$this->input->post('bankName'),
				'bank_account_number'=>$this->input->post('accNo'),
				'bank_ifsc_code'=>$this->input->post('ifsc'),
			);
			$data["response"] = $this->accountPlanner_model->post_bank($post);
			$this->auth->response($data,array(),200);
		}
	}
}

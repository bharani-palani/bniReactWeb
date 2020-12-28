<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class account_planner extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
		$this->load->model('account_planner_model');
		$this->load->library("../controllers/auth");
    }
	public function post_bank()
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
                'bank_created_at' => date("Y-m-d")
			);
			$data["response"] = $this->account_planner_model->post_bank($post);
			$this->auth->response($data,array(),200);
		}
	}

	public function getAccountPlanner() {
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
			$post = array(
				"TableRows" => $this->input->post("TableRows"),
				"Table" => $this->input->post("Table")
			);
			$data["response"] = $this->account_planner_model->getAccountPlanner($post);
			$this->auth->response($data,array(),200);
		}
	}

	public function postAccountPlanner() {
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
			$post = array(
				"postData" => $this->input->post("postData")
			);
			$data["response"] = $this->account_planner_model->postAccountPlanner($post);
			$this->auth->response($data,array(),200);
		}
	}

}
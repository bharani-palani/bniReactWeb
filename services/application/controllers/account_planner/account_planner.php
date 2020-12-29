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
			if($this->input->post('bankName') && $this->input->post('accNo') && $this->input->post('ifsc')) {
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
	}

	public function post_credit_card()
	{
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
			if(
				$this->input->post('ccName') && 
				$this->input->post('ccNumber') && 
				$this->input->post('ccStartDate') &&
				$this->input->post('ccEndDate') &&
				$this->input->post('ccPayDate')
			) {
			$post = array(
					'ccName'=>$this->input->post('ccName'),
					'ccNumber'=>$this->input->post('ccNumber'),
					'ccStartDate'=>$this->input->post('ccStartDate'),
					'ccEndDate' => $this->input->post('ccEndDate'),
					'ccPayDate' => $this->input->post('ccPayDate'),
				);
				$data["response"] = $this->account_planner_model->post_credit_card($post);
				$this->auth->response($data,array(),200);
			}
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

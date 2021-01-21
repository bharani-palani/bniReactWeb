<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class account_planner extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
		$this->load->model('account_planner_model');
		$this->load->library("../controllers/auth");
    }
	public function vendor_list() {
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
			$data["response"] = $this->account_planner_model->vendor_list();
			$this->auth->response($data,array(),200);
		}
	}
	public function inc_exp_list() {
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
			$data["response"] = $this->account_planner_model->inc_exp_list();
			$this->auth->response($data,array(),200);
		}
	}
	public function bank_list() {
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
			$data["response"] = $this->account_planner_model->bank_list();
			$this->auth->response($data,array(),200);
		}
	}
	public function credit_card_list() {
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
			$data["response"] = $this->account_planner_model->credit_card_list();
			$this->auth->response($data,array(),200);
		}
	}
	public function year_list() {
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
			$data["response"] = $this->account_planner_model->year_list();
			$this->auth->response($data,array(),200);
		}
	}
	public function cc_year_list() {
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
			$data["response"] = $this->account_planner_model->cc_year_list();
			$this->auth->response($data,array(),200);
		}
	}
	public function getIncExpChartData() {
		$validate = $this->auth->validateAll();
		if($validate === 2) {
			$this->auth->invalidTokenResponse();
		}
		if($validate === 3) {
			$this->auth->invalidDomainResponse();
		}
		if($validate === 1) {
			$post = array(
				"startDate" => $this->input->post("startDate"),
				"endDate" => $this->input->post("endDate"),
				"bank" => $this->input->post("bank")
			);
			$data = $this->account_planner_model->getIncExpChartData($post);
			$op["response"] = $data["result"];
			$this->auth->response($op,array("query" => $data["query"]),200);
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
				"Table" => $this->input->post("Table"),
				"WhereClause" => $this->input->post("WhereClause")
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

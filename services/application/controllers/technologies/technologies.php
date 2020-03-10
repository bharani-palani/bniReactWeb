<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class technologies extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
		$this->load->model('technologies_model');
		$this->load->library("../controllers/auth");
    }
	public function get_all_techs()
	{
		$data["response"] = $this->technologies_model->get_all_techs();
		$this->auth->response($data,array(),200);
	}
	public function get_all_ides()
	{
		$data["response"] = $this->technologies_model->get_all_ides();
		$this->auth->response($data,array(),200);
	}
	public function get_all_oss()
	{
		$data["response"] = $this->technologies_model->get_all_oss();
		$this->auth->response($data,array(),200);
	}
}

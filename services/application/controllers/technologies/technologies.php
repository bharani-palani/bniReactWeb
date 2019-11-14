<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class technologies extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
    }
	public function index()
	{

	}
	public function get_all_techs()
	{
		$this->load->model('technologies_model');
		$data["response"] = $this->technologies_model->get_all_techs();
		json($data,[],200);
	}
	public function get_all_ides()
	{
		$this->load->model('technologies_model');
		$data["response"] = $this->technologies_model->get_all_ides();
		json($data,[],200);
	}
	public function get_all_oss()
	{
		$this->load->model('technologies_model');
		$data["response"] = $this->technologies_model->get_all_oss();
		json($data,[],200);
	}
}

<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class contacts extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
	}
	public function index()
	{

	}
	public function get_all()
	{
		$this->benchmark->mark('code_start');
		$this->load->model('contact_model');
		$data["response"] = $this->contact_model->get_all_contacts();
		$es = $this->benchmark->elapsed_time('code_start', 'code_end');
		$pass = ["elapsedTime" => $es];
		$this->benchmark->mark('code_end');
		echo json($data, $pass);
	}
}

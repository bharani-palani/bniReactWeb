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
		$this->benchmark->mark('code_start');
		$this->load->model('technologies_model');
		$data["response"] = $this->technologies_model->get_all_techs();
		$es = $this->benchmark->elapsed_time('code_start', 'code_end');
		$pass = ["elapsedTime" => $es];
		$this->benchmark->mark('code_end');
		echo json($data, $pass);
	}
}

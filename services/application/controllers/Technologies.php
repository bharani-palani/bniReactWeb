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
	public function get_all()
	{
		$this->load->model('technologies_model');
		$data['request'] = $this->input->post('dev');
		$data["response"] = $this->technologies_model->get_all_techs();
		echo json($data);
	}
}

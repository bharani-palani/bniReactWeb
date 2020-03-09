<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class projects extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
    }
	public function index()
	{

	}
	public function get_all_projects()
	{
		$this->load->model('projects_model');
		$data["response"] = $this->projects_model->get_all_projects();
		json($data,array(),200);
	}
}

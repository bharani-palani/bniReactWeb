<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class skills extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
    }
	public function index()
	{

	}
	public function get_all_skills()
	{
		$this->load->model('skills_model');
		$data["response"] = $this->skills_model->get_all_skills();
		json($data,array(),200);
	}
}

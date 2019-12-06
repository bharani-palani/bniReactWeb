<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class awards extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
    }
	public function index()
	{

	}
	public function get_all_awards()
	{
		$this->load->model('awards_model');
		$data["response"] = $this->awards_model->get_all_awards();
		json($data,[],200);
	}
}

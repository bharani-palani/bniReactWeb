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
	public function get_all_contacts()
	{
		$this->load->model('contact_model');
		$data["response"] = $this->contact_model->get_all_contacts();
		json($data,array(),200);
	}
}

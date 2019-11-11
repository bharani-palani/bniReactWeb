<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class contact extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
    }
	public function index()
	{

	}
	public function get_all()
	{
		$this->load->model('contact_model');
		$data["response"] = $this->contact_model->get_all_contacts();
		echo json($data);
	}
}

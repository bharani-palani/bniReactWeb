<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Technologies extends CI_Controller {
	public function index()
	{
		$this->load->model('technologies_model');
		$data = $this->technologies_model->get_all_techs();
		echo json($data);
	}
}

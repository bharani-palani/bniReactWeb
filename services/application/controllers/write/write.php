<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class write extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
		$this->load->model('write_model');
		$this->load->library("../controllers/auth");
    }
	public function post_write()
	{
		$post = array(
			'comment_name'=>$this->input->post('name'),
			'comment_mobile'=>$this->input->post('mobile'),
			'comment_description'=>$this->input->post('comments'),
			'comment_email'=>$this->input->post('email'),
			'comment_ip'=>$_SERVER['REMOTE_ADDR'],
			'latitude'=>$this->input->post('latitude'),
			'longitude'=>$this->input->post('longitude')
		);
		$data["response"] = $this->write_model->post_write($post);
		$this->auth->response($data,array(),200);
	}
}

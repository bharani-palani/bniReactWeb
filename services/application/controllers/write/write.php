<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class write extends CI_Controller {
	public function __construct()
    {
		parent::__construct();
    }
	public function index()
	{

	}
	public function post_write()
	{
		$this->load->model('write_model');
		$post = array(
			'comment_name'=>$this->input->post('name'),
			'comment_mobile'=>$this->input->post('mobile'),
			'comment_description'=>$this->input->post('comments'),
			'comment_email'=>$this->input->post('email'),
			'latitude'=>$this->input->post('latitude'),
			'longitude'=>$this->input->post('latitude'),
			'comment_ip'=>$_SERVER['REMOTE_ADDR']
		);
		$data["response"] = $this->write_model->post_write($post);
		json($data,[],200);
	}
}

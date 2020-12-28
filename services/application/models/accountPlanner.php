<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class accountPlanner_model extends CI_Model
{
	public function __construct()
    {
		parent::__construct();
    }	
	public function post_bank($post)
	{
		$this->db = $this->load->database('default', TRUE);  
		$this->db->insert('banks',$post);
		$json_data = array("status" => "success");
		return $json_data;
	}

}
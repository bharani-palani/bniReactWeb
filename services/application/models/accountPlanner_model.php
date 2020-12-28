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
		$insert_id = $this->db->insert_id();
		$json_data = array("status" => "success", "insert_id" => $insert_id);
		return $json_data;
	}

}
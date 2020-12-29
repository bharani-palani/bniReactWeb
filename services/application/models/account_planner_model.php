<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class account_planner_model extends CI_Model
{
	public function __construct(){
		parent::__construct();
	}	
	public function post_bank($post)
	{
		$this->db = $this->load->database('default', TRUE);  
		$this->db->insert('banks',$post);
		return ($this->db->affected_rows() !== 1) ? array("status" => "failed") : array("status" => "success");
	}
	public function post_credit_card($post)
	{
		$this->db = $this->load->database('default', TRUE);  
		$this->db->insert('credit_cards',$post);
		return ($this->db->affected_rows() !== 1) ? array("status" => "failed") : array("status" => "success");
	}
	public function post_vendor($post)
	{
		$this->db = $this->load->database('default', TRUE);  
		$this->db->insert('vendors',$post);
		return ($this->db->affected_rows() !== 1) ? array("status" => "failed") : array("status" => "success");
	}
	public function post_inc_exp_category($post)
	{
		$this->db = $this->load->database('default', TRUE);  
		$this->db->insert('income_expense_category',$post);
		return ($this->db->affected_rows() !== 1) ? array("status" => "failed") : array("status" => "success");
	}
	function getAccountPlanner($post) {
		$Table = $post["Table"];
		$this->db->select($post["TableRows"]);
		switch ($Table) {
				case "banks":
						$query = $this->db->order_by("bank_name","asc")->get('banks');
				break;
				case "income_expense":
						$query = $this->db->order_by("inc_exp_name","asc")->get('income_expense');
				break;
				case "credit_cards":
						$query = $this->db->order_by("credit_card_name","asc")->get('credit_cards');
				break;
				case "vendors":
						$query = $this->db->order_by("vendor_name","asc")->get('vendors');
				break;
				default:
					return false;
		}
		return get_all_rows($query);
	}
	
	public function postAccountPlanner($post) {
		$postData = json_decode($post['postData']);
		$Table = $postData->Table;
		switch ($Table) {
				case "banks":
						return $this->onTransaction($postData, 'banks', 'bank_id');
				break;
				case "income_expense":
						return $this->onTransaction($postData, 'income_expense', 'inc_exp_id');
				break;
				case "credit_cards":
						return $this->onTransaction($postData, 'credit_cards', 'credit_card_id');
				break;
				case "vendors":
						return $this->onTransaction($postData, 'vendors', 'vendor_id');
				break;
				default:
					return false;
		}
	}
	public function onTransaction($postData, $table, $primary_field) {
		$this->db->trans_start();
		if(isset($postData->updateData) && count($postData->updateData) > 0) {
				$array = json_decode(json_encode($postData->updateData), true);
				$this->db->update_batch($table, $array, $primary_field); 
		}
		if(isset($postData->insertData) && count($postData->insertData) > 0) {
				$array = json_decode(json_encode($postData->insertData), true);
				$this->db->insert_batch($table, $array); 
		}
		if(isset($postData->deleteData) && count($postData->deleteData) > 0) {
				$array = json_decode(json_encode($postData->deleteData), true);
				$this->db->where_in($primary_field, $array);
				$this->db->delete($table);
		}
		$this->db->trans_complete();
		return ($this->db->trans_status() === FALSE) ? FALSE : TRUE;
  }

}
<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class account_planner_model extends CI_Model
{
	public function __construct(){
		parent::__construct();
		$this->db = $this->load->database('default', TRUE);  
	}
	public function vendor_list()
	{
		$query = $this->db->select(array("vendor_id as id", "vendor_name as value"))->order_by("vendor_name")->get('vendors');
		return get_all_rows($query);
	}
	public function inc_exp_list()
	{
		$query = $this->db->select(array("inc_exp_cat_id as id", "inc_exp_cat_name as value"))->order_by("inc_exp_cat_name")->get('income_expense_category');
		return get_all_rows($query);
	}
	public function bank_list()
	{
		$query = $this->db->select(array("bank_id as id", "bank_name as value"))->order_by("bank_name")->get('banks');
		return get_all_rows($query);
	}
	public function credit_card_list()
	{
		$query = $this->db->select(array("credit_card_id as id", "credit_card_name as value"))->order_by("credit_card_name")->get('credit_cards');
		return get_all_rows($query);
	}
	public function year_list()
	{
		$query = $this->db->select(array("DISTINCT DATE_FORMAT(inc_exp_date, '%Y') as id", "DATE_FORMAT(inc_exp_date, '%Y') as value"), false)->order_by("id desc")->get('income_expense');
		return get_all_rows($query);
	}
	public function getIncExpChartData($where)
	{
		$where = 'inc_exp_date between "2021-01-01" and "2021-01-31"';
		$query = $this->db
					->select(array(
						'DATE_FORMAT(a.inc_exp_date, "%b-%Y") as dated', 
						'sum(a.inc_exp_amount) as total',
						'b.inc_exp_cat_name as category'
					))
					->from('income_expense as a')
					->join('income_expense_category as b', 'a.inc_exp_category = b.inc_exp_cat_id', 'left')
					->where($where)
					->group_by(array("dated", "category"))
					->order_by("DATE_FORMAT(a.inc_exp_date, '%Y-%m')", "desc")
					->get();
		return get_all_rows($query);
	}

	function getAccountPlanner($post) {
		$Table = $post["Table"];
		$where = 'inc_exp_date between "2021-01-01" and "2021-01-31"';
		$this->db->select($post["TableRows"]);
		switch ($Table) {
				case "banks":
						$query = $this->db->order_by("bank_name","asc")->get('banks');
				break;
				case "income_expense_category":
						$query = $this->db->order_by("inc_exp_cat_name","asc")->get('income_expense_category');
				break;
				case "credit_cards":
						$query = $this->db->order_by("credit_card_name","asc")->get('credit_cards');
				break;
				case "vendors":
						$query = $this->db->order_by("vendor_name","asc")->get('vendors');
				break;
				case "income_expense":
						$query = $this->db->where($where)->order_by("inc_exp_date","asc")->get('income_expense');
				break;
				case "credit_card_transactions":
						$query = $this->db->order_by("cc_date","asc")->get('credit_card_transactions');
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
				case "income_expense_category":
						return $this->onTransaction($postData, 'income_expense_category', 'inc_exp_cat_id');
				break;
				case "credit_cards":
						return $this->onTransaction($postData, 'credit_cards', 'credit_card_id');
				break;
				case "vendors":
						return $this->onTransaction($postData, 'vendors', 'vendor_id');
				break;
				case "income_expense":
						return $this->onTransaction($postData, 'income_expense', 'inc_exp_id');
				break;
				case "credit_card_transactions":
						return $this->onTransaction($postData, 'credit_card_transactions', 'cc_id');
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
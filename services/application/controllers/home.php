<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class home extends CI_Controller {
	public function __construct()
    {
        parent::__construct();
    }
	public function index()
	{
		$this->benchmark->mark('code_start');
		$data["response"] = array("heading" => "Bharani Palani", "subHeading" => "Full Stack Devops");
		$es = $this->benchmark->elapsed_time('code_start', 'code_end');
		$pass = ["elapsedTime" => $es];
		$this->benchmark->mark('code_end');
		echo json($data, $pass);
	}
}

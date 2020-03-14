<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');
class home_model extends CI_Model
{
    public function __construct()
    {
        $this->db = $this->load->database('default', TRUE);
    }
    public function get_home()
    {
        $query = $this->db->select(
            array(
                "user_name",
                "display_name",
                "profile_name",
                "user_mail",
                "user_mobile",
                "last_login"
            )
        )->from("login")->get();
        return get_all_rows($query);
    }
    public function validateUser($post)
    {
        $query = $this->db->get_where('login', array("user_name" => $post['username'], 'password' => md5($post['password'])));
        return array("isValidUser" => $query->num_rows > 0);
    }
}

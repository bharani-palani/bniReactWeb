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
    public function get_images(){
        $this->db->from('about_images');
        $this->db->order_by("image_order", "asc");
        $query = $this->db->get(); 
        return get_all_rows($query);
    }

    public function validateUser($post)
    {
        $query = $this->db->get_where('login', array("user_name" => $post['username'], 'password' => md5($post['password'])));
        if($query->num_rows > 0) {
            return array("status" => "Valid user");
        } else {
            return array("status" => "Invalid user or password");
        }
    }
    public function changePassword($post)
    {
        $query = $this->db->get_where('login', array("user_name" => "bharani", 'password' => md5($post['currentPass'])));
        if($query->num_rows > 0) {
            $this->db->where('user_name', 'bharani');
            $this->db->update("login", array("password" => md5($post['newPass'])));
            if($this->db->affected_rows() > 0) {
                return array("status" => "Password successfully changed");
            } else {
                return array("status" => "Password change failed");
            }
        } else {
            return array("status" => "User not found");
        }
    }
}

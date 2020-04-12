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
            foreach ($query->result() as $row)
            {
                $current_login = $row->current_login;
            }
            $data = array(
                'last_login' => $current_login,
                'current_login' => date('Y-m-d H:i:s')
             );
 
            $this->db->where('user_id', 1);
            $this->db->update('login', $data); 
            
            return array("status" => "Valid user", "lastLogin" => $current_login);
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
    function getBackend($post) {
        $Table = $post["Table"];
        $this->db->select($post["TableRows"]);
        switch ($Table) {
            case "about_images":
                $query = $this->db->order_by("image_order","asc")->get('about_images');
            break;
            case "awards":
                $query = $this->db->order_by("award_sort","asc")->get('awards');
            break;
            case "contacts":
                $query = $this->db->order_by("contact_sort","asc")->get('contacts');
            break;
            case "ide":
                $query = $this->db->order_by("ide_sort","asc")->get('ide');
            break;
            case "login":
                $query = $this->db->get('login');
            break;
            case "operating_system":
                $query = $this->db->order_by("os_sort","asc")->get('operating_system');
            break;
            case "projects":
                $query = $this->db->order_by("project_sort","asc")->get('projects');
            break;
            case "public_comments":
                $query = $this->db->limit(10)->order_by("comment_time","desc")->get('public_comments');
            break;
            case "skills":
                $query = $this->db->order_by("skill_sort","asc")->get('skills');
            break;
            case "technologies":
                $query = $this->db->order_by("tech_sort","asc")->get('technologies');
            break;
            default:
                return false;
        }
        return get_all_rows($query);
    }
    public function postBackend($post) {
        // print_r($post['postData']);
        $postData = json_decode($post['postData']);
        $Table = $postData->Table;
        switch ($Table) {
            case "login":
                return $this->onTransaction($postData, 'login', 'user_id');
            break;
            case "awards":
                return $this->onTransaction($postData, 'awards', 'award_id');
            break;
            case "technologies":
                return $this->onTransaction($postData, 'technologies', 'tech_id');
            break;
            case "projects":
                return $this->onTransaction($postData, 'projects', 'project_id');
            break;
            case "skills":
                return $this->onTransaction($postData, 'skills', 'skill_id');
            break;
            case "contacts":
                return $this->onTransaction($postData, 'contacts', 'contact_id');
            break;
            case "about_images":
                return $this->onTransaction($postData, 'about_images', 'image_id');
            break;
            case "ide":
                return $this->onTransaction($postData, 'ide', 'ide_id');
            break;
            case "operating_system":
                return $this->onTransaction($postData, 'operating_system', 'os_id');
            break;
            case "public_comments":
                return $this->onTransaction($postData, 'public_comments', 'comment_id');
            break;
            default:
                return false;
        }
    }
    public function onTransaction($postData, $table, $primary_field) {
        $this->db->trans_start();
        if(count($postData->updateData) > 0) {
            $array = json_decode(json_encode($postData->updateData), true);
            $this->db->update_batch($table, $array, $primary_field); 
        }
        if(count($postData->insertData) > 0) {
            $array = json_decode(json_encode($postData->insertData), true);
            $this->db->insert_batch($table, $array); 
        }
        if(count($postData->deleteData) > 0) {
            $array = json_decode(json_encode($postData->deleteData), true);
            $this->db->where_in($primary_field, $array);
            $this->db->delete($table);
        }
        $this->db->trans_complete();
        return ($this->db->trans_status() === FALSE) ? FALSE : TRUE;
}

}

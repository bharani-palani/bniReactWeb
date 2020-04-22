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
            return array("status" => "Invalid User");
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
            case "resume_01_header":
                $query = $this->db->get('resume_01_header');
            break;
            case "resume_02_career_objective":
                $query = $this->db->get('resume_02_career_objective');
            break;
            case "resume_03_work_summary":
                $query = $this->db->order_by("work_sort","asc")->get('resume_03_work_summary');
            break;
            case "resume_04_pro_highlights":
                $query = $this->db->order_by("pro_sort","asc")->get('resume_04_pro_highlights');
            break;
            case "resume_05_tech_skills":
                $query = $this->db->order_by("tech_sort","asc")->get('resume_05_tech_skills');
            break;
            case "resume_06_project_experience":
                $query = $this->db->order_by("project_sort_order","asc")->get('resume_06_project_experience');
            break;
            case "resume_07_roles_and_responsibilities":
                $this->db->simple_query('SET SESSION group_concat_max_len=15000');
                $query = $this->db->order_by("project_id","asc")->get('resume_07_roles_and_responsibilities');
            break;
            case "resume_08_education":
                $query = $this->db->order_by("edu_graduation_sort","asc")->get('resume_08_education');
            break;
            case "resume_09_activities":
                $query = $this->db->order_by("activity_order","asc")->get('resume_09_activities');
            break;
            case "resume_10_personal_info":
                $query = $this->db->order_by("info_order","asc")->get('resume_10_personal_info');
            break;
            case "resume_11_footer":
                $query = $this->db->order_by("footer_signature_name","asc")->get('resume_11_footer');
            break;
            default:
                return false;
        }
        return get_all_rows($query);
    }
    public function postBackend($post) {
        // var_dump(CI_VERSION);
        // print_r($post);
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
            case "resume_01_header":
                return $this->onTransaction($postData, 'resume_01_header', 'header_id');
            break;
            case "resume_02_career_objective":
                return $this->onTransaction($postData, 'resume_02_career_objective', 'career_id');
            break;
            case "resume_03_work_summary":
                return $this->onTransaction($postData, 'resume_03_work_summary', 'work_id');
            break;
            case "resume_04_pro_highlights":
                return $this->onTransaction($postData, 'resume_04_pro_highlights', 'pro_id');
            break;
            case "resume_05_tech_skills":
                return $this->onTransaction($postData, 'resume_05_tech_skills', 'tech_skill_id');
            break;
            case "resume_06_project_experience":
                return $this->onTransaction($postData, 'resume_06_project_experience', 'project_id');
            break;
            case "resume_07_roles_and_responsibilities":
                return $this->onTransaction($postData, 'resume_07_roles_and_responsibilities', 'role_id');
            break;
            case "resume_08_education":
                return $this->onTransaction($postData, 'resume_08_education', 'edu_id');
            break;
            case "resume_09_activities":
                return $this->onTransaction($postData, 'resume_09_activities', 'activity_id');
            break;
            case "resume_10_personal_info":
                return $this->onTransaction($postData, 'resume_10_personal_info', 'info_id');
            break;
            case "resume_11_footer":
                return $this->onTransaction($postData, 'resume_11_footer', 'footer_id');
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

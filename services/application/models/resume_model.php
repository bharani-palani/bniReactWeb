<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');
class resume_model extends CI_Model
{
    public function __construct()
    {
        $this->db = $this->load->database('default', TRUE);
    }
    public function get_header()
    {
        $query = $this->db->get('resume_01_header');
        return get_all_rows($query);
    }
    public function getCareerObjective() {
        $query = $this->db->get('resume_02_career_objective');
        return get_all_rows($query);
    }    
    public function getCareerExpYears() {
        $query = $this->db->select("TIMESTAMPDIFF(MONTH,min(work_start_date),CURDATE()) / 12 as totalMonths")->from('resume_03_work_summary')->get();
        $result = get_all_rows($query);
        return $result[0]['totalMonths'];
    }
    public function workSummary() {
        $query = $this->db->order_by("work_sort", "desc")->get('resume_03_work_summary');
        return get_all_rows($query);
    }
    public function proHighLights() {
        $query = $this->db->order_by("pro_sort", "asc")->get('resume_04_pro_highlights');
        return get_all_rows($query);
    }
    public function techSkills() {
        $query = $this->db->order_by("tech_sort", "asc")->get('resume_05_tech_skills');
        return get_all_rows($query);
    }
    public function projectExperience() {
        $this->db->select(
            'c.work_company, 
            concat(a.project_duration_months, " months") as working_duration, 
            a.project_role,
            a.project_id, a.project_name, 
            a.project_role, a.project_introduction, 
            GROUP_CONCAT(b.role_label SEPARATOR "<---->") as role_label', 
            FALSE
        );
        $this->db->from('resume_06_project_experience as a');
        $this->db->join('resume_07_roles_and_responsibilities as b', 'a.project_id = b.project_id','left');
        $this->db->join('resume_03_work_summary as c', 'a.project_company_id = c.work_id', 'left');
        $this->db->group_by('a.project_id');
        $query = $this->db->get();
        return get_all_rows($query);
    }
    public function education() {
        $query = $this->db->order_by("edu_graduation_sort", "asc")->get('resume_08_education');
        return get_all_rows($query);
    }

    public function extraAct() {
        $query = $this->db->order_by("activity_order", "asc")->get('resume_09_activities');
        return get_all_rows($query);
    }
    public function personalInfo() {
        $query = $this->db->order_by("info_order", "asc")->get('resume_10_personal_info');
        return get_all_rows($query);
    }
    public function footer() {
        $query = $this->db->get('resume_11_footer');
        return get_all_rows($query);
    }
    public function getCompanyList() {
        $query = $this->db->select(array('work_id as id', 'work_company as value'))->get('resume_03_work_summary');
        return get_all_rows($query);
    }
    public function getProjectList() {
        $query = $this->db->select(array('project_id as id', 'project_name as value'))->get('resume_06_project_experience');
        return get_all_rows($query);
    }
    
}       

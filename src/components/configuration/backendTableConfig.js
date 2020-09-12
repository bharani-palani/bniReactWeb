const configArray = [
  {
    id: 1,
    label: "Awards",
    Table: "awards",
    TableRows: ["award_id", "award_label", "award_value", "award_sort"],
    rowElements: ["checkbox", "textbox", "textarea", "number"]
  },
  {
    id: 2,
    label: "Technolgies",
    Table: "technologies",
    TableRows: [
      "tech_id",
      "tech_label",
      "tech_value",
      "tech_image_url",
      "tech_sort"
    ],
    rowElements: ["checkbox", "textbox", "textarea", "textbox", "number"]
  },
  {
    id: 3,
    label: "Projects",
    Table: "projects",
    TableRows: ["project_id", "project_label", "project_value", "project_sort"],
    rowElements: ["checkbox", "textbox", "textarea", "number"]
  },
  {
    id: 4,
    label: "Skills",
    Table: "skills",
    TableRows: [
      "skill_id",
      "skill_label",
      "skill_value",
      "skill_image_url",
      "skill_sort"
    ],
    rowElements: ["checkbox", "textbox", "textarea", "textbox", "number"]
  },
  {
    id: 5,
    label: "About",
    Table: "login",
    TableRows: [
      "user_id",
      "display_name",
      "profile_name",
      "user_mail",
      "user_mobile",
      "latitude",
      "longitude",
      "google_api_key",
      "google_auth_token",
      "google_id"
    ],
    rowElements: [
      "checkbox",
      "textbox",
      "textbox",
      "textbox",
      "number",
      "number",
      "number",
      "textarea",
      "textarea",
      "textbox"
    ]
  },
  {
    id: 6,
    label: "Contact",
    Table: "contacts",
    TableRows: [
      "contact_id",
      "contact_label",
      "contact_value",
      "contact_href",
      "contact_sort"
    ],
    rowElements: ["checkbox", "textbox", "textbox", "textbox", "number"]
  },
  {
    id: 7,
    label: "About Images",
    Table: "about_images",
    TableRows: ["image_id", "image_url", "image_order"],
    rowElements: ["checkbox", "textbox", "number"]
  },
  {
    id: 8,
    label: "IDE",
    Table: "ide",
    TableRows: [
      "ide_id",
      "ide_label",
      "ide_value",
      "ide_image_url",
      "ide_sort"
    ],
    rowElements: ["checkbox", "textbox", "textarea", "textbox", "number"]
  },
  {
    id: 9,
    label: "Operating System",
    Table: "operating_system",
    TableRows: ["os_id", "os_label", "os_value", "os_image_url", "os_sort"],
    rowElements: ["checkbox", "textbox", "textarea", "textbox", "number"]
  },
  {
    id: 10,
    label: "Public comments",
    Table: "public_comments",
    TableRows: [
      "comment_id",
      "comment_name",
      "comment_mobile",
      "comment_description",
      "comment_email",
      "comment_ip",
      "latitude",
      "longitude"
    ],
    rowElements: [
      "checkbox",
      "textbox",
      "textbox",
      "textarea",
      "textbox",
      "textbox",
      "number",
      "number"
    ]
  }
];

const resumeArray = [
  {
    id: 11,
    label: "Header",
    Table: "resume_01_header",
    TableRows: [
      "header_id",
      "header_name",
      "header_mobile",
      "header_email",
      "header_address",
      "header_web",
      "config_arrow_font"
    ],
    rowElements: [
      "checkbox",
      "textbox",
      "textbox",
      "textbox",
      "textarea",
      "textbox",
      "textbox"
    ]
  },
  {
    id: 12,
    label: "Career Objective",
    Table: "resume_02_career_objective",
    TableRows: ["career_id", "career_title", "career_description"],
    rowElements: ["checkbox", "textbox", "textarea"]
  },
  {
    id: 13,
    label: "Work summary",
    Table: "resume_03_work_summary",
    TableRows: [
      "work_id",
      "work_company",
      "work_country",
      "work_start_date",
      "work_end_date",
      "work_sort"
    ],
    rowElements: ["checkbox", "textbox", "textbox", "date", "date", "number"]
  },
  {
    id: 14,
    label: "Profesional Highlights",
    Table: "resume_04_pro_highlights",
    TableRows: ["pro_id", "pro_text", "pro_sort"],
    rowElements: ["checkbox", "textbox", "number"]
  },
  {
    id: 15,
    label: "Technical Skills",
    Table: "resume_05_tech_skills",
    TableRows: ["tech_skill_id", "tech_skill_label", "tech_sort"],
    rowElements: ["checkbox", "textbox", "number"]
  },
  {
    id: 16,
    label: "Project Experience",
    Table: "resume_06_project_experience",
    TableRows: [
      "project_id",
      "project_name",
      "project_role",
      "project_introduction",
      "project_company_id",
      "project_duration_months",
      "project_sort_order"
    ],
    rowElements: [
      "checkbox",
      "textbox",
      "textbox",
      "textarea",
      {
        dropDownFetch: {
          apiUrl: "/resume/getCompanyList",
          table: "resume_03_work_summary",
          fetch: ["work_id", "work_company"]
        }
      },
      "number",
      "number"
    ]
  },
  {
    id: 17,
    label: "Roles & responsibilities",
    Table: "resume_07_roles_and_responsibilities",
    TableRows: ["role_id", "role_label", "project_id", "role_order"],
    rowElements: [
      "checkbox",
      "textbox",
      {
        dropDownFetch: {
          apiUrl: "/resume/getProjectList",
          table: "resume_06_project_experience",
          fetch: ["work_id", "work_company"]
        }
      },
      "number"
    ]
  },
  {
    id: 18,
    label: "Education",
    Table: "resume_08_education",
    TableRows: [
      "edu_id",
      "edu_graduation_acronym",
      "edu_graduation_abbreviation",
      "edu_graduation_institution",
      "edu_graduation_year",
      "edu_graduation_percent",
      "edu_graduation_sort"
    ],
    rowElements: [
      "checkbox",
      "textbox",
      "textbox",
      "textbox",
      "textbox",
      "textbox",
      "number"
    ]
  },
  {
    id: 19,
    label: "Extracurricular activities",
    Table: "resume_09_activities",
    TableRows: ["activity_id", "activity_name", "activity_order"],
    rowElements: ["checkbox", "textbox", "number"]
  },
  {
    id: 20,
    label: "Personal information",
    Table: "resume_10_personal_info",
    TableRows: ["info_id", "info_key", "info_value", "info_order"],
    rowElements: ["checkbox", "textbox", "textbox", "number"]
  },
  {
    id: 21,
    label: "Footer",
    Table: "resume_11_footer",
    TableRows: [
      "footer_id",
      "footer_text",
      "footer_place",
      "footer_signature_name"
    ],
    rowElements: ["checkbox", "textbox", "textbox", "textbox"]
  }
];

export { configArray, resumeArray };

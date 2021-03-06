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
      "google_map_api_key",
      "google_login_auth_token",
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
        fetch: {
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
        fetch: {
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

const crudFormArray = [
  {
    id: 22,
    Table: "banks",
    label: "Bank accounts",
    TableRows: [
      "bank_id",
      "bank_name",
      "bank_account_number",
      "bank_ifsc_code",
      "bank_card_no",
      "bank_card_validity"
    ],
    rowElements: [
      "checkbox",
      "textbox",
      "textbox",
      "textbox",
      "textbox",
      "textbox"
    ]
  },
  {
    id: 23,
    Table: "credit_cards",
    label: "Credit cards",
    TableRows: [
      "credit_card_id",
      "credit_card_name",
      "credit_card_number",
      "credit_card_start_date",
      "credit_card_end_date",
      "credit_card_payment_date"
    ],
    rowElements: [
      "checkbox",
      "textbox",
      "textbox",
      "number",
      "number",
      "number"
    ]
  },
  {
    id: 24,
    Table: "vendors",
    label: "Vendors",
    TableRows: ["vendor_id", "vendor_name", "vendor_limit"],
    rowElements: ["checkbox", "textbox", "number"]
  },
  {
    id: 25,
    Table: "income_expense_category",
    label: "Income / expense categories",
    TableRows: ["inc_exp_cat_id", "inc_exp_cat_name", "inc_exp_cat_vendor"],
    rowElements: [
      "checkbox",
      "textbox",
      {
        fetch: {
          apiUrl: "/account_planner/vendor_list",
          table: "vendors",
          fetch: ["vendor_id", "vendor_name"]
        }
      }
    ]
  },
  {
    id: "24A",
    Table: "income_expense_template",
    label: "Income expense template",
    TableRows: [
      "template_id",
      "temp_inc_exp_name",
      "temp_amount",
      "temp_inc_exp_type"
    ],
    rowElements: [
      "checkbox",
      "textbox",
      "number",
      {
        radio: {
          radioList: [
            { label: "Cr", value: "Cr", checked: false },
            { label: "Dr", value: "Dr", checked: true }
          ]
        }
      }
    ]
  }
];

const monthExpenditureConfig = [
  {
    id: 26,
    Table: "income_expense",
    label: "Expenditures for selected month",
    TableRows: [
      "inc_exp_id",
      "inc_exp_name",
      "inc_exp_amount",
      "inc_exp_plan_amount",
      "inc_exp_type",
      "inc_exp_date",
      "inc_exp_category",
      "inc_exp_bank",
      "inc_exp_comments"
    ],
    showTotal: [
      {
        whichKey: "inc_exp_amount",
        forKey: "inc_exp_type",
        forCondition: "equals",
        forValue: ["Cr", "Dr"]
      }, //forCondition: includes or equals
      "inc_exp_plan_amount"
    ],
    rowKeyUp: "",
    rowElements: [
      "checkbox",
      "textbox",
      "number",
      "number",
      {
        radio: {
          radioList: [
            { label: "Cr", value: "Cr", checked: false },
            { label: "Dr", value: "Dr", checked: true }
          ]
        }
      },
      "date",
      {
        fetch: {
          apiUrl: "/account_planner/inc_exp_list",
          table: "income_expense_category",
          fetch: ["inc_exp_cat_id", "inc_exp_cat_name"]
        }
      },
      {
        fetch: {
          apiUrl: "/account_planner/bank_list",
          table: "banks",
          fetch: ["bank_id", "bank_name"]
        }
      },
      "textbox"
    ],
    showTooltipFor: ["textbox"]
  }
];

const creditCardConfig = [
  {
    id: 27,
    Table: "credit_card_transactions",
    label: "Credit card transactions",
    TableRows: [
      "cc_id",
      "cc_transaction",
      "cc_date",
      "cc_opening_balance",
      "cc_payment_credits",
      "cc_purchases",
      "cc_taxes_interest",
      "cc_expected_balance",
      "cc_for_card",
      "cc_comments"
    ],
    showTotal: [
      "cc_opening_balance",
      "cc_payment_credits",
      "cc_purchases",
      "cc_taxes_interest",
      "cc_expected_balance"
    ],
    rowKeyUp:
      "cc_expected_balance=((Number(row.cc_opening_balance) - Number(row.cc_payment_credits)) + (Number(row.cc_purchases) + Number(row.cc_taxes_interest))).toFixed(2)",
    rowElements: [
      "checkbox",
      "textbox",
      "date",
      "number",
      "number",
      "number",
      "number",
      "label",
      {
        fetch: {
          apiUrl: "/account_planner/credit_card_list",
          table: "credit_cards",
          fetch: ["credit_card_id", "credit_card_name"]
        }
      },
      "textbox"
    ],
    showTooltipFor: ["textbox"]
  }
];

export {
  configArray,
  resumeArray,
  crudFormArray,
  monthExpenditureConfig,
  creditCardConfig
};

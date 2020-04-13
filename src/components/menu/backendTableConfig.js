const configArray = [
    {
        id:1,
        label: "Awards",
        Table: "awards",
        TableRows: ["award_id", "award_label", "award_value", "award_sort"],
        rowElements: ["checkbox", "textbox", "textarea", "number"]
    },
    {
        id:2,
        label: "Technolgies",
        Table: "technologies",
        TableRows: ["tech_id", "tech_label", "tech_value", "tech_image_url", "tech_sort"],
        rowElements: ["checkbox", "textbox", "textarea", "textbox", "number"]
    },
    {
        id:3,
        label: "Projects",
        Table: "projects",
        TableRows: ["project_id", "project_label", "project_value", "project_sort"],
        rowElements: ["checkbox", "textbox", "textarea", "number"]
    },
    {
        id:4,
        label: "Skills",
        Table: "skills",
        TableRows: ["skill_id", "skill_label", "skill_value", "skill_image_url", "skill_sort"],
        rowElements: ["checkbox", "textbox", "textarea", "textbox", "number"]
    },
    {
        id:5,
        label: "About",
        Table: "login",
        TableRows: ["user_id","display_name","profile_name","user_mail","user_mobile"], 
        rowElements: ["checkbox", "textbox", "textbox", "textbox", "number"]
    },
    {
        id:6,
        label: "Contact",
        Table: "contacts",
        TableRows: ["contact_id","contact_label","contact_value","contact_href","contact_sort"], 
        rowElements: ["checkbox", "textbox", "textbox", "textbox", "number"]
    },
    {
        id:7,
        label: "About Images",
        Table: "about_images",
        TableRows: ["image_id","image_url","image_order"], 
        rowElements: ["checkbox", "textbox", "number"]
    },
    {
        id:8,
        label: "IDE",
        Table: "ide",
        TableRows: ["ide_id", "ide_label", "ide_value", "ide_image_url", "ide_sort"], 
        rowElements: ["checkbox", "textbox", "textarea", "textbox", "number"]
    },
    {
        id:9,
        label: "Operating System",
        Table: "operating_system",
        TableRows: ["os_id", "os_label", "os_value", "os_image_url", "os_sort"], 
        rowElements: ["checkbox", "textbox", "textarea", "textbox", "number"]
    },
    // {
    //     id:10,
    //     label: "Public comments",
    //     Table: "public_comments",
    //     TableRows: ["comment_id","comment_name","comment_mobile","comment_description","comment_email", "comment_ip", "latitude", "longitude"], 
    //     rowElements: ["checkbox", "textbox", "textbox", "textarea","textbox", "textbox", "number", "number"]
    // },
];

export default configArray;
const menus = [
    {
      href: "/about",
      showOnlyIfSuperUser: false,
      label: "About"
    },
    {
      href: "/technologies",
      showOnlyIfSuperUser: false,
      label: "Technolgies"
    },
    {
      href: "/projects",
      showOnlyIfSuperUser: false,
      label: "Projects"
    },
    {
      href: "/skills",
      showOnlyIfSuperUser: false,
      label: "Skills"
    },
    {
      href: "/awards",
      showOnlyIfSuperUser: false,
      label: "Awards"
    },
    {
      href: "/contact",
      showOnlyIfSuperUser: false,
      label: "Contact"
    },
    {
      href: "/resume",
      showOnlyIfSuperUser: false,
      label: "Resume"
    },
    {
      href: "/utilities",
      showOnlyIfSuperUser: true,
      label: "JS Utilities"
    },
    {
      href: "/write",
      label: "Write",
      showOnlyIfSuperUser: false,
    },
    {
      href: "/accountPlanner",
      label: "Account Planner",
      showOnlyIfSuperUser: true
    }
  ].sort((a,b) => a.label > b.label);

  const socialMedias = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/bharani.palani",
      icon: "fa fa-facebook"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bharani-palani-4860b2b3/",
      icon: "fa fa-linkedin"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/barani_sug",
      icon: "fa fa-twitter"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bharani.palani/",
      icon: "fa fa-instagram"
    }
  ];

  export {menus, socialMedias};
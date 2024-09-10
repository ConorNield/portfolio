import React from "react";
import {FaLinkedinIn} from "react-icons/fa";

import { AiFillHome} from "react-icons/ai";

import { FaDatabase } from "react-icons/fa";

import { FaPencilRuler } from "react-icons/fa";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      path: "/portfolio",
      icon: <AiFillHome size={30} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      path: "/blogs",
      icon: <FaPencilRuler size={30} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Skills",
      path: "/skills",
      icon: <FaDatabase size={30} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Linkedin",
      path: "https://www.linkedin.com/in/conor-nield-b07221223/",
      icon: <FaLinkedinIn size={30}/>,
      className: "nav-text",
    },
  ],
};

export default menuConfig;

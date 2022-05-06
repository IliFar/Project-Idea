import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs"

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <AiIcons.AiFillDashboard />,
        cName: "nav-text"
    },
    {
        title: "Personal Info",
        path: "/personal",
        icon: <BsIcons.BsFillPersonFill />,
        cName: "nav-text"
    },
    {
        title: "Statistics",
        path: "/statistics",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Recipes",
        path: "/recipes",
        icon: <IoIcons.IoIosNutrition />,
        cName: "nav-text"
    },
]
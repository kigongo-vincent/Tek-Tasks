import React from "react";
import { NavLink, Theme } from "../types";
import { useSelector } from "react-redux";
import { getSideBarStyles, getTheme } from "../model/data";
import { useLocation, useNavigate } from "react-router-dom";

// icons 
import {Fa42Group, FaUsers, FaBriefcase} from "react-icons/fa6"
import { IoMdSettings } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { PiShareNetworkFill } from "react-icons/pi";

// components
import Text from "./Text";
import { FaLock, FaUser } from "react-icons/fa";

const SidebarLink = (props: NavLink) => {
  const theme: Theme = useSelector(getTheme);
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const sidebarStyles = useSelector(getSideBarStyles)

  return (
    <div
      role="button"
      onClick={()=>navigate(props?.link)}
      className="d-flex align-items-center px-4 py-3 rounded-lg"
      style={{
        background: pathname == props?.link ? theme?.text : "",
        width: "80%"
      }}
    >
      {
        props?.label == "Company"
        ?
        <FaUsers size={17} style={{minWidth: 17}} color={pathname == props?.link ? "aliceblue" : theme?.text}/>
        :
        props?.label == "Departments"
        ?
        <PiShareNetworkFill color={pathname == props?.link ? "aliceblue" : theme?.text} size={17} style={{minWidth: 17}}/>
        :
        props?.label == "All Members"
        ?
        <HiUserGroup color={pathname == props?.link ? "aliceblue" : theme?.text} size={17} style={{minWidth: 17}}/>
        :
        props?.label == "Settings"
        ?
        <IoMdSettings color={pathname == props?.link ? "aliceblue" : theme?.text} size={17} style={{minWidth: 17}}/>
        :
        props?.label == "Projects"
        ?
        <FaBriefcase color={pathname == props?.link ? "aliceblue" : theme?.text} size={17} style={{minWidth: 17}}/>
        :
        props?.label == "Profile"
        ?
        <FaUser color={pathname == props?.link ? "aliceblue" : theme?.text} size={17} style={{minWidth: 17}}/>
        :
        props?.label == "Change Password"
        ?
        <FaLock color={pathname == props?.link ? "aliceblue" : theme?.text} size={17} style={{minWidth: 17}}/>
        :  
        ""
      }
      {
        <div className="mx-2"/>
      }
      {
        sidebarStyles == "w-25 px-5"
        &&
        <Text value={props?.label} color={pathname == props?.link ? "light" : "text"}/>
      }
    </div>
  );
};

export default SidebarLink;

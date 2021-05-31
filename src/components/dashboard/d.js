import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./dashboard.css";


import { FaRegLaughWink } from "react-icons/fa";




const Dashboard = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header" >
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse} >
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <div>{menuCollapse ? <FaRegLaughWink/> : <div><FaRegLaughWink /> داشبورد 2</div> }</div>
            </div>
          
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                داشبورد
              </MenuItem>
              <MenuItem icon={<FaList />}>اپلیکیشن</MenuItem>
              <MenuItem icon={<FaRegHeart />}>مدیریت</MenuItem>
              <MenuItem icon={<RiPencilLine />}>گزارشات</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarContent>
          <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarContent>
      
        </ProSidebar>
      </div>
    </>
  );
};

export default Dashboard;
import React, { useState } from 'react'

import { Theme } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import { getSideBarStyles, getTheme, setSideBarStyles } from '../model/data'

// icons 
import {FaBell, FaList} from "react-icons/fa"
import { MdOutlineClose } from "react-icons/md";
import { RiMenuFoldFill, RiMenuUnfoldLine } from "react-icons/ri";

// =======================components ==================================
import Text from "./Text"
import Search from "./Search"
import Badge from "./Badge"
// =======================end components ==================================

const Navbar = () => {

  const theme:Theme = useSelector(getTheme)
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  const sideBarStyles = useSelector(getSideBarStyles)

  return (
    <div style={{height: "13%"}} className={`${sideBarStyles == "w-25 px-5" ? "px-5" : "px-3"} py-3 d-flex align-items-center justify-content-between`}>
      
      {/* logo  */}
      <div className="w-mc"><Text size='moderate' value={"Tek Tasks"} weight='bold' style='heading'/></div>

      <div className={`${sideBarStyles == "w-25 px-5" ? "w-75": "flex-1 mx-3"} d-flex align-items-center justify-content-between`}>

      {/* menu icon  */}
      {
        sideBarStyles == "w-25 px-5"
        ?
        <RiMenuFoldFill size={20} color={theme?.text} role='button' onClick={()=>dispatch(setSideBarStyles(sideBarStyles == "w-25 px-5" ? "px-2 w-mc" : "w-25 px-5"))}/>
        :
        <RiMenuUnfoldLine size={24} color={theme?.text} role='button' onClick={()=>dispatch(setSideBarStyles("w-25 px-5"))}/>
      }

      {/* dashboard  */}
      <Text value={"Dashboard"} weight='medium' size='moderate' style='heading'/>

      {/* search  */}
      <Search placeholder='Search for everything' value={query} setter={setQuery}/>

      {/* notifications */}
      <Badge icon={<FaBell size={20} color={theme?.text}/>} count={3}/>

      </div>

    </div>
  )
}

export default Navbar

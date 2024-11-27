import React, { useState } from 'react'
import {FaPeopleArrows} from "react-icons/fa"
import {getRoutes} from "../utils/routes"
import SidebarLink from './SidebarLink'
import { useSelector } from 'react-redux'
import { getSideBarStyles } from '../model/data'

const Sidebar = () => {

  const routes = getRoutes("company_admin")
  const styles = useSelector(getSideBarStyles)

  return (
    <div className={styles}>
      {
        routes?.map((route, index)=> <SidebarLink key={index} label={route?.label} link={route?.link} icon={route?.icon}/>)
      }
    </div>
  )
}

export default Sidebar

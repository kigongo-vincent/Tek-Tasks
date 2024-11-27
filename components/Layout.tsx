import React from 'react'


// =======================components ==================================
import Container from './Container'
import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import { Theme } from '../types'
import { useSelector } from 'react-redux'
import { getTheme } from '../model/data'
// =======================end components ==================================

export interface Props{
    children: any
}

const Layout = (props: Props) => {

  const theme:Theme = useSelector(getTheme)

  return (
    <Container color='paper' fullPage>
      
      {/* navbar  */}
      <Navbar/>

      {/* main content  */}
      <div style={{height: "87%"}} className='d-flex align-items-stretch'>

        {/* sidebar  */}
        <Sidebar/>

        {/* body  */}
        <main className='p-4 ' style={{background: theme?.pale, borderTopLeftRadius: 50, flex: 1}}>
          {props?.children}
        </main>

      </div>

    </Container>
  )
}

export default Layout

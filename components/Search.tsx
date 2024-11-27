import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Theme } from '../types'
import { useSelector } from 'react-redux'
import { getTheme } from '../model/data'

export interface Props{
  value: string 
  setter: (data: string)=>void
  placeholder: string
}

const Search = (props: Props) => {

  const theme:Theme = useSelector(getTheme)

  return (
    <div style={{
      background: theme?.pale,
      borderRadius: 10
    }} className='d-flex shadow-sm search align-items-center justify-content-between'>
    <input 
    value={props?.value}
    onChange={(e)=>props?.setter(e.target.value)}
    type="text" className='w-100' placeholder={props?.placeholder}/>
    <div className="mx-2"/>
    <FaSearch size={20} color={theme?.placeholder}/>  
    </div>
  )
}

export default Search

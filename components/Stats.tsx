import React from 'react'
import { Stats, Theme } from '../types'

// =======================components ==================================
import Text from "../components/Text"
// =======================end components ==================================

import { useSelector } from 'react-redux'
import { getTheme } from '../model/data'

const Statistics = (props: Stats) => {

  const theme:Theme = useSelector(getTheme)

  return (
    <div className='d-flex align-items-center justify-content-center flex-column shadow-sm p-4 rounded-lg' style={{background: theme?.paper}}>
      <Text value={props?.label}/>
      <Text size='large' weight='medium' value={props?.count}/>
    </div>
  )
}

export default Statistics

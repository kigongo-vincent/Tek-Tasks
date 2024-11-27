import React, { useEffect, useState } from 'react'
import {Department, TextInput, Theme} from "../types"

// components 
import Text from "../components/Text"
import Input from "../components/Input"
import Button from "../components/Button"
import Switch from "../components/switch"


import { useSelector } from 'react-redux'
import { getTheme } from '../model/data'

const EditDepartment = (props: {department: Department | undefined}) => {

  const [name,setName] = useState<TextInput>()
  const theme:Theme = useSelector(getTheme)
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(()=>{

    setName({...name, value: props?.department?.name})

  }, [props])

  const onSubmit=()=>{
    setLoading(true)
  }

  return (
    <div>
      {/* department details  */}
      <Input value={name} label='Name of the department' setter={setName} type='text' mode='outline' placeholder='department name'/>
      

      {/* new admin assignment  */}
      <div style={{background: theme?.paper}} className="d-flex mt-3 align-items-center justify-content-between rounded shadow-sm p-4">
      <Text value={"Assign a new admin"}/>
      <Switch is_active={active} setActive={setActive}/>
      </div>


      <div className="mt-5"/>
      <div className="d-flex align-items-center justify-content-end">
      <Button action={onSubmit} title='cancel' mode='outline'/>
      <div className="mx-1"/>
      <Button action={onSubmit} title='Save changes' loading={loading} mode='fill'/>

      </div>
      
    </div>
  )
}

export default EditDepartment

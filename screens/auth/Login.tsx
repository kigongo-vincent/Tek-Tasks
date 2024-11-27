import React, { useEffect, useState } from 'react'

// =======================components ==================================
import Text from "../../components/Text"
import Input from "../../components/Input"
import Button from "../../components/Button"
// =======================end components ==================================

// =======================utils==================================
import {verifyPassword} from "../../utils/password_checker"
// =======================end utils==================================




import { TextInput } from '../../types'

const Login = () => {

  const [email,setEmail] = useState<TextInput>()
  const [pwd,setPwd] = useState<TextInput>()
  const [loading, setLoading] = useState(false)

  const onSubmit=(e)=>{
    e.preventDefault()

    // email validity 
    if(!email?.value?.toString()?.includes("@") || !email?.value?.toString()?.includes(".") || email?.value?.toString()?.length < 6){
      setEmail({...email, error: "Invalid email, please provide a valid email"})
      return
    }
    
    // password validity 
    const is_password_valid = verifyPassword(pwd?.value)
    if(!is_password_valid){
      setPwd({...pwd, error: "Invalid password, Password must contain atleast, a lowecase, uppercase, special character (symbol), number and must have more 7 characters"})
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    
  }

  return (
    <div className="d-lg-flex align-items-center justify-content-between login">

      {/* form  */}
      <form onSubmit={onSubmit}>

        {/* heading  */}
        <Text value={"Welcome to Tek Tasks"} size='large' weight='bold' style='heading'/> 
        <br />
        {/* subheading  */}
        <Text value={"For new members, please reach out to your "}/><Text underline value={"company manager"}/>
        <div className="mb-4"/>

      {/* email input  */}
      <Input onFocus={()=>setEmail({...email, error: ""})} helperText={"Please use company email"} setter={setEmail} placeholder='example@gmail.com' type='text' value={email} label='Email'/>

      {/* password input  */}
      <div className="mt-5"/>
      <Input onFocus={()=>setPwd({...pwd, error: ""})} helperText='Password must contain atleast, a lowecase, uppercase, special character (symbol), number and must have more 7 characters' setter={setPwd} placeholder='***************' type='password' value={pwd} label='Password'/>

      {/* submit btn  */}
      <div className="mt-2"/>
      <Button loading={loading} title='Sign in' mode='fill'/>


    </form>

    {/* image  */}
    <div className="bg-login-img"/>
      
    </div>
  )
}

export default Login

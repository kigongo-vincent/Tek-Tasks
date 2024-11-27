export interface State {
  user: User;
  theme: Theme;
  routes?: NavLink[]
  sideBarStyles: "w-25 px-5" | "w-mc px-3"
  alert: Alert | undefined
}

export interface User {
  user_id: number;
  role: string;
  first_name: string;
  last_name: string;
  email: string;
  contact: string;
  tokens: Tokens;
}

export interface Department{
  id: number 
  name: string 
  created_at: string 
}

export interface Stats{
  label: string 
  count: number
}

export interface Tokens {
  access: string;
  refresh: string;
}

export interface Theme {
  name: "light" | "dark"
  primary: string;
  secondary: string;
  placeholder: string;
  text: string;
  error: string;
  success: string;
  paper: string;
  pale: string;
}

export interface ThemeAction{
    payload: Theme
}

export interface StateData{
    data: State
}

export interface TextInput{
  value?: string | number
  error?: string | number
}

export interface Alert{
  title: string 
  body: string 
  buttons?: any[]
  mode: "success" | "error" |"normal" | ""
}

export interface NavLink{
  icon?: any 
  label: string 
  link: string
}

export interface AlertAction{
  payload: Alert
}

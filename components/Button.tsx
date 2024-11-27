// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../model/data";

// =======================components ==================================
import Text from "../components/Text"
// =======================end components ==================================

// =======================assets==================================
import Loader from "../assets/icons/loader.svg"
import LoaderDark from "../assets/icons/loader_dark.svg"
// =======================end assets==================================

export interface Props {
  title: string;
  leftIcon?: any;
  rightIcon?: any;
  mode: "fill" | "outline";
  color?: "primary" | "secondary" | "error" | "success" | "placeholder";
  size?: "small" | "medium" | "large";
  action?: ()=>void 
  loading?: boolean
}

const Button = (props: Props) => {

    const theme = useSelector(getTheme)

  return <button
  className={`${props?.mode != "outline" && "shadow"} rounded-edges`}
  style={{
    padding: "10px 20px",
    outline: "none",
    background: props?.mode == "outline" ? "none": theme?.primary,
    color: props?.mode == "outline" ? theme?.primary : "aliceblue",
    border: props?.mode == "outline" ? "1px solid " + theme?.primary : "none",
    fontFamily: "Inter 18pt 18pt",
    fontSize: "13.5px"
  }}
  onClick={props?.action}>{props?.loading ? <div className="d-flex align-items-center">
    <img src={props?.mode =="fill" ? Loader : LoaderDark} height={20}/>
    <div className="mx-1"/>
    <Text value={"please wait"} color={props?.mode == "outline" ? "primary" : "light"}/>
  </div> : props?.title}</button>;
};

export default Button;

import React from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../model/data";
import { Theme } from "../types";

export interface Props {
  color?: "pale" | "secondary" | "error" | "success" | "primary" | "paper";
  children: any;
  fullPage?: boolean,
  fullWidth?: boolean
  fullHeight?: boolean,
}

const Container = (props: Props) => {
  const theme: Theme = useSelector(getTheme);

  const getColor = (): string => {
    switch (props?.color) {
      case "primary":
        return theme?.primary;
      case "error":
        return theme?.error;
      case "paper":
        return theme?.paper;
      case "secondary":
        return theme?.secondary;
      case "success":
        return theme?.success;
      case "pale":
        return theme?.pale;
      default:
        return theme?.paper;
    }
  };

  return (
    <div
      style={{
        background: getColor(),
        width: props?.fullPage ? "100vw" : props?.fullWidth ? "100%" : "max-content", 
        height: props?.fullPage ? "100vh" : props?.fullHeight ? "100%" : "max-content", 
      }}
    >
      {props?.children}
    </div>
  );
};

export default Container;

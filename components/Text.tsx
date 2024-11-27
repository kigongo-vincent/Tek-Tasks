import React from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../model/data";
import { Theme } from "../types";

export interface Props {
  color?: "primary" | "secondary" | "error" | "success" | "placeholder" | "light" | "text";
  size?: "small" | "medium" | "large" | "moderate";
  style?: "heading" | "paragraph";
  weight?: "bold" | "medium";
  center?: boolean;
  end?: boolean;
  value?: string | number;
  underline?: boolean
}

const Text = (props: Props) => {
  const theme: Theme = useSelector(getTheme);

  const getSize = (): number => {
    switch (props?.size) {
      case "small":
        return 10;
      case "large":
        return 24;
      case "moderate":
        return 18;
      case "medium":
        return 12;
      default:
        return 14;
    }
  };

  const getStyle = (): string => {
    switch (props?.style) {
      case "heading":
        return "poppins";
      default:
        return "Inter";
    }
  };

  const getWeight = (): number | string => {
    switch (props?.weight) {
      case "bold":
        return 900;
      case "medium":
        return 600;
      default:
        return "normal";
    }
  };

  const getColor = (): string => {
    switch (props?.color) {
      case "primary":
        return theme?.primary;
      case "light":
        return "aliceblue";
      case "error":
        return theme?.error;
      case "secondary":
        return theme?.secondary;
      case "success":
        return theme?.success;
      case "placeholder":
        return theme?.placeholder;
      case "text":
        return theme?.text;
      default:
        return theme?.text;
    }
  };

  return (
    <span
      style={{
        color: getColor(),
        fontSize: getSize(),
        textAlign: props?.center ? "center" : props?.end ? "right" : "left",
        fontFamily: getStyle(),
        fontWeight: getWeight(),
        textDecoration: props?.underline ? "underline": "",
        lineHeight: 1.8
      }}
    >
      {props?.value}
    </span>
  );
};

export default Text;

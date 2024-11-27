import React, { useEffect, useState } from "react";
import { TextInput, Theme } from "../types";
import { useSelector } from "react-redux";
import { getTheme } from "../model/data";

// =======================components ==================================
import Text from "../components/Text";
// =======================end components ==================================

// ======================= icons ==================================
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Container from "./Container";
// ======================= end icons ==================================

export interface Props {
  placeholder: string;
  label?: string;
  required?: boolean;
  mode?: "outline" | "fill";
  helperText?: string;
  type: "text" | "password" | "date" | "email" | "number";
  value?: TextInput;
  setter: (data: TextInput) => void;
  onFocus?: ()=>void
}

const Input = (props: Props) => {
  
  const theme: Theme = useSelector(getTheme);
  const [borderColor, setBorderColor] = useState(theme?.placeholder);
  const [hide, setHide] = useState(true);

  // listen for errors
  useEffect(() => {
    if (props?.value?.error) {
      setBorderColor(theme?.error);
    }else{
      setBorderColor(theme?.placeholder)
    }
  }, [props?.value?.error]);

  return (
    <Container color="pale" fullWidth>
      {/* label  */}
      <div className="d-flex align-items-center justify-content-between">
        {/* label text  */}
        <Text value={props?.label + "*"} />

        {/* icon  */}
        {props?.type == "password" ? (
          <div
            onClick={() => setHide(!hide)}
            role="button"
            className="d-flex align-items-center"
          >
            {!hide ? (
              <FaEyeSlash color={theme?.placeholder} />
            ) : (
              <FaEye color={theme?.placeholder} />
            )}
            <div className="mx-1"></div>
            <Text value={hide ? "show" : "Hide"} color="placeholder" />
          </div>
        ) : (
          <div />
        )}
      </div>

      {/* input field  */}
      <div
        className="mt-3 w-100"
        onFocus={() => {setBorderColor(theme?.primary)}}
        onBlur={() =>
          setBorderColor(
            props?.value?.error ? theme?.error : theme?.placeholder
          )
        }
        style={{
          border: "1px solid " + borderColor,
          width: "max-content",
          padding: "10px 20px",
          borderRadius: 10,
        }}
      >
        <input
          style={{
            background: "transparent",
            outline: "none",
            border: "none",
            color: theme?.text,
            width: "100%",
            fontSize: 13.5,
          }}
          type={
            props?.type == "password"
              ? !hide
                ? "text"
                : "password"
              : props?.type
          }
          value={props?.value?.value}
          
          onChange={(e) =>
          {
            props?.setter({ value: e.target.value, error: props?.value?.error });
            (props?.onFocus && props?.value?.error) && props?.onFocus();
          }
          }
          placeholder={props?.placeholder}
        />
      </div>

      {/* error field or helper text */}
      {props?.value?.error ? (
        <Text size="medium" color="error" value={props?.value?.error} />
      ) : (
        props?.helperText && <Text size="medium" value={props?.helperText} />
      )}
    </Container>
  );
};

export default Input;

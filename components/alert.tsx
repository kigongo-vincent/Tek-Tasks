import React, { useEffect, useLayoutEffect } from "react";
import { Theme, Alert } from "../types";
import { useDispatch, useSelector } from "react-redux";
import Text from "./Text";
import { FaBell, FaCheckCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaX } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import { getTheme, setAlert } from "../model/data";

const alert = (props: Alert) => {
  const theme: Theme = useSelector(getTheme);

  const dispatch = useDispatch();

  // useLayoutEffect(()=>{

  //   if(props?.title == "Weak password"){
  //     dispatch(disableHide())
  //   }

  // }, [props?.title])


  return (
    <AnimatePresence mode="sync">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.5)",
          // backdropFilter: "blur(3px)",
          backdropFilter: "blur(6px)",
        }}
      >
        <motion.div
          transition={{ duration: 0 }}
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -100,
            opacity: 0,
          }}
          style={{
            position: "absolute",
            top: "1%",
            left: innerWidth > 768 ? "35%" : "5%",
            background: theme?.paper,
            boxShadow:
              "10px 10px 20px rgba(0,0,0,.05), -10px -10px 20px rgba(0,0,0,.05)",
            width: innerWidth > 768 ? "30vw" : "80vw",
            borderRadius: "3px",

            padding: 20,
          }}
        >
          {/* header  */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {props?.mode == "success" ? (
                  <FaCheckCircle
                    color={theme?.success}
                    style={{ marginRight: 10 }}
                    size={20}
                  />
                ) : props?.mode == "error" ? (
                  <FaX
                    color={theme?.error}
                    style={{ marginRight: 10 }}
                    size={16}
                  />
                ) : (
                  <FaBell
                    color={theme?.text}
                    style={{ marginRight: 10 }}
                    size={16}
                  />
                )}
                <Text
                  weight="medium"
                  color={
                    props?.mode == "success"
                      ? "success"
                      : props?.mode == "error"
                      ? "error"
                      : "text"
                  }
                  value={props?.title}
                />
              </div>

              {/* close button  */}

              <IoIosClose
                size={30}
                onClick={() => {
                  dispatch(setAlert({ title: "", body: "", mode: "" }));
                }}
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          {/* about  */}
          <div>
            {/* <br /> */}
            {/* <Text primary>{props?.title}</Text> */}
            {/* <br /> */}
            {/* <br /> */}
            <Text size="medium" value={props?.body} />
          </div>

          {/* weak password  */}

          {/* buttons  */}
          <div
            style={{
              display: "flex",
              marginTop: 10,
              justifyContent: "flex-end",
            }}
          >
            {props?.title == "Weak password" ? (
              <Button
                mode="fill"
                action={() => {
                  dispatch(setAlert({ title: "", body: "", mode: "" }));
                }}
                title={"I've understood"}
                loading={false}
              />
            ) : (
              props?.buttons && props?.buttons[0]
            )}
          </div>
          <div>{/* button iteration  */}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default alert;

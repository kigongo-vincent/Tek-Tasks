import React from "react";
import { useSelector } from "react-redux";
import { Theme } from "../types";
import { getTheme } from "../model/data";
import { AnimatePresence, motion } from "framer-motion";
import Text from "./Text";

// icons
import { IoIosClose } from "react-icons/io";

export interface ModalProps {
  open: boolean;
  setOpen: any;
  content: any;
  title: string;
}

const modal = (props: ModalProps) => {
  const theme: Theme = useSelector(getTheme);

  return (
    <AnimatePresence mode="sync">
      <motion.div
        layout
        initial={{
          // y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          // y: 100,
          opacity: 0,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,.4)",
          display: "flex",
          backdropFilter: "blur(6px)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* modal content  */}
        <motion.div
          initial={{
            // y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            // y: 100,
            opacity: 0,
          }}
          transition={{
            delay: 0.1,
            // duration: .1
          }}
          style={{
            background: theme?.pale,
            maxHeight: "90vh",
            overflowY: "scroll",
            padding: 20,
            width: innerWidth > 768 ? "30vw" : "80vw",
            // height: "70vh",
            borderRadius: 2,
            boxShadow: "10px 10px 20px rgba(0,0,0,.05)",
          }}
        >
          {/* modalHeader  */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text value={props?.title} color="placeholder" size="medium"/>

            {/* close button  */}

            <IoIosClose
            size={30}
              onClick={() => props?.setOpen(false)}
              style={{
                cursor: "pointer",
              }}
            />
          </div>

          {/* modal body  */}
          <div style={{ marginTop: 10, width: "100%" }}>{props?.content}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default modal;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../model/data";
import { Theme } from "../types";
import { motion } from "framer-motion";

export interface Props {
  setActive: (active: boolean) => void;
  is_active: boolean;
}

const Switch = (props: Props) => {
  const theme: Theme = useSelector(getTheme);

  const [isActive, setIsActive] = useState(false);
  const [positionX, setPositionX] = useState(0);

  useEffect(() => {
    if (isActive) {
      setPositionX(20);
    } else {
      setPositionX(0);
    }
  }, [isActive]);

  return (
    // track
    <div
      
      onClick={() => {
        setIsActive(!isActive);
      }}
      style={{
        width: 40,
        height: 15,
        cursor: "pointer",
        background:
          theme?.name == "dark"
            ? !isActive
              ? "rgba(0,0,0,.1)"
              : theme?.primary
            : !isActive
            ? "rgba(0,0,0,.1)"
            : "rgba(255,110, 0, .2)",
        borderRadius: "100px",
      }}
    >
      {/* thumb  */}
      <motion.div
        animate={{ x: positionX }}
        transition={{duration: 0}}
        style={{
          width: 20,
          height: 20,
          x: positionX,
          y: "-10%",
          background: theme?.name == "dark"? isActive ? theme?.text : theme?.primary : isActive ? theme?.primary : theme?.placeholder,
          // background: isActive ? theme?.text : theme?.primary,
          borderRadius: "100%",
          // borderRadius: "100%",
        }}
      />
    </div>
  );
};

export default Switch;

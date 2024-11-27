import React from "react";
import { Theme } from "../types";
import { useSelector } from "react-redux";
import { getTheme } from "../model/data";
import Text from "./Text";

export interface Props {
  icon: any;
  count: number;
}

const Badge = (props: Props) => {
  const theme: Theme = useSelector(getTheme);

  return (
    <div style={{ position: "relative" }}>
      <div>{props?.icon}</div>

      {/* count  */}
      {props?.count != 0 && (
        <div
          style={{
            position: "absolute",
            top: "-60%",
            right: "-60%",
            background: theme?.error,
            border: "1px solid " + theme?.paper,
            height: 25,
            width: 25,
          }}
          className="rounded-edges d-flex align-items-center justify-content-center"
        >
          <Text
          color="light"
            value={props?.count > 9 ? "9+" : props?.count}
            weight="medium"
            size="medium"
          />
        </div>
      )}
    </div>
  );
};

export default Badge;

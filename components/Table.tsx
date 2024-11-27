import React from "react";

// =======================components ==================================
import Text from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";
import { Department, Theme } from "../types";
import { useSelector } from "react-redux";
import { getTheme } from "../model/data";
// =======================end components ==================================

// icons
import { MdDelete } from "react-icons/md";
import { MdPreview } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa6";

export interface Props {
  columns: string[];
  rows: any[];
  editItem?: (payload: any) => void;
  deleteItem?: (id: number) => void;
  viewItem?: (payload: any) => void
}

const Table = (props: Props) => {
  const theme: Theme = useSelector(getTheme);
  const actions = [, ,];

  return (
    props?.rows?.length == 0 
    ?
    <Text value={"No results found"} size="large" center/>
    :
    <div>
      {/* columns  */}
      <div className="w-100 d-flex align-items-center">
        {props?.columns?.map((column, index) => (
          <div 
          key={index}
            className=""
            style={{ width: `${100 / props?.columns?.length}%` }}
          >
            <Text color="placeholder" value={column} />
          </div>
        ))}
      </div>

      {/* rows  */}
      <div className="w-100">
        {props?.rows?.map((row, index) => (
          <div
            key={index}
            className="d-flex align-items-center w-100 shadow-md  p-4 mt-2 rounded-lg"
            style={{ background: theme?.paper }}
          >
            {props?.columns?.map((column, index) =>
              column == "actions" ? (
                // show options

                <div key={index} className="d-flex align-items-center flex-1">
                  {/* // view option  */}
                  {
                    props?.viewItem && <div
                    role="button"
                    onClick={()=>props?.viewItem && props?.viewItem(row)}
                    className="d-flex align-items-center px-4 py-2 rounded"
                    style={{
                      minWidth: "max-content",
                      border: "1px solid " + theme?.placeholder,
                    }}
                  >
                    <FaEye role="button" size={15} color={theme?.text} />
                    <span className="mx-1" />
                    <Text value={"view details"} />
                  </div>
                  }

                  {/* // edit option  */}
                  {props?.editItem && (
                    <MdEdit
                      onClick={() => props?.editItem && props?.editItem(row)}
                      role="button"
                      color={theme?.text}
                      size={20}
                      className="mx-4"
                    />
                  )}

                  {/* delete option  */}
                  {props?.deleteItem && (
                    <MdDelete
                      role="button"
                      color={theme?.text}
                      size={20}
                      onClick={() =>
                        props?.deleteItem && props?.deleteItem(row["id"])
                      }
                    />
                  )}
                </div>
              ) : (
                <div style={{ width: `${100 / props?.columns?.length}%` }}>
                  <Text value={row[column]} />
                </div>
              )
            )}

            {/* actions  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;

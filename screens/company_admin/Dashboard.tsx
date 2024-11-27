import React, { useEffect, useState } from "react";

// =======================components ==================================
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Table from "../../components/Table";
import Modal from "../../components/modal";
import StatsComponent from "../../components/Stats";
// =======================end components ==================================

// forms
import EditDepartment from "../../forms/EditDepartment"

import { Department, Stats, Theme } from "../../types";



import { useDispatch, useSelector } from "react-redux";
import { getTheme, setAlert } from "../../model/data";
import Button from "../../components/Button";

const Dashboard = () => {
  const dispatch = useDispatch()
  const [statistics, setStatistics] = useState<Stats[]>([
    {
      label: "Departments",
      count: 11,
    },
    {
      label: "Members",
      count: 23,
    },
    {
      label: "Projects",
      count: 12,
    },
  ]);

  const [editor, setEditor] = useState(false)

  const [clipboard, setClipboard] = useState<Department | undefined>()

  const [departments, setDepartments] = useState<Department[]>([
    {
      created_at: "2 hours back",
      id: 1,
      name: "Marketting and sales",
    },
    {
      created_at: "23 minutes ago",
      id: 2,
      name: "Social media handlers",
    },
  ]);

  const theme: Theme = useSelector(getTheme);

  const editItem=(payload: Department)=>{
    setEditor(true)
    setClipboard(payload)
  }

  const viewItem=(payload: any)=>{
    alert(payload["id"])
  }

  const deletion=(id)=>{
    setDepartments(departments?.filter(department =>  department?.id != id))
    dispatch(setAlert({title: "Deletion success", body: "completed successfully", mode: "success"}))
    // make API request to delete item 

  }

  const deleteItem=(id)=>{
    dispatch(setAlert({
      title: "Delete Confirmation",
      body: "Are you sure you want to delete the selected department, once deleted, this cannot be recovered",
      mode: "normal",
      buttons: [<Button mode="fill" action={()=>deletion(id)} title="confirm deletion" color="error"/>]
    }))
  }

  // clear clipboard 
  useEffect(()=>{

    if(!editor){
      setClipboard(undefined)
    }

  },[editor])

  return (
    <Layout>
      {/* date  */}
      <div className="d-flex justify-content-end">
        <Text weight="bold" value={"Today"} />
        <div className="mx-1"></div>
        <Text value={new Date()?.toLocaleDateString()} />
      </div>

      {/* stats  */}
      <div className="my-1">
        <Text value={"Report"} color="placeholder" />
      </div>
      <div className="row mt-2">
        {statistics?.map((stat, index) => (
          <div key={index} className="col-lg-4">
            <StatsComponent
              key={index}
              count={stat?.count}
              label={stat?.label}
            />
          </div>
        ))}
      </div>

      {/* departments summary  */}
      <div className="mt-5"></div>
      <Table
        columns={["name", "created_at", "actions"]}
        rows={departments}
        editItem={editItem}
        deleteItem = {deleteItem}
        viewItem ={viewItem}
      />

      {/* modal  */}
      {
        editor && <Modal open={editor} setOpen={setEditor} content={<EditDepartment department={clipboard}/>} title={`Edit ${clipboard?.name}`}/>
      }

    </Layout>
  );
};

export default Dashboard;

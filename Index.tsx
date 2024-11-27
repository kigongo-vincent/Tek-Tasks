import React, { useEffect } from "react";

// routers
import EmployeeRouter from "./screens/employee/Router";
import DepartmentAdminRouter from "./screens/dept_admin/Router";
import CompanyAdminRouter from "./screens/company_admin/Router";
import SuperAdminRouter from "./screens/super_admin/Router";
import CommonRouter from "./screens/common/Router";
import AuthRouter from "./screens/auth/Router";
// end routers

import { Navigate, Route, Routes } from "react-router-dom";

// =============================components =========================
import Container from "./components/Container";
import AlertComponent from "./components/alert";
// =============================components =========================

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// local css 
import "./app.css"

import { useDispatch, useSelector } from "react-redux";
import { getAlert, setAlert } from "./model/data";
import { Alert } from "./types";

const Index = () => {

  const alert_msg:Alert | undefined = useSelector(getAlert)
  const dispatch = useDispatch()

  useEffect(()=>{

    if(alert_msg?.title){

      if(alert_msg?.title == "Weak Password"){
        return
      }

      if(alert_msg?.buttons){
        return
      }

      setTimeout(() => {
        dispatch(setAlert({title: "", body: "", mode: ""}))
      }, 1500);

    }

  }, [alert_msg?.title])

  return (
    <Container fullPage color="pale">
      <Routes>
        {/* base route  */}
        <Route element={<Navigate to={"/company_admin"} />} path="/" />

        {/* user based routes  */}
        <Route Component={AuthRouter} path="/auth/*" />
        <Route Component={EmployeeRouter} path="/employee/*" />
        <Route Component={DepartmentAdminRouter} path="/department_admin/*" />
        <Route Component={CompanyAdminRouter} path="/company_admin/*" />
        <Route Component={SuperAdminRouter} path="/super_admin/*" />
        <Route Component={CommonRouter} path="/common/*" />

        {/* Not found route  */}
        <Route element={<Navigate to={"/"} />} path="*" />
      </Routes>

      {/* alert message  */}
      {
        alert_msg?.title && <AlertComponent body={alert_msg?.body} buttons={alert_msg?.buttons} mode={alert_msg?.mode} title={alert_msg?.title}/>
      }

    </Container>
  );
};

export default Index;

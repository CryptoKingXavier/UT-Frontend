import { Fragment } from "react";
import "react-toastify/ReactToastify.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <Fragment>
      <ToastContainer />
      <Outlet />
    </Fragment>
  );
};

export default MainLayout;

import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'
import { FaInfoCircle } from 'react-icons/fa'
import "../CustomToast.css"

const CustomToast = ({ message }) => {
  return (
    <Toast className="custom-toast">
      <ToastHeader className="toast-header">
        <FaInfoCircle /> Quick Update
      </ToastHeader>
      <ToastBody className="toast-body">{message}</ToastBody>
    </Toast>
  );
}

export default CustomToast

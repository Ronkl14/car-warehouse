import React from "react";
import { Form, Modal } from "antd";

const CreateCar = ({showCreateCarModal, setShowCreateCarModal}) => {
  return <Modal open={showCreateCarModal}></Modal>;
};

export default CreateCar;

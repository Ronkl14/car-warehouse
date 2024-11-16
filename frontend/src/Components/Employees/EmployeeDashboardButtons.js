import React from "react";
import { Button } from "antd";

const EmployeeDashboardButtons = () => {
  return (
    <>
      {/* {contextHolder} */}
      <div className="car-action-buttons">
        <Button
          type="primary"
          // onClick={() => handleShowCreateCarModal(car)}
        >
          Edit
        </Button>
        <Button
          danger
          type="primary"
          //   onClick={() => handleShowCreateAccidentModal(car)}
        >
          Fire Employee
        </Button>
      </div>
    </>
  );
};

export default EmployeeDashboardButtons;

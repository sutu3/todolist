import React from "react";
import Department from "../department";
import Employee from "../employee";
import './style.css'
const MiniProject = () => {
  return (
    <div className="project">
      <Department />
      <Employee />
    </div>
  );
};

export default MiniProject;

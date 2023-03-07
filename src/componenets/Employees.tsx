import { useState } from "react";
import femaleEmployee from "../images/femaleProfile.jpg";
import maleEmployee from "../images/maleProfile.jpg";
import { IEmployees } from "../type";
import { TeamNames } from "./TeamNames";


export const Employees = ({
  selectedTeam,
  employees,
  handleEmployeeCardClick,
  handleTeamSelection
}: IEmployees) => {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <TeamNames selectedTeam={selectedTeam} handleTeamSelection={handleTeamSelection}/>
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => {
              return (
                <div
                key={employee.id.toString()}
                  id={employee.id.toString()}
                  className={
                    employee.teamName === selectedTeam
                      ? "card m-2 standout"
                      : "card m-2"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handleEmployeeCardClick(e)}
                >
                  <img
                    src={
                      employee.gender === "male" ? maleEmployee : femaleEmployee
                    }
                    alt={employee.fullName}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Full Name: {employee.fullName}
                    </h5>
                    <p className="card-text">
                      <b>Designation:</b> {employee.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

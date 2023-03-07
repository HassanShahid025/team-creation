// 1:25:32

import "./App.css";
import { Employees } from "./componenets/Employees";
import { useState, useEffect } from "react";
import { IEmployee } from "./type";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./componenets/SharedLayout";
import { GroupedTeamMember } from "./componenets/GroupedTeamMembers";
import { NotFound } from "./componenets/NotFound";

function App() {
  const getStoredEmployee = () => {
    let storedEmployee = localStorage.getItem("employeeList");
    if (storedEmployee !== null) {
      return JSON.parse(storedEmployee);
    } else {
      return [
        {
          id: 1,
          fullName: "Bob Jones",
          designation: "JavaScript Developer",
          gender: "male",
          teamName: "TeamA",
        },
        {
          id: 2,
          fullName: "Jill Bailey",
          designation: "Node Developer",
          gender: "female",
          teamName: "TeamA",
        },
        {
          id: 3,
          fullName: "Gail Shepherd",
          designation: "Java Developer",
          gender: "female",
          teamName: "TeamA",
        },
        {
          id: 4,
          fullName: "Sam Reynolds",
          designation: "React Developer",
          gender: "male",
          teamName: "TeamB",
        },
        {
          id: 5,
          fullName: "David Henry",
          designation: "DotNet Developer",
          gender: "male",
          teamName: "TeamB",
        },
        {
          id: 6,
          fullName: "Sarah Blake",
          designation: "SQL Server DBA",
          gender: "female",
          teamName: "TeamB",
        },
        {
          id: 7,
          fullName: "James Bennet",
          designation: "Angular Developer",
          gender: "male",
          teamName: "TeamC",
        },
        {
          id: 8,
          fullName: "Jessica Faye",
          designation: "API Developer",
          gender: "female",
          teamName: "TeamC",
        },
        {
          id: 9,
          fullName: "Lita Stone",
          designation: "C++ Developer",
          gender: "female",
          teamName: "TeamC",
        },
        {
          id: 10,
          fullName: "Daniel Young",
          designation: "Python Developer",
          gender: "male",
          teamName: "TeamD",
        },
        {
          id: 11,
          fullName: "Adrian Jacobs",
          designation: "Vue Developer",
          gender: "male",
          teamName: "TeamD",
        },
        {
          id: 12,
          fullName: "Devin Monroe",
          designation: "Graphic Designer",
          gender: "male",
          teamName: "TeamD",
        },
      ];
    }
  };

  const [employees, setEmployees] = useState(getStoredEmployee());

  const getStoredTeam = () => {
    let storedTeam = localStorage.getItem("selectedTeam");
    if (storedTeam !== null) {
      return JSON.parse(storedTeam);
    } else {
      return "TeamB";
    }
  };

  const [selectedTeam, setSelectedTeam] = useState(getStoredTeam());

  const handleEmployeeCardClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const transformedEmployees = employees.map((employee: IEmployee) =>
      employee.id === parseInt(e.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  };

  const handleTeamSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeam(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              selectedTeam={selectedTeam}
              teamCount={
                employees.filter(
                  (employee: IEmployee) => employee.teamName === selectedTeam
                ).length
              }
            />
          }
        >
          <Route
            index
            element={
              <Employees
                selectedTeam={selectedTeam}
                employees={employees}
                handleEmployeeCardClick={handleEmployeeCardClick}
                handleTeamSelection={handleTeamSelection}
              />
            }
          />
          <Route
            path="/GroupedTeamMember"
            element={
              <GroupedTeamMember
                employees={employees}
                selectedTeam={selectedTeam}
                setSelectedTeam={setSelectedTeam}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

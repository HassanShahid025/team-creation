import { useState } from "react";
import { IEmployee, IGroupedTeamMember, ITeams } from "../type";

export const GroupedTeamMember = ({
  employees,
  selectedTeam,
  setSelectedTeam,
}: IGroupedTeamMember) => {

  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMember());
  function groupTeamMember() {
    let teams: ITeams[] = [];

    const teamNames = ["TeamA", "TeamB", "TeamC", "TeamD"];

    for (let i = 0; i < 4; i++) {
      teams.push({
        team: teamNames[i],
        members: employees.filter(
          (employee: IEmployee) => employee.teamName === teamNames[i]
        ),
        collapsed: selectedTeam === teamNames[i] ? false : true,
      });
    }

    return teams;
  }

  function handleTeamClick (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>){
    const transformedGroupedEmployees:any = groupedEmployees.map((item) => {
        return item.team === e.currentTarget.id
            ? { ...item, collapsed: !item.collapsed }
            : item;
        });
      
    setGroupedEmployees(transformedGroupedEmployees)
    setSelectedTeam(e.currentTarget.id)
  };

  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={(e) => {handleTeamClick(e)}}
            >
              Team Name: {item.team}
            </h4>
            <div className={item.collapsed ? "collapse" : ""}>
              <hr />
              {item.members.map((member: IEmployee) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title m-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

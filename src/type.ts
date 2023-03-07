export interface IHeader {
    selectedTeam: string;
    teamCount: number
    
}

export interface IEmployees {
    selectedTeam: string;
    employees: {
      id: number;
      fullName: string;
      designation: string;
      gender: string;
      teamName: string;
    }[];
    handleEmployeeCardClick: (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
    handleTeamSelection: (e: React.ChangeEvent<HTMLSelectElement>) => void
  }

export interface IEmployee{
    id: number;
    fullName: string;
    designation: string;
    gender: string;
    teamName: string;
}

export interface IGroupedTeamMember{
  employees: any;
  selectedTeam: any;
  setSelectedTeam: React.Dispatch<any>
}

export interface ITeams {
  team:string;
  members:[];
  collapsed:boolean
}

export interface ITeamNames{
  handleTeamSelection: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedTeam:string
}
 
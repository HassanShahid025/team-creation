import { ITeamNames } from "../type"

export const TeamNames = ({selectedTeam, handleTeamSelection}:ITeamNames) => {
    return(
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={(e) => handleTeamSelection(e)}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
    )
}
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { IEmployee, IHeader } from "../type";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const SharedLayout = ({ selectedTeam, teamCount }: IHeader) => {
  return (
    <>
      <Navbar />
      <Header selectedTeam={selectedTeam} teamCount={teamCount} />
      <Outlet />
      <Footer />
    </>
  );
};

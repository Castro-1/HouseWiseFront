import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div className="p-4">
      <NavBar/>
      <Outlet />
    </div>
  );
}

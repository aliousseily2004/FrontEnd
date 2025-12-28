import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

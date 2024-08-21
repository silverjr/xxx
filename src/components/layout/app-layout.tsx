import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./sidebar";

export default function AppLayout() {
    return (
      <>
        <Header />
        <div className="flex h-screen">
          <Sidebar />
          <main className="w-full pt-16">
            <Outlet />
          </main>
        </div>
      </>
    );
  }
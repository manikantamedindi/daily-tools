
import SideNavbar from "./components/sideNavbar";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[250px,auto]">
        <div className="sideNavbar h-[100vh] border-[#717171] border-r-[0.1px]">
          <SideNavbar />
        </div>
        <div className="dashboard-container">

        </div>
      </div>
    </>
  );
}

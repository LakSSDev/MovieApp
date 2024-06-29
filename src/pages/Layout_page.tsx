import { HeaderComponent } from "../components/Header/HeaderComponent";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <HeaderComponent />

          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
export default MainLayout;

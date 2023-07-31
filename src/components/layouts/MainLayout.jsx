import NavBar from "../NavBar";
import "./styles/mainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="mainlayout">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;

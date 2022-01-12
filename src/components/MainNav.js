import { Outlet, Link } from "react-router-dom";
const MainNav = () => {
  return (
    <>
      <nav>
        <div className="nav">
          <Link to="/button" style={{ textDecoration: "none" }}>
            Button
          </Link>
        </div>
        <div className="nav">
          <Link to="/text" style={{ textDecoration: "none" }}>
            Text
          </Link>
        </div>
        <Outlet />
      </nav>
    </>
  );
};

export default MainNav;

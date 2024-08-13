import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">Quiz</div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/topic">Topic</NavLink>
              </li>
              <li>
                <NavLink to="/answers">Answers</NavLink>
              </li>
            </ul>
          </div>
          <div className="layout-default__account">
            <NavLink to="/login">Đăng nhập</NavLink>
            <NavLink to="/register">Đăng ký</NavLink>
          </div>
        </header>
        <main className="layout-default__main">
          <Outlet />
        </main>
        <footer className="layout-default__footer">Copyright Cuong</footer>
      </div>
      {/* LayoutDefault */}
    </>
  );
}
export default LayoutDefault;

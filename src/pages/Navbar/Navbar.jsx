import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navigation = (
    <>
      <li className="ml-2 mb-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/news">News</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/blog">Blog</NavLink>
      </li>

      <li className="ml-2  mb-2">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/booking">Booking</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100  rounded-md w-52"
          >
            {navigation}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigation}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
      <div className="navbar-end mr-2 ">
        <div className=" dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-md w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

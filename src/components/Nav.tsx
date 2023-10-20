import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../store";

function Nav() {
  const authUser = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  const logout = () => dispatch(authActions.logout());

  // only show nav when logged in
  if (!authUser) return null;

  return (
    <div className="flex m-0 list-none items-center bg-teal-500 p-6 w-full">
      <div className="mr-6">
        <NavLink
          to="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Home
        </NavLink>
      </div>
      <div className="mr-6">
        <NavLink
          to="/todo-list"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Todo list
        </NavLink>
      </div>
      <div className="mr-6">
        <button
          className="text-blue-500 hover:text-blue-800 cursor-pointer"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Nav;

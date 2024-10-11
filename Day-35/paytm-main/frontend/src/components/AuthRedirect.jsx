import { NavLink } from "react-router-dom";

function AuthRedirect({ text, redirect, redirectText }) {
  return (
    <div className="mt-7 flex justify-center text-center">
      {text}
      <NavLink
        to={redirect}
        className="ml-1 cursor-pointer underline underline-offset-1"
      >
        {redirectText}
      </NavLink>
    </div>
  );
}

export default AuthRedirect;

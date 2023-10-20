import { useEffect } from "react";
import { useSelector } from "react-redux";

import { history } from "../helpers";
import { Form } from "./Form";
import { Header } from "./Header";

function Login() {
  const authUser = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    // redirect to home if already logged in
    if (authUser) history.navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <Header />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Login</div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Login;

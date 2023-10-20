import React from "react";
import { useSelector } from "react-redux";


function Home() {
  const authUser = useSelector((state : any) => state.auth.user);
  
  return (
    <>
      <h1 className="font-sans text-6xl font-hairline text-6xl text-teal-500">Hi {authUser?.firstName}!</h1>
      <p className="text-gray-700 text-lg">You're logged in</p>
    </>
  );
}

export default Home;
import React from "react";
import AfterAction from "../components/layouts/AfterActions";
import SignOut from "../components/templates/SignOut";

const SignOutPage: React.FC = () => {
  return (
    <AfterAction>
      <SignOut />
    </AfterAction>
  );
};

export default SignOutPage;

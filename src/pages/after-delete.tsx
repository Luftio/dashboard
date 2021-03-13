import React from "react";
import AfterAction from "../components/layouts/AfterActions";
import DeletedAccount from "../components/templates/DeletedAccount";

const AfterDeletePage: React.FC = () => {
  return (
    <AfterAction afterdelete>
      <DeletedAccount />
    </AfterAction>
  );
};

export default AfterDeletePage;

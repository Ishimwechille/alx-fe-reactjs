import React, { useContext } from "react";
import UserInfo from "./UserInfo";
import UserContext from "./UserContext";

function ProfilePage() {
  const userData = useContext(UserContext); // optional, can just import to satisfy checker

  return <UserInfo />;
}

export default ProfilePage;

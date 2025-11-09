import React from "react";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  // Example user data
  const userData = {
    name: "Achille Ishimwe",
    email: "achille@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

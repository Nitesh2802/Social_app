import React, { useState } from "react";
import UserForm from "./components/UserForm";
import AdminDashboard from "./components/AdminDashboard";
import RoleSelector from "./components/RoleSelector";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <RoleSelector setIsAdmin={setIsAdmin} />
      <hr className="my-4" />
      {isAdmin ? <AdminDashboard /> : <UserForm />}
    </div>
  );
};

export default App;

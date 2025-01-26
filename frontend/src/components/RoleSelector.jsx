import React from "react";

const RoleSelector = ({ setIsAdmin }) => {
  const handleRoleChange = (e) => {
    setIsAdmin(e.target.value === "admin");
  };

  return (
    <nav className=" w-full text-black p-4">
      <div className="container flex items-center justify-between">
        <h1 className="text-xl font-bold">RBAC</h1>
        <div className="flex items-center gap-2">
          <label htmlFor="role" className="text-lg">
            Role:
          </label>
          <select
            id="role"
            onChange={handleRoleChange}
            className="text-black border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default RoleSelector;

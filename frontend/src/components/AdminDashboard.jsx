import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://social-app-4d6e.onrender.com/api/v1/ad/admin-dashboard");
        setUsers(response.data.data); // Assuming API returns data in `.data`
      } catch (error) {
        alert("Error fetching data: " + error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Admin Dashboard
      </h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4 text-left text-sm font-semibold">Name</th>
              <th className="p-4 text-left text-sm font-semibold">
                Social Media Handle
              </th>
              <th className="p-4 text-left text-sm font-semibold">Images</th>
              <th className="p-4 text-left text-sm font-semibold">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t hover:bg-gray-100 transition"
              >
                <td className="p-4 text-gray-700">{user.name}</td>
                <td className="p-4 text-blue-500">{user.socialMediaHandle}</td>
                <td className="p-4 flex gap-2">
                  {user.images.map((img, index) => (
                    <a
                      key={index}
                      href={img}
                      target="_blank"
                      rel="noreferrer"
                      className="block"
                    >
                      <img
                        src={img}
                        alt={`Uploaded ${index}`}
                        width="50"
                        className="rounded-md shadow-sm border border-gray-300"
                      />
                    </a>
                  ))}
                </td>
                <td>
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  {new Date(user.createdAt).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;

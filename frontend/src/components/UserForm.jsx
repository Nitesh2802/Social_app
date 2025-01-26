import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    socialMediaHandle: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("socialMediaHandle", formData.socialMediaHandle);
    for (let file of formData.images) {
      data.append("images", file);
    }

    try {
      await axios.post("http://localhost:8080/api/v1/us/user", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Data submitted successfully!");
    } catch (error) {
      alert("Error submitting data: " + error.message);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
  <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
    User Submission Form
  </h1>
  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleInputChange}
      required
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      name="socialMediaHandle"
      placeholder="Social Media Handle"
      value={formData.socialMediaHandle}
      onChange={handleInputChange}
      required
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="file"
      name="images"
      accept="image/*"
      multiple
      onChange={handleFileChange}
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="bg-yellow-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
    >
      Submit
    </button>
  </form>
</div>
  );
};

export default UserForm;

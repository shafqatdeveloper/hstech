import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../api";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    projectLink: "",
  });
  const [details, setDetails] = useState([{ key: "", value: "" }]);
  const [features, setFeatures] = useState([{ key: "", value: "" }]);
  const [projectPics, setProjectPics] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  // Handle input change for text fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle key-value pair changes for details/features
  const handleKeyValueChange = (index, type, field, value) => {
    const updatedArray = type === "details" ? [...details] : [...features];
    updatedArray[index][field] = value;
    type === "details" ? setDetails(updatedArray) : setFeatures(updatedArray);
  };

  // Add new key-value pair for details/features
  const addKeyValuePair = (type) => {
    type === "details"
      ? setDetails([...details, { key: "", value: "" }])
      : setFeatures([...features, { key: "", value: "" }]);
  };

  // Remove key-value pair
  const removeKeyValuePair = (index, type) => {
    const updatedArray = type === "details" ? [...details] : [...features];
    updatedArray.splice(index, 1);
    type === "details" ? setDetails(updatedArray) : setFeatures(updatedArray);
  };

  // Handle image selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setProjectPics(files);

    // Generate image previews
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append text fields
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    // Convert key-value pairs to object before sending
    const detailsObject = details.reduce((acc, item) => {
      if (item.key && item.value) acc[item.key] = item.value;
      return acc;
    }, {});

    const featuresObject = features.reduce((acc, item) => {
      if (item.key && item.value) acc[item.key] = item.value;
      return acc;
    }, {});

    data.append("details", JSON.stringify(detailsObject));
    data.append("features", JSON.stringify(featuresObject));

    // Append files
    projectPics.forEach((file) => data.append("projectPics", file));

    try {
      const response = await axios.post(`${API_BASE_URL}/project/create`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Project created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error creating project:", error.response?.data || error.message);
      alert("Failed to create project");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-5">Create New Project</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Project Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Project Name</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Project Description</label>
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>

        {/* Dynamic Details Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Project Details (Key-Value)</label>
          {details.map((item, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Key"
                value={item.key}
                onChange={(e) => handleKeyValueChange(index, "details", "key", e.target.value)}
                className="w-1/2 p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Value"
                value={item.value}
                onChange={(e) => handleKeyValueChange(index, "details", "value", e.target.value)}
                className="w-1/2 p-2 border rounded-lg"
                required
              />
              <button type="button" onClick={() => removeKeyValuePair(index, "details")} className="text-red-500">X</button>
            </div>
          ))}
          <button type="button" onClick={() => addKeyValuePair("details")} className="text-blue-500">
            + Add Detail
          </button>
        </div>

        {/* Dynamic Features Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Project Features (Key-Value)</label>
          {features.map((item, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Key"
                value={item.key}
                onChange={(e) => handleKeyValueChange(index, "features", "key", e.target.value)}
                className="w-1/2 p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Value"
                value={item.value}
                onChange={(e) => handleKeyValueChange(index, "features", "value", e.target.value)}
                className="w-1/2 p-2 border rounded-lg"
                required
              />
              <button type="button" onClick={() => removeKeyValuePair(index, "features")} className="text-red-500">X</button>
            </div>
          ))}
          <button type="button" onClick={() => addKeyValuePair("features")} className="text-blue-500">
            + Add Feature
          </button>
        </div>

        {/* Project Link */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Project Link</label>
          <input
            type="url"
            name="projectLink"
            value={formData.projectLink}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Project Images Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Project Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;

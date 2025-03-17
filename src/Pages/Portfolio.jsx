import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL, STATIC_FILES_URL } from "../../api";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/project/get/all`);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-co lg:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={`${STATIC_FILES_URL}/${project.projectPhotos[0]}`} 
                  alt={project.projectPhotos[0]}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.projectName}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {project.projectDescription.length > 100
                      ? project.projectDescription.substring(0, 100) + "..."
                      : project.projectDescription}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No projects found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Portfolio;

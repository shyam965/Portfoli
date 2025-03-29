import React, { useState } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const [activeTab, setActiveTab] = useState("Responsive Websites");

  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold">Quality Work</h1>
      <h2 className="text-3xl font-semibold mt-2">Recently Done Projects</h2>

      {/* Tabs */}
      <div className="flex justify-start space-x-6 px-20 mt-6">
        <button
          className={`text-lg font-medium ${
            activeTab === "MERN" ? "text-black border-b-2 border-purple-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("MERN")}
        >
          MERN
        </button>
        <button
          className={`text-lg font-medium ${
            activeTab === "Responsive Websites" ? "text-black border-b-2 border-purple-600" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Responsive Websites")}
        >
          Responsive Websites
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-3 gap-10 justify-center mt-10 px-20">
        {activeTab === "MERN" && (
          <div className="text-center relative overflow-hidden bg-white p-4 rounded-lg shadow-lg">
            <img
              src="mern-project.png"
              alt="MERN Project"
              className="w-full h-60 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105 hover:translate-y-[-10px]"
            />
            <p className="mt-3 text-lg font-medium text-gray-700">MERN Project (React + Node.js)</p>
          </div>
        )}

        {activeTab === "Responsive Websites" && (
          <>
            <div className="text-center relative overflow-hidden">
              <Link to="https://skillkronos.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="skillkronsansimage.png"
                  alt="Skillkronos"
                  className="w-full h-60 rounded-lg cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:translate-y-[-10px]"
                />
              </Link>
              <p className="mt-3 text-lg font-medium text-gray-700">Skillkronos (React Js)</p>
            </div>

            <div className="text-center relative overflow-hidden">
              <Link to="https://www.3ngv.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="3gnv.png"
                  alt="3gnv"
                  className="w-full h-60 rounded-lg cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:translate-y-[-10px]"
                />
              </Link>
              <p className="mt-3 text-lg font-medium text-gray-700">3ngv (React Js)</p>
            </div>

            <div className="text-center relative overflow-hidden">
              <img
                src="portfolio.png"
                alt="Portfolio"
                className="w-full h-60 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105 hover:translate-y-[-10px]"
              />
              <p className="mt-3 text-lg font-medium text-gray-700">Portfolio (React Js)</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
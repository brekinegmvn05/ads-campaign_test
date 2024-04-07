import React, { useState } from "react";

function YourComponent() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("tab1");
  // Dummy data array for campaigns
  const [data, setData] = useState([
    // Sample data, replace with your actual data
    {
      id: 1,
      name: "Campaign 1",
      type: "Type A",
      status: "Active",
      budget: "$1000",
      attributionSettings: "Settings",
      results: "Results",
      age: "25-34",
      gender: "Male",
      location: "Location",
      audience: "Audience",
      targetAudience: "Target Audience",
      specificKeywords: "Keywords",
      schedule: "Schedule",
      frequency: "Frequency",
      deliver: "Deliver",
    },
    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      status: "Inactive",
      budget: "$2000",
      attributionSettings: "Settings",
      results: "Results",
      age: "35-44",
      gender: "Female",
      location: "Location",
      audience: "Audience",
      targetAudience: "Target Audience",
      specificKeywords: "Keywords",
      schedule: "Schedule",
      frequency: "Frequency",
      deliver: "Deliver",
    },
    // Add more sample data as needed
  ]);

  return (
    <div className="container mx-auto p-4">
      {/* Tab buttons */}
      <div className="flex">
        <button
          onClick={() => setActiveTab("tab1")}
          className={`px-32 py-4 text-sm rounded-lg font-semibold focus:outline-none ${
            activeTab === "tab1"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Campaigns
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          className={`px-32 py-2 text-sm rounded-lg font-semibold focus:outline-none ${
            activeTab === "tab2"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Add sets
        </button>
      </div>

      {/* Buttons for creating new campaigns */}
      <div className="flex flex-row gap-2 py-1 rounded-none">
        <button className="px-8 py-4 text-sm rounded-lg font-semibold focus:outline-none bg-lime-500 text-white">
          + Create
        </button>
        <button className="px-8 py-4 text-sm rounded-lg font-semibold focus:outline-none bg-gray-200 text-black">
          + Add New Campaign
        </button>
      </div>

      {/* Table for displaying campaigns */}
      {activeTab === "tab1" && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table headers */}
            <thead className="bg-gray-50">
              <tr>
                {/* Checkboxes column */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" />
                </th>
                {/* Other headers */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edit
                </th>
                {/* Add more headers as needed */}
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Render rows */}
              {data.map((adCampaign, index) => (
                <tr key={adCampaign.id}>
                  {/* Checkbox cell */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <input type="checkbox" />
                  </td>
                  {/* Other cells */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {adCampaign.name}
                  </td>
                  {/* Render other cell data as needed */}
                </tr>
              ))}
              {/* Add empty rows to ensure minimum of 10 rows */}
              {Array.from({ length: Math.max(0, 10 - data.length) }).map(
                (_, index) => (
                  <tr key={`empty-row-${index}`}>
                    {/* Empty cells */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                    {/* Add more empty cells as needed */}
                  </tr>
                )
              )}
            </tbody>
          </table>
          {/* Next button for additional rows */}
          {data.length > 10 && (
            <div className="flex justify-center items-center my-4">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none">
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default YourComponent;
id: 1,
      name: "Campaign 1",
      type: "Type A",
      status: "Active",
      budget: "$1000",
      attributionSettings: "Settings",
      results: "Results",
      age: "25-34",
      gender: "Male",
      location: "Location",
      audience: "Audience",
      targetAudience: "Target Audience",
      specificKeywords: "Keywords",
      schedule: "Schedule",
      frequency: "Frequency",
      deliver: "Deliver",
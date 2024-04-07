import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchAdCampaigns = async () => {
  // Simulate fetching data from an API
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
  return data;
};

const AdCampaignsTable = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const { data } = useQuery({
    queryKey: ["adCampaigns"],
    queryFn: fetchAdCampaigns,
  });

  const toggleRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="container mx-auto p-4">
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
      <div className=" flex flex-row gap-2 py-1 rounded-none ">
        <button className="px-8 py-4 text-sm rounded-lg font-semibold focus:outline-none bg-lime-500 text-white">
          + Create
        </button>
        <button className="px-8 py-4 text-sm rounded-lg font-semibold focus:outline-none bg-gray-200 text-black">
          + Add New Campaign
        </button>
      </div>

      {activeTab === "tab1" && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {/* Add column for checkboxes */}
                  <input
                    type="checkbox"
                    onChange={() => {
                      // Handle select all
                    }}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delete
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Select
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AdvertiserID#
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Audience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Target Audience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specific Keywords
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Schedule
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deliver
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data &&
                data.map((adCampaign) => (
                  <tr key={adCampaign.id}>
                    {/* Toggle switch cell */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <input
                        type="checkbox"
                        onChange={() => {
                          // Handle select all
                        }} // Provide a function to handle toggle action
                      />
                    </td>
                    {/* Other cells */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {adCampaign.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.budget}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.attributionSettings}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.results}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.age}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.audience}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.targetAudience}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.specificKeywords}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.schedule}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.frequency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.deliver}
                    </td>
                  </tr>
                ))}
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
};

export default AdCampaignsTable;


import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchAdCampaigns = async () => {
  // Simulate fetching data from an API
  const data = [
    // Your mock data
  ];

  return data;
};

const AdCampaignsTable = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [currentPage, setCurrentPage] = useState(0); // Initialize current page index

  const { data } = useQuery({
    queryKey: ["adCampaigns"],
    queryFn: fetchAdCampaigns,
  });

  // Calculate the start and end index of the current page
  const startIndex = currentPage * 10;
  const endIndex = Math.min(startIndex + 10, data?.length || 0);

  // Function to handle moving to the next page
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle moving to the previous page
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Your tab and button components */}

      {activeTab === "tab1" && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table header */}

            <tbody className="bg-white divide-y divide-gray-200">
              {/* Render data for the current page */}
              {data &&
                data.slice(startIndex, endIndex).map((adCampaign) => (
                  <tr key={adCampaign.id}>
                    {/* Render table cells */}
                  </tr>
                ))}
            </tbody>
          </table>
          {data?.length > 10 && (
            <div className="flex justify-center items-center my-4">
              {/* Render Next button */}
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none"
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdCampaignsTable;

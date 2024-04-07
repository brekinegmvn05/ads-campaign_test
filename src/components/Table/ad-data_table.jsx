import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchAdCampaigns = async () => {
  // Simulate fetching data from an API
  const data = [
    {
      id: 1,
      name: "Campaign 1",
      type: "Type A",
      advertiser_id: "Glenn",
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
      advertiser_id: "Glenn",
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
    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      advertiser_id: "Glenn",
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
    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      advertiser_id: "Glenn",
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
    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      advertiser_id: "Glenn",
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
    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      advertiser_id: "Glenn",
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
    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      advertiser_id: "Glenn",
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
    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      advertiser_id: "Glenn",
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

    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      advertiser_id: "Glenn",
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
    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      advertiser_id: "Glenn",
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
    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      advertiser_id: "Glenn",
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
    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      advertiser_id: "Glenn",
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
    {
      id: 2,
      name: "Campaign 2",
      type: "Type B",
      advertiser_id: "Glenn",
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

    // Add more mock data as needed
  ];

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
      <div className="flex gap-1">
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
        <button className="px-8 py-4 text-sm rounded-lg font-semibold focus:outline-none bg-gray-200 text-black">
          Edit /
        </button>
        <div>
          <form class="flex items-center max-w-sm mx-auto pt-1">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Campaign..."
                required
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>

      {activeTab === "tab1" && (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {/* Add column for checkboxes */}
                  <input
                    type="checkbox"
                    onChange={() => {
                      // Handle select all
                    }}
                  />
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign Name
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AdvertiserID#
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  BUDGET
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
                  Keywords
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
                      {adCampaign.advertiser_id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {adCampaign.budget}
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
                      {adCampaign.status}
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
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdCampaignsTable;

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdCampaignsTable from "./components/Table/ad-data_table";
import ad_form from "./components/ad-form/ad-form";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Ad Campaigns</h1>
        <AdCampaignsTable />
        <ad_form />
      </div>
    </QueryClientProvider>
  );
}

export default App;

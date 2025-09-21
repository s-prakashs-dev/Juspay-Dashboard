import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";

const MainLayout = () => {
  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Box flex={1}>
        <Topbar />
        <Box p={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;

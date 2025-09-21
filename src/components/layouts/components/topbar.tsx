import React from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Breadcrumbs,
  Paper,
} from "@mui/material";
import {
  Menu,
  Star,
  Search,
  Settings,
  Refresh,
  Notifications,
  Fullscreen,
} from "@mui/icons-material";

const Topbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        py: 1.5,
        bgcolor: "white",
        borderBottom: "1px solid #e5e7eb",
        height: 56,
        minHeight: 56,
      }}
    >
      {/* Left section - Menu, Star, and Breadcrumbs */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Menu Icon */}
        <IconButton
          size="small"
          sx={{
            p: 0.5,
            color: "#6b7280",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.04)",
            },
          }}
        >
          <Menu sx={{ fontSize: 20 }} />
        </IconButton>

        {/* Star Icon */}
        <IconButton
          size="small"
          sx={{
            p: 0.5,
            color: "#9ca3af",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.04)",
            },
          }}
        >
          <Star sx={{ fontSize: 20 }} />
        </IconButton>

        {/* Breadcrumbs */}
        <Breadcrumbs
          separator="/"
          sx={{
            "& .MuiBreadcrumbs-separator": {
              color: "#9ca3af",
              mx: 1,
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#6b7280",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Dashboards
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#111827",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Default
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Right section - Search and Action Icons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        {/* Search */}
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 1.5,
            py: 0.75,
            bgcolor: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            width: 256,
            boxShadow: "none",
            "&:hover": {
              border: "1px solid #d1d5db",
            },
          }}
        >
          <Search sx={{ fontSize: 16, color: "#9ca3af" }} />
          <InputBase
            placeholder="Search"
            sx={{
              flex: 1,
              fontSize: "14px",
              color: "#6b7280",
              "& .MuiInputBase-input::placeholder": {
                color: "#9ca3af",
                opacity: 1,
              },
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box
              component="kbd"
              sx={{
                px: 0.75,
                py: 0.25,
                fontSize: "11px",
                color: "#6b7280",
                bgcolor: "white",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                fontFamily: "monospace",
              }}
            >
              ⌘
            </Box>
            <Box
              component="kbd"
              sx={{
                px: 0.75,
                py: 0.25,
                fontSize: "11px",
                color: "#6b7280",
                bgcolor: "white",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                fontFamily: "monospace",
              }}
            >
              /
            </Box>
          </Box>
        </Paper>

        {/* Action Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {/* Settings */}
          <IconButton
            size="small"
            sx={{
              p: 0.75,
              color: "#6b7280",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <Settings sx={{ fontSize: 20 }} />
          </IconButton>

          {/* Refresh */}
          <IconButton
            size="small"
            sx={{
              p: 0.75,
              color: "#6b7280",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <Refresh sx={{ fontSize: 20 }} />
          </IconButton>

          {/* Notifications */}
          <IconButton
            size="small"
            sx={{
              p: 0.75,
              color: "#6b7280",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <Notifications sx={{ fontSize: 20 }} />
          </IconButton>

          {/* Fullscreen */}
          <IconButton
            size="small"
            sx={{
              p: 0.75,
              color: "#6b7280",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <Fullscreen sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;

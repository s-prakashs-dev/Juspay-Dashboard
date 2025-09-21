import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  FolderOpen,
  School,
  Person,
  Business,
  Article,
  Share,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      width="240px"
      borderRight="1px solid #e5e7eb"
      height="100vh"
      //   bgcolor="#fafafa"
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#d1d5db",
          borderRadius: "3px",
        },
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        p={2}
        pb={1}
        gap={2}
      >
        <Avatar
          alt="ByeWind"
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          sx={{ width: 32, height: 32 }}
        />
        <Typography
          variant="h6"
          fontWeight={600}
          color="#111827"
          fontSize="16px"
        >
          ByeWind
        </Typography>
      </Box>

      {/* Navigation Tabs */}
      <Box px={2} pt={1} pb={2}>
        <Box display="flex" gap={3}>
          <Typography
            variant="body2"
            color="#6b7280"
            fontSize="13px"
            sx={{ cursor: "pointer" }}
          >
            Favorites
          </Typography>
          <Typography
            variant="body2"
            color="#6b7280"
            fontSize="13px"
            sx={{ cursor: "pointer" }}
          >
            Recently
          </Typography>
        </Box>
      </Box>

      {/* Quick Links */}
      <Box px={2} pb={3}>
        <List dense sx={{ p: 0 }}>
          <ListItem
            sx={{
              px: 0,
              py: 0.5,
              cursor: "pointer",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 20, mr: 1.5 }}>
              <Box width={6} height={6} bgcolor="#f59e0b" borderRadius="50%" />
            </ListItemIcon>
            <ListItemText
              primary="Overview"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#374151",
                fontWeight: 400,
              }}
            />
          </ListItem>
          <ListItem
            sx={{
              px: 0,
              py: 0.5,
              cursor: "pointer",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 20, mr: 1.5 }}>
              <Box width={6} height={6} bgcolor="#10b981" borderRadius="50%" />
            </ListItemIcon>
            <ListItemText
              primary="Projects"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#374151",
                fontWeight: 400,
              }}
            />
          </ListItem>
        </List>
      </Box>

      {/* Dashboards Section */}
      <Box px={2} pb={2}>
        <Typography
          variant="caption"
          color="#9ca3af"
          fontSize="12px"
          fontWeight={500}
          textTransform="uppercase"
          letterSpacing="0.5px"
        >
          Dashboards
        </Typography>
      </Box>

      <Box px={2} pb={3}>
        <List dense sx={{ p: 0 }}>
          <ListItem
            sx={{
              px: 1,
              py: 0.75,
              cursor: "pointer",
              bgcolor: "#f3f4f6",
              borderRadius: "6px",
              mb: 0.5,
              "&:hover": {
                bgcolor: "#e5e7eb",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Dashboard sx={{ fontSize: 18, color: "#6b7280" }} />
            </ListItemIcon>
            <ListItemText
              primary="Default"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#111827",
                fontWeight: 500,
              }}
            />
          </ListItem>

          <ListItem
            sx={{
              px: 1,
              py: 0.75,
              cursor: "pointer",
              borderRadius: "6px",
              mb: 0.5,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <ShoppingCart sx={{ fontSize: 18, color: "#6b7280" }} />
            </ListItemIcon>
            <ListItemText
              primary="eCommerce"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#374151",
                fontWeight: 400,
              }}
            />
          </ListItem>

          <ListItem
            sx={{
              px: 1,
              py: 0.75,
              cursor: "pointer",
              borderRadius: "6px",
              mb: 0.5,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <FolderOpen sx={{ fontSize: 18, color: "#6b7280" }} />
            </ListItemIcon>
            <ListItemText
              primary="Projects"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#374151",
                fontWeight: 400,
              }}
            />
          </ListItem>

          <ListItem
            sx={{
              px: 1,
              py: 0.75,
              cursor: "pointer",
              borderRadius: "6px",
              mb: 0.5,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <School sx={{ fontSize: 18, color: "#6b7280" }} />
            </ListItemIcon>
            <ListItemText
              primary="Online Courses"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#374151",
                fontWeight: 400,
              }}
            />
          </ListItem>
        </List>
      </Box>

      {/* Pages Section */}
      <Box px={2} pb={2}>
        <Typography
          variant="caption"
          color="#9ca3af"
          fontSize="12px"
          fontWeight={500}
          textTransform="uppercase"
          letterSpacing="0.5px"
        >
          Pages
        </Typography>
      </Box>

      <Box px={2}>
        <List dense sx={{ p: 0 }}>
          {/* User Profile */}
          <ListItem
            sx={{
              px: 1,
              py: 0.75,
              cursor: "pointer",
              borderRadius: "6px",
              mb: 0.5,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Person sx={{ fontSize: 18, color: "#6b7280" }} />
            </ListItemIcon>
            <ListItemText
              primary="User Profile"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#374151",
                fontWeight: 400,
              }}
            />
          </ListItem>

          {/* User Profile Submenu */}
          <Box pl={4} pb={1}>
            <List dense sx={{ p: 0 }}>
              {[
                "Overview",
                "Projects",
                "Campaigns",
                "Documents",
                "Followers",
              ].map((item) => (
                <ListItem
                  key={item}
                  sx={{
                    px: 0,
                    py: 0.25,
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "13px",
                      color: "#6b7280",
                      fontWeight: 400,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Other Pages */}
          <ListItem
            sx={{
              px: 1,
              py: 0.75,
              cursor: "pointer",
              borderRadius: "6px",
              mb: 0.5,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Business sx={{ fontSize: 18, color: "#6b7280" }} />
            </ListItemIcon>
            <ListItemText
              primary="Account"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#374151",
                fontWeight: 400,
              }}
            />
          </ListItem>

          <ListItem
            sx={{
              px: 1,
              py: 0.75,
              cursor: "pointer",
              borderRadius: "6px",
              mb: 0.5,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Business sx={{ fontSize: 18, color: "#6b7280" }} />
            </ListItemIcon>
            <ListItemText
              primary="Corporate"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#374151",
                fontWeight: 400,
              }}
            />
          </ListItem>

          <ListItem
            sx={{
              px: 1,
              py: 0.75,
              cursor: "pointer",
              borderRadius: "6px",
              mb: 0.5,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Article sx={{ fontSize: 18, color: "#6b7280" }} />
            </ListItemIcon>
            <ListItemText
              primary="Blog"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#374151",
                fontWeight: 400,
              }}
            />
          </ListItem>

          <ListItem
            sx={{
              px: 1,
              py: 0.75,
              cursor: "pointer",
              borderRadius: "6px",
              mb: 0.5,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Share sx={{ fontSize: 18, color: "#6b7280" }} />
            </ListItemIcon>
            <ListItemText
              primary="Social"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#374151",
                fontWeight: 400,
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

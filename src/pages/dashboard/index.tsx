import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";
import { TrendingUp, TrendingDown } from "@mui/icons-material";

const Dashboard = () => {
  // Data for charts
  const barData = [
    { month: "Jan", projected: 20, actual: 18 },
    { month: "Feb", projected: 25, actual: 22 },
    { month: "Mar", projected: 22, actual: 20 },
    { month: "Apr", projected: 28, actual: 26 },
    { month: "May", projected: 18, actual: 16 },
    { month: "Jun", projected: 24, actual: 22 },
  ];

  const lineData = [
    { month: "Jan", current: 15, previous: 12 },
    { month: "Feb", current: 18, previous: 16 },
    { month: "Mar", current: 16, previous: 18 },
    { month: "Apr", current: 8, previous: 15 },
    { month: "May", current: 12, previous: 10 },
    { month: "Jun", current: 22, previous: 20 },
  ];

  const pieData = [
    { name: "Direct", value: 38.6, color: "#1f2937" },
    { name: "Affiliate", value: 22.5, color: "#10b981" },
    { name: "Sponsored", value: 30.1, color: "#8b5cf6" },
    { name: "E-mail", value: 8.8, color: "#06b6d4" },
  ];

  const topProducts = [
    {
      name: "ASOS Ridley High Waist",
      price: 79.49,
      quantity: 82,
      amount: 6518.18,
    },
    {
      name: "Marco Lightweight Shirt",
      price: 128.5,
      quantity: 37,
      amount: 4754.5,
    },
    { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
    { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
    { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
  ];

  const locationData = [
    { city: "New York", value: "72K" },
    { city: "San Francisco", value: "39K" },
    { city: "Sydney", value: "25K" },
    { city: "Singapore", value: "61K" },
  ];

  const StatCard = ({
    title,
    value,
    change,
    isPositive,
    bgColor = "#f8fafc",
  }) => (
    <Card sx={{ bgcolor: bgColor, boxShadow: "none", borderRadius: "15px" }}>
      <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
        <Typography
          variant="body2"
          sx={{ color: "#64748b", mb: 1, fontSize: "14px" }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, color: "#0f172a", fontSize: "28px" }}
          >
            {value}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography
              variant="caption"
              sx={{
                color: isPositive ? "#059669" : "#dc2626",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              {change}
            </Typography>
            {isPositive ? (
              <TrendingUp sx={{ fontSize: 16, color: "#059669" }} />
            ) : (
              <TrendingDown sx={{ fontSize: 16, color: "#dc2626" }} />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ p: 3, minHeight: "100vh" }}>
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: 600, color: "#0f172a" }}
      >
        eCommerce
      </Typography>

      {/* Top Stats Row */}
      <Grid container spacing={4} sx={{ mb: 3 }}>
        <Grid size={6}>
          <Grid container spacing={4}>
            <Grid size={6}>
              <StatCard
                title="Customers"
                value="3,781"
                change="+11.01%"
                isPositive={true}
                bgColor="#e3f5ff"
              />
            </Grid>
            <Grid size={6}>
              <StatCard
                title="Orders"
                value="1,219"
                change="-0.03%"
                bgColor="#f7f9fb"
                isPositive={false}
              />
            </Grid>
            <Grid size={6}>
              <StatCard
                title="Revenue"
                value="$695"
                change="+15.03%"
                bgColor="#f7f9fb"
                isPositive={true}
              />
            </Grid>
            <Grid size={6}>
              <StatCard
                title="Growth"
                value="30.1%"
                change="+6.08%"
                isPositive={true}
                bgColor="#e5ecf6"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={6}>
          <Grid container>
            {/* Projections vs Actuals Chart */}
            <Grid size={12}>
              <Card
                sx={{
                  boxShadow: "none",
                  bgcolor: "#f7f9fb",
                  borderRadius: "15px",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: 600, fontSize: "16px" }}
                  >
                    Projections vs Actuals
                  </Typography>
                  <ResponsiveContainer width="100%" height={160}>
                    <BarChart height={300} data={barData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" />

                      <YAxis axisLine={false} />
                      <Bar
                        dataKey="projected"
                        stackId="a"
                        fill="#a8c5da"
                        radius={2}
                        barSize={20}
                      />
                      <Bar
                        dataKey="actual"
                        stackId="a"
                        fill="#cfdeea"
                        radius={2}
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Revenue Line Chart */}
        <Grid size={8}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "15px",
              bgcolor: "#f7f9fb",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  //   justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, fontSize: "16px", borderRight: "1px solid #e2e8f0", paddingRight: "10px" }}
                >
                  Revenue
                </Typography>
                <Box sx={{ display: "flex", gap: 3 ,marginLeft: "10px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        bgcolor: "#1f2937",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ fontSize: "12px", color: "#64748b" }}
                    >
                      Current Week $58,211
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        bgcolor: "#94a3b8",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ fontSize: "12px", color: "#64748b" }}
                    >
                      Previous Week $68,768
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={lineData}>
                  <XAxis dataKey="month" />
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <YAxis axisLine={false} />
                  <Line
                    type="monotone"
                    dataKey="current"
                    stroke="#1f2937"
                    strokeWidth={2}
                    dot={false}
                    strokeDasharray="5 5"
                  />
                  <Line
                    type="monotone"
                    dataKey="previous"
                    stroke="#94a3b8"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "15px",
              bgcolor: "#f7f9fb",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600, fontSize: "16px" }}
              >
                Revenue by Location
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 120,
                    height: 60,
                    bgcolor: "#e2e8f0",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="caption" sx={{ color: "#64748b" }}>
                    World Map
                  </Typography>
                </Box>
              </Box>
              {locationData.map((location, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 0.5,
                  }}
                >
                  <Typography variant="body2" sx={{ fontSize: "14px" }}>
                    {location.city}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "14px", color: "#64748b" }}
                  >
                    {location.value}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
        {/* Top Selling Products */}
        <Grid size={8}>
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "15px",
              bgcolor: "#f7f9fb",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600, fontSize: "16px" }}
              >
                Top Selling Products
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: "#64748b",
                          fontSize: "12px",
                          fontWeight: 500,
                          border: "none",
                          pb: 1,
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#64748b",
                          fontSize: "12px",
                          fontWeight: 500,
                          border: "none",
                          pb: 1,
                        }}
                      >
                        Price
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#64748b",
                          fontSize: "12px",
                          fontWeight: 500,
                          border: "none",
                          pb: 1,
                        }}
                      >
                        Quantity
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#64748b",
                          fontSize: "12px",
                          fontWeight: 500,
                          border: "none",
                          pb: 1,
                        }}
                      >
                        Amount
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topProducts.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell
                          sx={{ border: "none", py: 1.5, fontSize: "14px" }}
                        >
                          {product.name}
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            py: 1.5,
                            fontSize: "14px",
                            color: "#64748b",
                          }}
                        >
                          ${product.price}
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            py: 1.5,
                            fontSize: "14px",
                            color: "#64748b",
                          }}
                        >
                          {product.quantity}
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "none",
                            py: 1.5,
                            fontSize: "14px",
                            color: "#64748b",
                          }}
                        >
                          ${product.amount.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Revenue by Location & Total Sales */}
        <Grid size={4}>
          <Grid container>
            {/* Total Sales */}
            <Grid size={12}>
              <Card
                sx={{
                  boxShadow: "none",
                  borderRadius: "15px",
                  bgcolor: "#f7f9fb",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: 600, fontSize: "16px" }}
                  >
                    Total Sales
                  </Typography>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <ResponsiveContainer width={120} height={120}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={35}
                          outerRadius={60}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px", fontWeight: 600 }}
                      >
                        38.6%
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: "#1f2937",
                            borderRadius: "50%",
                          }}
                        />
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          Direct
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "14px", color: "#64748b" }}
                      >
                        $300.56
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: "#10b981",
                            borderRadius: "50%",
                          }}
                        />
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          Affiliate
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "14px", color: "#64748b" }}
                      >
                        $135.18
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: "#8b5cf6",
                            borderRadius: "50%",
                          }}
                        />
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          Sponsored
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "14px", color: "#64748b" }}
                      >
                        $154.02
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: "#06b6d4",
                            borderRadius: "50%",
                          }}
                        />
                        <Typography variant="body2" sx={{ fontSize: "14px" }}>
                          E-mail
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "14px", color: "#64748b" }}
                      >
                        $48.96
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useNavigate } from "react-router";

const results = [
  { time: "10:00 AM", number: "588-1" },
  { time: "11:00 AM", number: "478-9" },
  { time: "12:00 PM", number: "***-**" },
  { time: "1:00 PM", number: "***-**" },

  { time: "2:00 PM", number: "***-**" },
  { time: "3:00 PM", number: "***-**" },
  { time: "4:00 PM", number: "***-**" },
  { time: "5:00 PM", number: "***-**" },

  { time: "6:00 PM", number: "***-**" },
  { time: "7:00 PM", number: "***-**" },
  { time: "8:00 PM", number: "***-**" },
  { time: "9:00 PM", number: "***-**" },
];

export default function StarlineResults() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: "#eef5f5",
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Heading */}
      <Box mb={4}>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "42px" },
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Starline Results
        </Typography>

        <Typography
          sx={{
            color: "#64748b",
            mt: 0.5,
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          Updated Every Hour
        </Typography>
      </Box>

      {/* Results Grid */}
      <Box
        sx={{
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid #e5e7eb",
        }}
      >
        <Grid container>
          {results.map((item, index) => (
            <Grid
              item
              size={{xs: 6,sm:4,md:3,lg:3}}
              key={index}
            >
              <Box
                sx={{
                  py: { xs: 3, md: 4 },
                  px: 2,
                  textAlign: "center",
                  borderRight: {
                    xs:
                      index % 2 !== 1
                        ? "1px solid #e5e7eb"
                        : "none",

                    sm:
                      index % 3 !== 2
                        ? "1px solid #e5e7eb"
                        : "none",

                    md:
                      index % 4 !== 3
                        ? "1px solid #e5e7eb"
                        : "none",
                         lg:
                      index % 4 !== 3
                        ? "1px solid #e5e7eb"
                        : "none",
                  },

                  borderBottom:
                    index < results.length - 2
                      ? "1px solid #e5e7eb"
                      : "none",

                  transition: "0.3s ease",

                  "&:hover": {
                    background: "#f8fafc",
                  },
                }}
              >
                {/* Time */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.5,
                    mb: 1,
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      fontSize: 14,
                      color: "#64748b",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "11px",
                        md: "13px",
                      },
                      color: "#64748b",
                      fontWeight: 500,
                    }}
                  >
                    {item.time}
                  </Typography>
                </Box>

                {/* Result */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      md: "30px",
                    },
                    fontWeight: 700,
                    color: "#1d66c2",
                    letterSpacing: 1,
                    lineHeight: 1,
                  }}
                >
                  {item.number}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Bottom Button */}
      <Button
        fullWidth
        startIcon={<BarChartIcon />}
        onClick={() => navigate("/starline-pana")}
        sx={{
          mt: 4,
          background: "#1d66c2",
          color: "#fff",
          borderRadius: "16px",
          py: 2,
          fontSize: {
            xs: "16px",
            md: "18px",
          },
          fontWeight: 700,
          textTransform: "none",
          boxShadow: "0 10px 25px rgba(29,102,194,0.25)",

          "&:hover": {
            background: "#1555a8",
          },
        }}
      >
        View Starline Chart
      </Button>
    </Box>
  );
}
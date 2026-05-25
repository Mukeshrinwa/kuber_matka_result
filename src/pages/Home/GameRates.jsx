import React, {
  useState,
  useEffect,
} from "react";

import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

import {
  fetchSettings,
} from "../../api/settingsApi";

import top from "../../assets/images/section-top.svg";
import bottom from "../../assets/images/section-bottom.svg";

export default function GameRates() {
  const [rates, setRates] =
    useState([]);

  useEffect(() => {
    const loadRates = async () => {
      try {
        const response =
          await fetchSettings();

        const multipliers =
          response?.data?.multipliers
            ?.main;

        if (multipliers) {
          const formattedRates = [
            {
              title: "Single Digit",
              rate: `1 RS KA ${multipliers.single_val_2} Rs`,
            },
            {
              title: "Jodi Digits",
              rate: `1 RS KA ${multipliers.pair_val_2} Rs`,
            },
            {
              title: "Red Brackets",
              rate: `1 RS KA ${multipliers.single_val_2} Rs`,
            },
            {
              title: "Single Pana",
              rate: `1 RS KA ${multipliers.single_code_2} Rs`,
            },
            {
              title: "Double Pana",
              rate: `1 RS KA ${multipliers.double_code_2} Rs`,
            },
            {
              title: "Triple Pana",
              rate: `1 RS KA ${multipliers.triple_code_2} Rs`,
            },
            {
              title: "Half Sangam A",
              rate: `1 RS KA ${multipliers.half_combo_2} Rs`,
            },
            {
              title: "Half Sangam B",
              rate: `1 RS KA ${multipliers.half_combo_2} Rs`,
            },
            {
              title: "Full Sangam",
              rate: `1 RS KA ${multipliers.full_combo_2} Rs`,
            },
          ];

          setRates(formattedRates);
        }
      } catch (error) {
        console.log(
          "Error loading rates"
        );
      }
    };

    loadRates();
  }, []);

  return (
    <Box
      id="rates-section"
      sx={{
        position: "relative",
        py: {
          xs: 6,
          md: 12,
        },
        px: {
          xs: 2,
          md: 4,
        },
        background: "#f2f2f2",
        overflow: "hidden",
      }}
    >
      {/* TOP SHAPE */}
      <Box
        component="img"
        src={top}
        alt="top"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          opacity: 0.7,
        }}
      />

      {/* FLOATING DOTS */}
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#f4d65e",
          position: "absolute",
          left: "6%",
          top: "38%",
        }}
      />

      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#f39a73",
          position: "absolute",
          left: "4%",
          bottom: "24%",
        }}
      />

      <Box
        sx={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "#89b8bc",
          position: "absolute",
          right: "5%",
          top: "30%",
        }}
      />

      <Box
        sx={{
          width: 74,
          height: 74,
          borderRadius: "50%",
          background: "#f1d35c",
          position: "absolute",
          right: "8%",
          bottom: "20%",
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          maxWidth: "1150px",
          margin: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontSize: {
              xs: "32px",
              md: "54px",
            },
            fontWeight: 700,
            color: "#17233c",
            mb: 5,
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          Game Rates
        </Typography>

        {/* GRID */}
        <Grid
          container
          spacing={2}
        >
          {rates.map(
            (item, index) => (
              <Grid
                key={index}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
              >
                <Box
                  sx={{
                    background: "#f8f8f8",
                    borderRadius: "8px",
                    minHeight: "90px",

                    display: "flex",
                    alignItems: "center",

                    px: 3,
                    py: 2,

                    boxShadow:
                      "0 2px 10px rgba(0,0,0,0.03)",

                    transition: "0.3s ease",

                    "&:hover": {
                      transform:
                        "translateY(-4px)",
                    },
                  }}
                >
                  {/* LEFT LINE */}
                  <Box
                    sx={{
                      width: "4px",
                      height: "60px",
                      background:
                        "#f1b22c",
                      borderRadius:
                        "20px",
                      mr: 3,
                      flexShrink: 0,
                    }}
                  />

                  {/* TEXT */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "22px",
                          md: "24px",
                        },
                        color: "#222",
                        fontWeight: 500,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        fontSize: {
                          xs: "16px",
                          md: "18px",
                        },
                        color: "#333",
                        fontWeight: 400,
                      }}
                    >
                      {item.rate}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            )
          )}
        </Grid>
      </Box>

      {/* BOTTOM SHAPE */}
      <Box
        component="img"
        src={bottom}
        alt="bottom"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          opacity: 0.7,
        }}
      />
    </Box>
  );
}
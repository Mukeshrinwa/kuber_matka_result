import React from "react";

import {
  Box,
  Typography,
  Stack,
  Divider,
} from "@mui/material";

import logo from "/logo.svg";

import top from "../../assets/images/section-top.svg";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",

        background: "#f2f2f2",

        overflow: "hidden",

        pt: {
          xs: 6,
          md: 8,
        },

        pb: {
          xs: 4,
          md: 5,
        },

        px: 2,
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
          opacity: 0.6,
        }}
      />

      {/* MAIN CONTENT */}

      <Box
        sx={{
          maxWidth: "1100px",

          margin: "auto",

          position: "relative",

          zIndex: 2,

          textAlign: "center",
        }}
      >
        {/* LOGO */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            mb: 5,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Sara777"
            sx={{
              width: {
                xs: "180px",
                md: "220px",
              },

              objectFit: "contain",
            }}
          />
        </Box>

        {/* 18+ */}

        <Typography
          sx={{
            color: "#f1b51c",

            fontWeight: 600,

            mb: 2,

            fontSize: {
              xs: "34px",
              md: "28px",
            },
          }}
        >
          18+
        </Typography>

        {/* WARNING */}

        <Typography
          sx={{
            color: "#444",

            mb: 6,

            lineHeight: 1.8,

            fontSize: {
              xs: "15px",
              md: "18px",
            },
          }}
        >
          Players need to be 18+
          in order to register.
          Underage gambling is
          prohibited.
        </Typography>

        {/* LOGOS */}

        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={{
            xs: 5,
            md: 14,
          }}
          alignItems="center"
          justifyContent="center"
          sx={{
            mb: 5,
          }}
        >
          {/* LEFT */}

          <Typography
            sx={{
              color: "#f1a71a",

              fontWeight: 700,

              lineHeight: 1,

              textAlign: "center",

              fontSize: {
                xs: "48px",
                md: "34px",
              },
            }}
          >
            BeGamble
            <br />
            Aware
            <Box
              component="span"
              sx={{
                fontWeight: 400,
              }}
            >
              .org
            </Box>
          </Typography>

          {/* RIGHT */}

          <Typography
            sx={{
              color: "#f1a71a",

              fontWeight: 700,

              lineHeight: 1,

              textAlign: "center",

              fontSize: {
                xs: "48px",
                md: "34px",
              },
            }}
          >
            gambling
            <br />
            therapy
          </Typography>
        </Stack>

        {/* LINKS */}

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
          sx={{
            mb: 5,
          }}
        >
          {[
            "Privacy Policy",
            "Data Deletion",
            "Terms & Conditions",
            "Disclaimer",
          ].map(
            (
              item,
              index
            ) => (
              <Typography
                key={index}
                sx={{
                  color:
                    "#666",

                  cursor:
                    "pointer",

                  transition:
                    "0.3s ease",

                  "&:hover":
                    {
                      color:
                        "#f1b51c",
                    },

                  fontSize:
                    {
                      xs: "14px",
                      md: "16px",
                    },
                }}
              >
                {item}
              </Typography>
            )
          )}
        </Stack>

        {/* DESC */}

        <Typography
          sx={{
            maxWidth: "1000px",

            margin: "auto",

            color: "#555",

            lineHeight: 2,

            mb: 5,

            fontSize: {
              xs: "14px",
              md: "16px",
            },
          }}
        >
          Our website is operated
          by Sara International,
          a company established
          under the law of Isle
          of Man, with registered
          address at 1-10 Ballanoa
          Meadow IM4-2HT, Isle
          Of Man, and having its
          gaming sublicense issued
          by Isle of Man e-Gaming
          and all rights to
          operate the gaming
          software worldwide.
        </Typography>

        {/* DIVIDER */}

        <Divider
          sx={{
            mb: 4,
          }}
        />

        {/* COPYRIGHT */}

        <Typography
          sx={{
            color: "#555",

            fontWeight: 400,

            fontSize: {
              xs: "14px",
              md: "16px",
            },
          }}
        >
          Copyright © 2025
          Sara777. All Rights
          Reserved
        </Typography>
      </Box>
    </Box>
  );
}
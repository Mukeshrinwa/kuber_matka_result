"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Stack,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function DownloadAppSection() {
  const features = [
    "Real-Time Live Results",
    "Best Market Rates Guaranteed",
    "Secure & Encrypted",
    "Instant Bank Withdrawals",
  ];

  return (
    <Box
      sx={{
        background: "#1f6fc6",
        overflow: "hidden",
        position: "relative",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 6, lg: 10 },
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
      >
        {/* LEFT CONTENT */}
        <Grid item xs={12} lg={6}>
          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              px: 2.5,
              py: 1,
              borderRadius: "40px",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              WELCOME TO MatkaFun
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontSize: {
                xs: "42px",
                sm: "54px",
                md: "72px",
              },
              lineHeight: 1.1,
              fontWeight: 800,
              color: "#fff",
              maxWidth: "650px",
            }}
          >
            Download The
            <br />
            <Box
              component="span"
              sx={{
                color: "#ffd11a",
              }}
            >
              MatkaFun
            </Box>{" "}
            App
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              mt: 3,
              color: "rgba(255,255,255,0.95)",
              fontSize: {
                xs: "16px",
                md: "20px",
              },
              lineHeight: 1.7,
              maxWidth: "700px",
            }}
          >
            Get Instant Access To Live Results,
            Play Your Favorite Markets,
            And Withdraw Winnings Directly
            To Your Bank Account.
            Available For Android Devices
          </Typography>

          {/* Features */}
          <Grid
            container
            spacing={2}
            sx={{
              mt: 3,
              maxWidth: "700px",
            }}
          >
            {features.map((feature, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
              >
                <Stack
                  direction="row"
                  spacing={1.2}
                  alignItems="center"
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      color: "#fff",
                      fontSize: 20,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: {
                        xs: "15px",
                        md: "16px",
                      },
                    }}
                  >
                    {feature}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* Buttons */}
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            sx={{
              mt: 5,
              width: "100%",
              maxWidth: "620px",
            }}
          >
            {/* Download */}
            <Button
              startIcon={<DownloadIcon />}
              fullWidth
              sx={{
                background: "#ffd11a",
                color: "#111827",
                borderRadius: "14px",
                py: 1.8,
                fontWeight: 800,
                textTransform: "none",
                fontSize: "16px",
                boxShadow:
                  "0 12px 25px rgba(255,209,26,0.3)",

                "&:hover": {
                  background: "#ffc400",
                },
              }}
            >
              Download App
            </Button>

            {/* Safe Download */}
            <Button
              startIcon={<DownloadIcon />}
              fullWidth
              sx={{
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                borderRadius: "14px",
                py: 1.8,
                fontWeight: 700,
                textTransform: "none",
                fontSize: "16px",
                backdropFilter: "blur(12px)",
                border:
                  "1px solid rgba(255,255,255,0.08)",

                "&:hover": {
                  background:
                    "rgba(255,255,255,0.14)",
                },
              }}
            >
              Safe Download
            </Button>
          </Stack>
        </Grid>

        {/* RIGHT SIDE MOBILE FRAME */}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Phone Frame */}
          <Box
            sx={{
              width: {
                xs: 280,
                sm: 320,
                md: 360,
              },
              height: {
                xs: 560,
                sm: 640,
                md: 720,
              },
              background: "#111827",
              borderRadius: "42px",
              p: "10px",
              position: "relative",
              boxShadow:
                "0 30px 60px rgba(0,0,0,0.35)",
              border:
                "3px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Top Notch */}
            <Box
              sx={{
                position: "absolute",
                top: 14,
                left: "50%",
                transform: "translateX(-50%)",
                width: 120,
                height: 28,
                background: "#000",
                borderRadius: "30px",
                zIndex: 10,
              }}
            />

            {/* Screen */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "34px",
                overflow: "hidden",
                position: "relative",
                background: "#000",
              }}
            >
              {/* Background Image */}
              {/* <Box
                component="img"
                src="/videoframes.png"
                alt="frame"
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                }}
              /> */}

              {/* Video */}
              <Box
                component="video"
                autoPlay
                muted
                loop
                playsInline
                src="/video2.mp4"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 0,
                }}
              />
            </Box>

            {/* Side Buttons */}
            <Box
              sx={{
                position: "absolute",
                left: -4,
                top: 120,
                width: 4,
                height: 80,
                background:
                  "rgba(255,255,255,0.2)",
                borderRadius: "10px",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                right: -4,
                top: 180,
                width: 4,
                height: 120,
                background:
                  "rgba(255,255,255,0.2)",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
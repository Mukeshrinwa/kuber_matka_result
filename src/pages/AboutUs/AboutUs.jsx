import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Stack,
} from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function AboutUs() {
  return (
    <Box
      sx={{
        background: "#eef7f8",
        minHeight: "100vh",
        py: {
          xs: 4,
          md: 6,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Wrapper */}
        <Box>
          {/* Heading */}
          <Typography
            sx={{
              fontSize: {
                xs: "40px",
                sm: "52px",
                md: "64px",
              },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.1,
              mb: 1.5,
            }}
          >
            About Us
          </Typography>

          {/* Small Text */}
          <Typography
            sx={{
              color: "#4b5563",
              fontSize: {
                xs: "13px",
                sm: "15px",
              },
              lineHeight: 1.8,
              mb: {
                xs: 4,
                md: 5,
              },
            }}
          >
            Kalyan, Main Bazar Jodi Chart Satta MatkaFun Record Old History
            Historical Data Bracket Results Chart Online Live Book Digits
            Numbers
          </Typography>

          {/* Paragraph */}
          <Typography
            sx={{
              color: "#374151",
              fontSize: {
                xs: "15px",
                sm: "17px",
              },
              lineHeight: 1.9,
              mb: 5,
              maxWidth: "1200px",
            }}
          >
            MatkaFun is operated by S S international, a company incorporated
            under the laws of United Kingdom and regulated by the UK authority
            as the regulatory body responsible holding a (Sub-license with
            License number 392/JAZ Sub-License GLH- OCHCKTV0707086017 granted
            on 21.08.2020).
          </Typography>

          {/* Big Heading */}
          <Typography
            sx={{
              fontSize: {
                xs: "28px",
                sm: "40px",
                md: "52px",
              },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              maxWidth: "1100px",
              mb: 4,
            }}
          >
            MatkaFun is into existence for past 30 years with more than 1.38
            lac + members.
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: "#374151",
              fontSize: {
                xs: "15px",
                sm: "17px",
              },
              lineHeight: 1.9,
              maxWidth: "1200px",
              mb: 5,
            }}
          >
            We have proudly taken our culture from offline to online business
            and now stand as India's most trusted betting platform. MatkaFun is
            an international betting platform and has presence in more than 18
            countries. We truly value our customers and our endeavor is to
            provide best customer service and enable our customers to play
            online games with ease.
          </Typography>

          {/* Bottom Alert Box */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: "16px",
              border: "1px solid #d1d5db",
              background: "#f8f8f8",
              px: {
                xs: 2,
                sm: 3,
              },
              py: 2,
            }}
          >
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
            >
              <InfoOutlinedIcon
                sx={{
                  color: "#111827",
                  fontSize: 24,
                }}
              />

              <Typography
                sx={{
                  color: "#374151",
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                  },
                  lineHeight: 1.7,
                }}
              >
                Players are requested not to contact any untrusted sources for
                MatkaFun accounts.
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
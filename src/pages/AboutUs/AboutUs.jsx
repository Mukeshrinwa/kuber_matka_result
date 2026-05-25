import React from "react";
import { Box, Typography, Container, Paper, Stack } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function AboutUs() {
  return (
    <Box
      sx={{
        background: "transparent",
        minHeight: "100vh",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box>
          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: "40px", sm: "52px", md: "64px" },
              fontWeight: 800,
              background: "linear-gradient(135deg, #fff, #00f0ff, #7b61ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.1,
              mb: 1.5,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            About Us
          </Typography>

          {/* Small Text */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.45)",
              fontSize: { xs: "13px", sm: "15px" },
              lineHeight: 1.8,
              mb: { xs: 4, md: 5 },
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Kalyan, Main Bazar Jodi Chart Satta MatkaFun Record Old History
            Historical Data Bracket Results Chart Online Live Book Digits Numbers
          </Typography>

          {/* Paragraph */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.65)",
              fontSize: { xs: "15px", sm: "17px" },
              lineHeight: 1.9,
              mb: 5,
              maxWidth: "1200px",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            MatkaFun is operated by S S international, a company incorporated under
            the laws of United Kingdom and regulated by the UK authority as the
            regulatory body responsible holding a (Sub-license with License number
            392/JAZ Sub-License GLH- OCHCKTV0707086017 granted on 21.08.2020).
          </Typography>

          {/* Big Heading */}
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "40px", md: "52px" },
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.2,
              maxWidth: "1100px",
              mb: 4,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            MatkaFun is into existence for past 30 years with more than{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #ffd700, #ffaa00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              1.38 lac+
            </Box>{" "}
            members.
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: { xs: "15px", sm: "17px" },
              lineHeight: 1.9,
              maxWidth: "1200px",
              mb: 5,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            We have proudly taken our culture from offline to online business and
            now stand as India's most trusted betting platform. MatkaFun is an
            international betting platform and has presence in more than 18
            countries. We truly value our customers and our endeavor is to provide
            best customer service and enable our customers to play online games with
            ease.
          </Typography>

          {/* Bottom Alert Box */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: "16px",
              border: "1px solid rgba(0, 240, 255, 0.12)",
              background: "rgba(15, 20, 40, 0.5)",
              backdropFilter: "blur(16px)",
              px: { xs: 2, sm: 3 },
              py: 2.5,
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <InfoOutlinedIcon sx={{ color: "#00f0ff", fontSize: 24 }} />
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: { xs: "14px", sm: "15px" },
                  lineHeight: 1.7,
                  fontFamily: "'Outfit', sans-serif",
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
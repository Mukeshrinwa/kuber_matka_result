import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import logoImg from "../../assets/images/newlogo.jpeg";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AndroidIcon from "@mui/icons-material/Android";

export default function Footer() {
  const quickLinks = ["Home", "Games", "Charts", "Game Rates", "FAQ"];
  const policyLinks = ["Privacy Policy", "Data Deletion", "Terms & Conditions", "Disclaimer"];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "linear-gradient(180deg, transparent 0%, #06080f 12%)",
        overflow: "hidden",
        pt: { xs: 8, md: 10 },
        pb: 0,
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Top glow line */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #00f0ff, #7b61ff, #ff6ec7, transparent)",
          opacity: 0.6,
        }}
      />

      {/* Decorative floating diamonds */}
      <Box
        sx={{
          position: "absolute",
          width: 70,
          height: 70,
          background: "linear-gradient(135deg, rgba(0, 240, 255, 0.05), rgba(123, 97, 255, 0.05))",
          transform: "rotate(45deg)",
          borderRadius: "10px",
          top: "15%",
          left: "5%",
          animation: "diamond-spin 20s linear infinite",
          "@keyframes diamond-spin": {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 45,
          height: 45,
          background: "linear-gradient(135deg, rgba(255, 110, 199, 0.05), rgba(255, 215, 0, 0.05))",
          transform: "rotate(45deg)",
          borderRadius: "6px",
          bottom: "25%",
          right: "7%",
          animation: "diamond-spin 25s linear infinite reverse",
        }}
      />

      {/* ===== MAIN FOOTER CONTENT ===== */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* 3-Column Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr 1fr" },
            gap: { xs: 5, md: 6 },
            pb: { xs: 5, md: 6 },
          }}
        >
          {/* ── Column 1: Brand ── */}
          <Box>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
              <Box
                component="img"
                src={logoImg}
                alt="Kuber Matka Logo"
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "14px",
                  objectFit: "cover",
                  boxShadow: "0 0 25px rgba(0, 240, 255, 0.25)",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "22px", md: "26px" },
                  fontWeight: 800,
                  fontFamily: "'Orbitron', sans-serif",
                  background: "linear-gradient(135deg, #fff, #00f0ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "2px",
                }}
              >
                KUBER MATKA
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "14px",
                lineHeight: 1.9,
                mb: 3,
                maxWidth: "360px",
              }}
            >
              Your premier destination for exciting online gaming. We provide a vast variety of Jodi games with fair play and transparency.
            </Typography>

            {/* Download Button */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 3,
                py: 1.2,
                borderRadius: "50px",
                background: "linear-gradient(135deg, rgba(0, 240, 255, 0.12), rgba(123, 97, 255, 0.12))",
                border: "1px solid rgba(0, 240, 255, 0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(123, 97, 255, 0.2))",
                  borderColor: "rgba(0, 240, 255, 0.4)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(0, 240, 255, 0.15)",
                },
              }}
            >
              <AndroidIcon sx={{ color: "#00f0ff", fontSize: 20 }} />
              <Typography sx={{ color: "#00f0ff", fontSize: "13px", fontWeight: 600, letterSpacing: "0.5px" }}>
                Download App
              </Typography>
            </Box>
          </Box>

          {/* ── Column 2: Quick Links + Responsible Gaming ── */}
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#fff",
                mb: 2.5,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "1px",
                textTransform: "uppercase",
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  width: "30px",
                  height: "2px",
                  background: "linear-gradient(90deg, #00f0ff, transparent)",
                  borderRadius: "2px",
                },
              }}
            >
              Quick Links
            </Typography>

            <Stack spacing={1.2} sx={{ mb: 4 }}>
              {quickLinks.map((link, i) => (
                <Typography
                  key={i}
                  sx={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": {
                      color: "#00f0ff",
                      pl: 0.5,
                    },
                    "&::before": {
                      content: '"›"',
                      color: "rgba(0, 240, 255, 0.4)",
                      fontWeight: 700,
                      fontSize: "16px",
                      transition: "all 0.3s ease",
                    },
                    "&:hover::before": {
                      color: "#00f0ff",
                    },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Stack>

            {/* Responsible Gaming Badges */}
            <Stack direction="row" spacing={1.5}>
              <Box
                sx={{
                  px: 2,
                  py: 1.2,
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 215, 0, 0.12)",
                }}
              >
                <Typography
                  sx={{
                    background: "linear-gradient(135deg, #ffd700, #ffaa00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    textAlign: "center",
                    fontSize: "13px",
                  }}
                >
                  BeGamble
                  <br />
                  Aware<Box component="span" sx={{ fontWeight: 400 }}>.org</Box>
                </Typography>
              </Box>

              <Box
                sx={{
                  px: 2,
                  py: 1.2,
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(123, 97, 255, 0.12)",
                }}
              >
                <Typography
                  sx={{
                    background: "linear-gradient(135deg, #7b61ff, #00f0ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    textAlign: "center",
                    fontSize: "13px",
                  }}
                >
                  gambling
                  <br />
                  therapy
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* ── Column 3: Contact + 18+ ── */}
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#fff",
                mb: 2.5,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "1px",
                textTransform: "uppercase",
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  width: "30px",
                  height: "2px",
                  background: "linear-gradient(90deg, #7b61ff, transparent)",
                  borderRadius: "2px",
                },
              }}
            >
              Contact Us
            </Typography>

            <Stack spacing={1.5} sx={{ mb: 3 }}>
              {/* Phone */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2,
                  py: 1.2,
                  borderRadius: "12px",
                  background: "rgba(255, 107, 107, 0.06)",
                  border: "1px solid rgba(255, 107, 107, 0.12)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(255, 107, 107, 0.12)",
                    borderColor: "rgba(255, 107, 107, 0.25)",
                  },
                }}
              >
                <CallIcon sx={{ color: "#ff6b6b", fontSize: 18 }} />
                <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: 500 }}>
                  +91 91222 57775
                </Typography>
              </Box>

              {/* WhatsApp */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2,
                  py: 1.2,
                  borderRadius: "12px",
                  background: "rgba(37, 211, 102, 0.06)",
                  border: "1px solid rgba(37, 211, 102, 0.12)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(37, 211, 102, 0.12)",
                    borderColor: "rgba(37, 211, 102, 0.25)",
                  },
                }}
              >
                <WhatsAppIcon sx={{ color: "#25d366", fontSize: 18 }} />
                <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: 500 }}>
                  WhatsApp Us
                </Typography>
              </Box>
            </Stack>

            {/* 18+ Badge */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(255, 215, 0, 0.12), rgba(255, 170, 0, 0.12))",
                  border: "2px solid rgba(255, 215, 0, 0.25)",
                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    color: "#ffd700",
                    fontWeight: 800,
                    fontSize: "14px",
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  18+
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "12px",
                  lineHeight: 1.5,
                }}
              >
                Players need to be 18+ to register.
                <br />
                Underage gambling is prohibited.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ===== BOTTOM BAR ===== */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            pt: 3,
            pb: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Copyright */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "13px",
              fontFamily: "'Outfit', sans-serif",
              order: { xs: 2, md: 1 },
            }}
          >
            © 2025 Kuber Matka. All Rights Reserved
          </Typography>

          {/* Policy Links */}
          <Stack
            direction="row"
            spacing={0.5}
            flexWrap="wrap"
            justifyContent="center"
            sx={{ order: { xs: 1, md: 2 } }}
          >
            {policyLinks.map((item, index) => (
              <React.Fragment key={index}>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontSize: "12px",
                    px: 1,
                    py: 0.3,
                    borderRadius: "6px",
                    "&:hover": {
                      color: "#00f0ff",
                      background: "rgba(0, 240, 255, 0.05)",
                    },
                  }}
                >
                  {item}
                </Typography>
                {index < policyLinks.length - 1 && (
                  <Typography sx={{ color: "rgba(255,255,255,0.1)", fontSize: "12px", alignSelf: "center" }}>
                    •
                  </Typography>
                )}
              </React.Fragment>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
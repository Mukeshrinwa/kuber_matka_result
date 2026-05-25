import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(180deg, transparent 0%, rgba(6, 8, 15, 0.98) 15%)",
        overflow: "hidden",
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 5 },
        px: 2,
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
          opacity: 0.5,
        }}
      />

      {/* Decorative diamond shapes */}
      <Box
        sx={{
          position: "absolute",
          width: 60,
          height: 60,
          background: "linear-gradient(135deg, rgba(0, 240, 255, 0.06), rgba(123, 97, 255, 0.06))",
          transform: "rotate(45deg)",
          borderRadius: "8px",
          top: "20%",
          left: "8%",
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
          width: 40,
          height: 40,
          background: "linear-gradient(135deg, rgba(255, 110, 199, 0.06), rgba(255, 215, 0, 0.06))",
          transform: "rotate(45deg)",
          borderRadius: "4px",
          bottom: "30%",
          right: "10%",
          animation: "diamond-spin 25s linear infinite reverse",
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
            alignItems: "center",
            gap: 1.5,
            mb: 4,
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "12px",
              background: "linear-gradient(135deg, #00f0ff, #7b61ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 25px rgba(0, 240, 255, 0.3)",
            }}
          >
            <DiamondIcon sx={{ color: "#fff", fontSize: 24 }} />
          </Box>
          <Typography
            sx={{
              fontSize: "28px",
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

        {/* 18+ Badge */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 170, 0, 0.15))",
            border: "2px solid rgba(255, 215, 0, 0.3)",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              color: "#ffd700",
              fontWeight: 800,
              fontSize: "18px",
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            18+
          </Typography>
        </Box>

        {/* WARNING */}
        <Typography
          sx={{
            color: "rgba(255,255,255,0.5)",
            mb: 5,
            lineHeight: 1.8,
            fontSize: { xs: "14px", md: "16px" },
            maxWidth: "500px",
            margin: "auto",
            mb: 5,
          }}
        >
          Players need to be 18+ in order to register. Underage gambling is prohibited.
        </Typography>

        {/* RESPONSIBLE GAMING LOGOS */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 10 }}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 5 }}
        >
          <Box
            sx={{
              px: 4,
              py: 2,
              borderRadius: "16px",
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
                lineHeight: 1.2,
                textAlign: "center",
                fontSize: { xs: "24px", md: "22px" },
              }}
            >
              BeGamble
              <br />
              Aware
              <Box component="span" sx={{ fontWeight: 400 }}>
                .org
              </Box>
            </Typography>
          </Box>

          <Box
            sx={{
              px: 4,
              py: 2,
              borderRadius: "16px",
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
                lineHeight: 1.2,
                textAlign: "center",
                fontSize: { xs: "24px", md: "22px" },
              }}
            >
              gambling
              <br />
              therapy
            </Typography>
          </Box>
        </Stack>

        {/* LINKS */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
          sx={{ mb: 5 }}
        >
          {["Privacy Policy", "Data Deletion", "Terms & Conditions", "Disclaimer"].map(
            (item, index) => (
              <Typography
                key={index}
                sx={{
                  color: "rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontSize: { xs: "13px", md: "14px" },
                  px: 1,
                  py: 0.5,
                  borderRadius: "8px",
                  "&:hover": {
                    color: "#00f0ff",
                    background: "rgba(0, 240, 255, 0.05)",
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
            maxWidth: "900px",
            margin: "auto",
            color: "rgba(255,255,255,0.3)",
            lineHeight: 2,
            mb: 4,
            fontSize: { xs: "13px", md: "14px" },
          }}
        >
          Our website is operated by Kuber Matka International, a company established under the law of
          Isle of Man, with registered address at 1-10 Ballanoa Meadow IM4-2HT, Isle Of Man,
          and having its gaming sublicense issued by Isle of Man e-Gaming and all rights to
          operate the gaming software worldwide.
        </Typography>

        {/* DIVIDER */}
        <Box
          sx={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.2), rgba(123, 97, 255, 0.2), transparent)",
            mb: 3,
          }}
        />

        {/* COPYRIGHT */}
        <Typography
          sx={{
            color: "rgba(255,255,255,0.3)",
            fontWeight: 400,
            fontSize: { xs: "13px", md: "14px" },
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Copyright © 2025 Kuber Matka. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}
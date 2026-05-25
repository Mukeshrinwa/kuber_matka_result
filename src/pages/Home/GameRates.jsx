import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { fetchSettings } from "../../api/settingsApi";
import DiamondIcon from "@mui/icons-material/Diamond";

const rateIcons = ["💎", "🔥", "⚡", "🎯", "✨", "💰", "🏆", "🎲", "👑"];
const rateColors = [
  { border: "rgba(0, 240, 255, 0.2)", glow: "rgba(0, 240, 255, 0.08)", accent: "#00f0ff" },
  { border: "rgba(123, 97, 255, 0.2)", glow: "rgba(123, 97, 255, 0.08)", accent: "#7b61ff" },
  { border: "rgba(255, 110, 199, 0.2)", glow: "rgba(255, 110, 199, 0.08)", accent: "#ff6ec7" },
  { border: "rgba(255, 215, 0, 0.2)", glow: "rgba(255, 215, 0, 0.08)", accent: "#ffd700" },
  { border: "rgba(0, 240, 255, 0.2)", glow: "rgba(0, 240, 255, 0.08)", accent: "#00f0ff" },
  { border: "rgba(123, 97, 255, 0.2)", glow: "rgba(123, 97, 255, 0.08)", accent: "#7b61ff" },
  { border: "rgba(255, 110, 199, 0.2)", glow: "rgba(255, 110, 199, 0.08)", accent: "#ff6ec7" },
  { border: "rgba(255, 215, 0, 0.2)", glow: "rgba(255, 215, 0, 0.08)", accent: "#ffd700" },
  { border: "rgba(0, 240, 255, 0.2)", glow: "rgba(0, 240, 255, 0.08)", accent: "#00f0ff" },
];

export default function GameRates() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const loadRates = async () => {
      try {
        const response = await fetchSettings();
        const multipliers = response?.data?.multipliers?.main;
        if (multipliers) {
          const formattedRates = [
            { title: "Single Digit", rate: `1 RS KA ${multipliers.single_val_2} Rs` },
            { title: "Jodi Digits", rate: `1 RS KA ${multipliers.pair_val_2} Rs` },
            { title: "Red Brackets", rate: `1 RS KA ${multipliers.single_val_2} Rs` },
            { title: "Single Pana", rate: `1 RS KA ${multipliers.single_code_2} Rs` },
            { title: "Double Pana", rate: `1 RS KA ${multipliers.double_code_2} Rs` },
            { title: "Triple Pana", rate: `1 RS KA ${multipliers.triple_code_2} Rs` },
            { title: "Half Sangam A", rate: `1 RS KA ${multipliers.half_combo_2} Rs` },
            { title: "Half Sangam B", rate: `1 RS KA ${multipliers.half_combo_2} Rs` },
            { title: "Full Sangam", rate: `1 RS KA ${multipliers.full_combo_2} Rs` },
          ];
          setRates(formattedRates);
        }
      } catch (error) {
        console.log("Error loading rates");
      }
    };
    loadRates();
  }, []);

  return (
    <Box
      id="rates-section"
      sx={{
        position: "relative",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        background: "transparent",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          width: 100,
          height: 100,
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          left: "5%",
          top: "20%",
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-20px)" },
          },
        }}
      />

      <Box
        sx={{
          maxWidth: "1150px",
          margin: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* TITLE */}
        <Box sx={{ mb: 5, textAlign: { xs: "center", md: "left" } }}>
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "12px",
                background: "linear-gradient(135deg, rgba(255, 215, 0, 0.12), rgba(255, 170, 0, 0.12))",
                border: "1px solid rgba(255, 215, 0, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "22px" }}>💎</Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#ffd700",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Premium Rates
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "52px" },
              fontWeight: 800,
              background: "linear-gradient(135deg, #ffd700, #ffaa00, #ffd700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.1,
            }}
          >
            Game Rates
          </Typography>
        </Box>

        {/* GRID */}
        <Grid container spacing={2}>
          {rates.map((item, index) => {
            const colorSet = rateColors[index % rateColors.length];
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{
                    background: "rgba(15, 20, 40, 0.5)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "14px",
                    border: `1px solid ${colorSet.border}`,
                    minHeight: "100px",
                    display: "flex",
                    alignItems: "center",
                    px: 3,
                    py: 2.5,
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    position: "relative",
                    overflow: "hidden",
                    animation: `fadeInUp 0.5s ease ${index * 0.06}s both`,
                    "@keyframes fadeInUp": {
                      from: { opacity: 0, transform: "translateY(20px)" },
                      to: { opacity: 1, transform: "translateY(0)" },
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: `linear-gradient(90deg, transparent, ${colorSet.accent}, transparent)`,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-4px) scale(1.02)",
                      background: colorSet.glow,
                      boxShadow: `0 15px 35px rgba(0,0,0,0.3), 0 0 20px ${colorSet.glow}`,
                      "&::before": { opacity: 1 },
                    },
                  }}
                >
                  {/* ICON */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      background: colorSet.glow,
                      border: `1px solid ${colorSet.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2.5,
                      flexShrink: 0,
                      fontSize: "22px",
                    }}
                  >
                    {rateIcons[index]}
                  </Box>

                  {/* TEXT */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "20px" },
                        color: "#fff",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.5,
                        fontSize: { xs: "14px", md: "15px" },
                        color: colorSet.accent,
                        fontWeight: 500,
                        fontFamily: "'Outfit', sans-serif",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {item.rate}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
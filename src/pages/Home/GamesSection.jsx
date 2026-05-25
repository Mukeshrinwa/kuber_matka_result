"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import DiamondIcon from "@mui/icons-material/Diamond";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { useNavigate } from "react-router";
import { fetchResult } from "../../api/resultApi";
import { formatMarketResults } from "../../utils/resultFormatter";

const isToday = (item) => {
  if (!item.from || !item.to) return false;
  const now = new Date().getTime();
  const from = new Date(item.from).getTime();
  const to = new Date(item.to).getTime();
  return now >= from && now <= to;
};

/* ── Countdown helper component ── */
function CloseCountdown({ closeTime }) {
  const [timeLeft, setTimeLeft] = useState("");
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (!closeTime) return;

    const calcRemaining = () => {
      const now = new Date();
      const [h, m] = closeTime.split(":").map(Number);
      const target = new Date();
      target.setHours(h, m, 0, 0);

      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setExpired(true);
        setTimeLeft("00:00:00");
        return;
      }

      setExpired(false);
      const hrs = Math.floor(diff / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setTimeLeft(
        `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
      );
    };

    calcRemaining();
    const interval = setInterval(calcRemaining, 1000);
    return () => clearInterval(interval);
  }, [closeTime]);

  if (expired) {
    return (
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.8,
          px: 1.5,
          py: 0.6,
          borderRadius: "10px",
          background: "rgba(255, 215, 0, 0.08)",
          border: "1px solid rgba(255, 215, 0, 0.2)",
          animation: "pulse-badge 2s ease-in-out infinite",
          "@keyframes pulse-badge": {
            "0%, 100%": { boxShadow: "0 0 0px rgba(255, 215, 0, 0)" },
            "50%": { boxShadow: "0 0 12px rgba(255, 215, 0, 0.15)" },
          },
        }}
      >
        <AccessTimeRoundedIcon sx={{ fontSize: 14, color: "#ffd700" }} />
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 700,
            color: "#ffd700",
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: "0.5px",
          }}
        >
          Awaiting Result
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.8,
        px: 1.5,
        py: 0.6,
        borderRadius: "10px",
        background: "rgba(0, 240, 255, 0.06)",
        border: "1px solid rgba(0, 240, 255, 0.15)",
      }}
    >
      <AccessTimeRoundedIcon sx={{ fontSize: 14, color: "#00f0ff" }} />
      <Typography
        sx={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#00f0ff",
          fontFamily: "'Orbitron', sans-serif",
          letterSpacing: "1.5px",
        }}
      >
        {timeLeft}
      </Typography>
    </Box>
  );
}

export default function MarketResults() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const enrollmentNo =
          localStorage.getItem("enrollmentNo") || "your-enrollment-no";
        const response = await fetchResult(enrollmentNo);
        if (response && response.data) {
          const todayResults = response.data.filter((item) => isToday(item));
          const formattedGames = formatMarketResults(todayResults);
          setGames(formattedGames);
        }
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /* Check if close result is pending */
  const isClosePending = (game) => {
    return (
      (!game.close_code || game.close_code === "-" || game.close_code === "*") &&
      (!game.close_value || game.close_value === "-" || game.close_value === "*")
    );
  };

  return (
    <Box
      id="markets-section"
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
          width: 80,
          height: 80,
          background: "linear-gradient(135deg, rgba(0, 240, 255, 0.04), rgba(123, 97, 255, 0.04))",
          transform: "rotate(45deg)",
          borderRadius: "12px",
          right: "5%",
          top: "15%",
          animation: "diamond-spin 20s linear infinite",
          "@keyframes diamond-spin": {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
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
                background: "linear-gradient(135deg, rgba(0, 240, 255, 0.12), rgba(123, 97, 255, 0.12))",
                border: "1px solid rgba(0, 240, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DiamondIcon sx={{ color: "#00f0ff", fontSize: 22 }} />
            </Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#00f0ff",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Live Markets
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "52px" },
              fontWeight: 800,
              background: "linear-gradient(135deg, #fff, #00f0ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.1,
            }}
          >
            Games
          </Typography>
        </Box>

        {/* LOADING */}
        {loading ? (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                margin: "auto",
                mb: 2,
                border: "3px solid rgba(0, 240, 255, 0.2)",
                borderTopColor: "#00f0ff",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
                "@keyframes spin": {
                  to: { transform: "rotate(360deg)" },
                },
              }}
            />
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Outfit', sans-serif" }}>
              Loading games...
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={2.5}>
            {games.map((game, index) => {
              const closePending = isClosePending(game);
              const closeTime = game.market_id?.close_time;

              return (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    sx={{
                      background: "rgba(15, 20, 40, 0.6)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(0, 240, 255, 0.08)",
                      borderRadius: "16px",
                      p: 2.5,
                      height: "260px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      position: "relative",
                      overflow: "hidden",
                      animation: `fadeInUp 0.5s ease ${index * 0.08}s both`,
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
                        background: "linear-gradient(90deg, transparent, #00f0ff, transparent)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "rgba(0, 240, 255, 0.2)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 240, 255, 0.08)",
                        "&::before": { opacity: 1 },
                      },
                    }}
                  >
                    {/* TOP */}
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: 1,
                        }}
                      >
                        {/* LEFT */}
                        <Box>
                          <Typography
                            sx={{
                              fontSize: { xs: "18px", md: "20px" },
                              fontWeight: 600,
                              color: "rgba(255,255,255,0.9)",
                              textTransform: "uppercase",
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              fontFamily: "'Outfit', sans-serif",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {game.market_name || game.market_id?.name}
                            <InfoOutlinedIcon
                              sx={{
                                fontSize: "16px",
                                color: "rgba(255,255,255,0.3)",
                              }}
                            />
                          </Typography>

                          <Typography
                            sx={{
                              mt: 1.5,
                              fontSize: { xs: "26px", md: "32px" },
                              fontWeight: 800,
                              fontFamily: "'Orbitron', sans-serif",
                              background: "linear-gradient(135deg, #ffd700, #ffaa00)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              letterSpacing: "2px",
                            }}
                          >
                            {game.formattedResult}
                          </Typography>
                        </Box>

                        {/* RIGHT */}
                        <Box textAlign="right">
                          <Box
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 0.5,
                              px: 1.5,
                              py: 0.5,
                              borderRadius: "20px",
                              background: "rgba(0, 240, 255, 0.08)",
                              border: "1px solid rgba(0, 240, 255, 0.15)",
                              mb: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: "#00f0ff",
                                animation: "pulse 1.5s ease-in-out infinite",
                                "@keyframes pulse": {
                                  "0%, 100%": { opacity: 1 },
                                  "50%": { opacity: 0.3 },
                                },
                              }}
                            />
                            <Typography
                              sx={{
                                color: "#00f0ff",
                                fontSize: "11px",
                                fontWeight: 600,
                                fontFamily: "'Outfit', sans-serif",
                                letterSpacing: "0.5px",
                              }}
                            >
                              LIVE
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              width: 36,
                              height: 36,
                              borderRadius: "10px",
                              background: "linear-gradient(135deg, #00f0ff, #7b61ff)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              ml: "auto",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              boxShadow: "0 4px 15px rgba(0, 240, 255, 0.25)",
                              "&:hover": {
                                transform: "scale(1.1)",
                                boxShadow: "0 6px 20px rgba(0, 240, 255, 0.4)",
                              },
                            }}
                          >
                            <PlayArrowRoundedIcon sx={{ color: "#fff", fontSize: 20 }} />
                          </Box>
                        </Box>
                      </Box>

                      {/* ── CLOSE COUNTDOWN / COMING SOON ── */}
                      {closePending && closeTime && (
                        <Box sx={{ mt: 2 }}>
                          <CloseCountdown closeTime={closeTime} />
                        </Box>
                      )}
                    </Box>

                    {/* BUTTONS */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1.5,
                        mt: 3,
                      }}
                    >
                      {/* JODI */}
                      <Button
                        onClick={() =>
                          navigate(
                            `jodi-chart/${game.market_name || game.market_id?.name}/${game.market_id?.market_id || ""}`
                          )
                        }
                        variant="outlined"
                        sx={{
                          height: 38,
                          minWidth: "120px",
                          border: "1px solid rgba(0, 240, 255, 0.25)",
                          borderRadius: "10px",
                          color: "#00f0ff",
                          fontSize: "14px",
                          fontWeight: 600,
                          textTransform: "none",
                          fontFamily: "'Outfit', sans-serif",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            border: "1px solid #00f0ff",
                            background: "linear-gradient(135deg, rgba(0, 240, 255, 0.12), rgba(123, 97, 255, 0.12))",
                            color: "#fff",
                            transform: "translateY(-2px)",
                            boxShadow: "0 4px 15px rgba(0, 240, 255, 0.2)",
                          },
                        }}
                      >
                        ◆ Jodi Chart
                      </Button>

                      {/* PANA */}
                      <Button
                        onClick={() =>
                          navigate(
                            `pana-chart/${game.market_name || game.market_id?.name}/${game.market_id?.market_id || ""}`
                          )
                        }
                        variant="outlined"
                        sx={{
                          height: 38,
                          minWidth: "120px",
                          border: "1px solid rgba(123, 97, 255, 0.25)",
                          borderRadius: "10px",
                          color: "#7b61ff",
                          fontSize: "14px",
                          fontWeight: 600,
                          textTransform: "none",
                          fontFamily: "'Outfit', sans-serif",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            border: "1px solid #7b61ff",
                            background: "linear-gradient(135deg, rgba(123, 97, 255, 0.12), rgba(255, 110, 199, 0.12))",
                            color: "#fff",
                            transform: "translateY(-2px)",
                            boxShadow: "0 4px 15px rgba(123, 97, 255, 0.2)",
                          },
                        }}
                      >
                        ◆ Pana Chart
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
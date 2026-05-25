import { Box, Typography, Container } from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchResult } from "../../api/resultApi";
import DiamondIcon from "@mui/icons-material/Diamond";

export default function ChartsPage() {
  const navigate = useNavigate();
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMarkets = async () => {
      try {
        const response = await fetchResult();
        const raw = Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response)
          ? response
          : [];

        const uniqueMap = {};
        raw.forEach((item) => {
          const m = item?.market_id;
          if (m && m.market_id && m.name) {
            uniqueMap[m.market_id] = {
              marketId: m.market_id,
              name: m.name,
            };
          }
        });

        const uniqueMarkets = Object.values(uniqueMap).sort(
          (a, b) => a.marketId - b.marketId
        );
        setMarkets(uniqueMarkets);
      } catch (err) {
        console.error("Error loading markets:", err);
      } finally {
        setLoading(false);
      }
    };
    loadMarkets();
  }, []);

  const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Box
      sx={{
        background: "transparent",
        minHeight: "100vh",
        py: { xs: 4, md: 6 },
        px: 2,
      }}
    >
      <Container maxWidth="xl">
        {/* DOWNLOAD APP */}
        <Box sx={{ maxWidth: "1400px", mx: "auto", mb: 7 }}>
          <Box
            sx={{
              height: { xs: "64px", md: "70px" },
              borderRadius: "16px",
              background: "linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(123, 97, 255, 0.1))",
              border: "1px solid rgba(0, 240, 255, 0.2)",
              backdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              color: "#00f0ff",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "1px",
              textTransform: "uppercase",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 8px 30px rgba(0, 240, 255, 0.2)",
                borderColor: "#00f0ff",
              },
              fontSize: { xs: "16px", md: "18px" },
            }}
          >
            <DownloadRoundedIcon sx={{ fontSize: "28px" }} />
            Download App
          </Box>
        </Box>

        {/* JODI CHART */}
        <Box mb={8}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 3,
                py: 1,
                borderRadius: "50px",
                background: "rgba(0, 240, 255, 0.06)",
                border: "1px solid rgba(0, 240, 255, 0.12)",
                mb: 2,
              }}
            >
              <DiamondIcon sx={{ color: "#00f0ff", fontSize: 18 }} />
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#00f0ff",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Markets
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                background: "linear-gradient(135deg, #00f0ff, #7b61ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2,
                fontSize: { xs: "34px", md: "38px" },
              }}
            >
              Jodi Chart
            </Typography>
          </Box>

          <Box>
            {loading ? (
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    margin: "auto",
                    border: "3px solid rgba(0, 240, 255, 0.2)",
                    borderTopColor: "#00f0ff",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                    "@keyframes spin": { to: { transform: "rotate(360deg)" } },
                  }}
                />
              </Box>
            ) : (
              markets.map((market, index) => {
                const routeBase = slugify(market.name);
                return (
                  <Box
                    key={market.marketId}
                    onClick={() => navigate(`/jodi-chart/${routeBase}/${market.marketId}`)}
                    sx={{
                      background: "rgba(15, 20, 40, 0.5)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(0, 240, 255, 0.08)",
                      borderRadius: "12px",
                      height: { xs: "70px", md: "72px" },
                      mb: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      cursor: "pointer",
                      transition: "all 0.35s ease",
                      animation: `fadeInUp 0.4s ease ${index * 0.05}s both`,
                      "@keyframes fadeInUp": {
                        from: { opacity: 0, transform: "translateY(15px)" },
                        to: { opacity: 1, transform: "translateY(0)" },
                      },
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "3px",
                        background: "linear-gradient(180deg, #00f0ff, #7b61ff)",
                        borderRadius: "10px",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover": {
                        background: "rgba(0, 240, 255, 0.05)",
                        borderColor: "rgba(0, 240, 255, 0.2)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                        "&::before": { opacity: 1 },
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        letterSpacing: "1.5px",
                        textAlign: "center",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: { xs: "16px", md: "18px" },
                      }}
                    >
                      {market.name}
                    </Typography>
                  </Box>
                );
              })
            )}
          </Box>
        </Box>

        {/* PANA CHART */}
        <Box mt={10}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                background: "linear-gradient(135deg, #7b61ff, #ff6ec7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2,
                fontSize: { xs: "34px", md: "38px" },
              }}
            >
              Pana Chart
            </Typography>
          </Box>

          <Box>
            {loading ? (
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    margin: "auto",
                    border: "3px solid rgba(123, 97, 255, 0.2)",
                    borderTopColor: "#7b61ff",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }}
                />
              </Box>
            ) : (
              markets.map((market, index) => {
                const routeBase = slugify(market.name);
                return (
                  <Box
                    key={market.marketId}
                    onClick={() => navigate(`/pana-chart/${routeBase}/${market.marketId}`)}
                    sx={{
                      background: "rgba(15, 20, 40, 0.5)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(123, 97, 255, 0.08)",
                      borderRadius: "12px",
                      height: { xs: "70px", md: "72px" },
                      mb: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      cursor: "pointer",
                      transition: "all 0.35s ease",
                      animation: `fadeInUp 0.4s ease ${index * 0.05}s both`,
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "3px",
                        background: "linear-gradient(180deg, #7b61ff, #ff6ec7)",
                        borderRadius: "10px",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover": {
                        background: "rgba(123, 97, 255, 0.05)",
                        borderColor: "rgba(123, 97, 255, 0.2)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                        "&::before": { opacity: 1 },
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        letterSpacing: "1.5px",
                        textAlign: "center",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: { xs: "16px", md: "18px" },
                      }}
                    >
                      {market.name}
                    </Typography>
                  </Box>
                );
              })
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
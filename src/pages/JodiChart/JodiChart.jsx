import { Box, Typography, Button } from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchJodi } from "../../api/jodiCahrtApi";
import { MarketResultModel } from "../../bloc/marketResult/marketResultModel";

export default function JodiChart() {
  const { name, marketId } = useParams();
  const chartName = name?.replaceAll("-", " ").toUpperCase();
  const [tableData, setTableData] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!marketId) { setLoading(false); return; }

    const fetchJodiData = async () => {
      setLoading(true);
      try {
        const response = await fetchJodi(marketId);
        const rawResults = Array.isArray(response?.data) ? response.data : Array.isArray(response) ? response : [];
        const results = rawResults.map((item) =>
          MarketResultModel.fromJson({
            market_name: item.market_name,
            open_value: item.open_value,
            open_code: item.open_code,
            close_value: item.close_value,
            close_code: item.close_code,
            from: item.from || item.fromDate || item.date,
          })
        );
        const today = new Date();
        generateTableData(results, today.getFullYear(), today.getMonth() + 1);
      } catch (error) {
        console.error("Error fetching jodi chart:", error);
        setTableData([]);
        setHighlight([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJodiData();
  }, [marketId]);

  const generateTableData = (results, currentYear, currentMonth) => {
    const monthResults = results.filter((result) => {
      if (!result.fromDate) return false;
      return result.fromDate.getFullYear() === currentYear && result.fromDate.getMonth() + 1 === currentMonth;
    });

    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth - 1, 1);
    let startDay = firstDay.getDay() - 1;
    if (startDay < 0) startDay = 6;

    const rows = [];
    let currentDay = 1;

    for (let week = 0; week < 6; week++) {
      const row = [];
      for (let day = 0; day < 7; day++) {
        if ((week === 0 && day < startDay) || currentDay > daysInMonth) {
          row.push("**");
        } else {
          const result = monthResults.find((r) => {
            if (!r.fromDate) return false;
            return r.fromDate.getDate() === currentDay;
          });
          if (result) {
            const openValue = result.getOpenValue?.() || "";
            const closeValue = result.getCloseValue?.() || "";
            const jodiValue = `${openValue}${closeValue}`;
            row.push(jodiValue || "**");
          } else {
            row.push("**");
          }
          currentDay++;
        }
      }
      rows.push(row);
    }
    setTableData(rows);
    const allJodis = rows.flat().filter((v) => v !== "**");
    setHighlight(allJodis);
  };

  const goBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const diamondBtnStyle = {
    height: "50px",
    px: 4,
    borderRadius: "12px",
    border: "1px solid rgba(0, 240, 255, 0.25)",
    color: "#00f0ff",
    fontSize: { xs: "15px", md: "16px" },
    textTransform: "none",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    transition: "all 0.3s ease",
    "&:hover": {
      border: "1px solid #00f0ff",
      background: "linear-gradient(135deg, rgba(0, 240, 255, 0.12), rgba(123, 97, 255, 0.12))",
      color: "#fff",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 15px rgba(0, 240, 255, 0.2)",
    },
  };

  return (
    <Box sx={{ background: "transparent", minHeight: "100vh", py: { xs: 4, md: 6 }, px: 2 }}>
      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        {/* DOWNLOAD BTN */}
        <Box sx={{ mb: 6 }}>
          <Box
            sx={{
              height: { xs: "60px", md: "66px" },
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

        {/* TITLE */}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
            fontFamily: "'Outfit', sans-serif",
            background: "linear-gradient(135deg, #00f0ff, #7b61ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "30px", md: "36px" },
          }}
        >
          {chartName} Jodi Chart
        </Typography>

        {/* DESC */}
        <Typography
          sx={{
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.8,
            maxWidth: "1000px",
            mx: "auto",
            mb: 4,
            fontFamily: "'Outfit', sans-serif",
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {chartName} Jodi Chart Satta Matka Record Old History Historical Data Bracket Results Chart Online Live Book Digits Numbers
        </Typography>

        {/* GO BOTTOM */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <Button onClick={goBottom} variant="outlined" sx={diamondBtnStyle}>
            ◆ Go To Bottom
          </Button>
        </Box>

        {/* TABLE */}
        <Box sx={{ overflowX: "auto", mb: 6 }}>
          <Box
            component="table"
            sx={{
              width: "100%",
              maxWidth: "1000px",
              margin: "auto",
              borderCollapse: "collapse",
              background: "rgba(15, 20, 40, 0.4)",
              backdropFilter: "blur(12px)",
              overflow: "hidden",
              borderRadius: "16px",
              border: "1px solid rgba(0, 240, 255, 0.1)",
            }}
          >
            {/* HEADER */}
            <Box component="thead">
              <Box component="tr">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <Box
                    component="th"
                    key={day}
                    sx={{
                      height: "56px",
                      border: "1px solid rgba(0, 240, 255, 0.1)",
                      background: "rgba(0, 240, 255, 0.06)",
                      color: "#00f0ff",
                      fontWeight: 700,
                      fontFamily: "'Outfit', sans-serif",
                      letterSpacing: "1px",
                      fontSize: { xs: "14px", md: "15px" },
                    }}
                  >
                    {day}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* BODY */}
            <Box component="tbody">
              {loading ? (
                <Box component="tr">
                  <Box component="td" colSpan={7} sx={{ textAlign: "center", py: 5 }}>
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
                </Box>
              ) : (
                tableData.map((row, i) => (
                  <Box component="tr" key={i}>
                    {row.map((cell, j) => (
                      <Box
                        component="td"
                        key={j}
                        sx={{
                          border: "1px solid rgba(0, 240, 255, 0.06)",
                          height: { xs: "64px", md: "68px" },
                          textAlign: "center",
                          fontWeight: 700,
                          fontFamily: "'Orbitron', sans-serif",
                          background: cell !== "**" ? "rgba(0, 240, 255, 0.03)" : "transparent",
                          color: cell === "**" ? "rgba(255,255,255,0.15)" : "#ffd700",
                          fontSize: { xs: "18px", md: "20px" },
                          transition: "all 0.2s ease",
                          "&:hover": cell !== "**" ? {
                            background: "rgba(0, 240, 255, 0.08)",
                            boxShadow: "inset 0 0 20px rgba(0, 240, 255, 0.05)",
                          } : {},
                        }}
                      >
                        {cell}
                      </Box>
                    ))}
                  </Box>
                ))
              )}
            </Box>
          </Box>
        </Box>

        {/* BOTTOM BUTTONS */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <Button onClick={() => window.history.back()} variant="outlined" sx={diamondBtnStyle}>
            ◆ Back
          </Button>
          <Button onClick={goTop} variant="outlined" sx={diamondBtnStyle}>
            ◆ Go To Top
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
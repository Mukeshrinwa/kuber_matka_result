import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPana } from "../../api/panaCahrtApi";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

export default function PanaChart() {
  const { name, marketId } = useParams();
  const chartName = name?.replaceAll("-", " ").toUpperCase();
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [loading, setLoading] = useState(true);

  const dayNames = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  useEffect(() => {
    if (!marketId) { setLoading(false); return; }

    const fetchPanaData = async () => {
      setLoading(true);
      try {
        const response = await fetchPana(marketId);
        const rawResults = response?.data?.data || response?.data || [];

        const results = rawResults.map((item) => {
          const fromDate = item.from ? new Date(item.from) : null;
          return {
            market_name: item.market_name,
            open_value: item.open_value,
            open_code: item.open_code,
            close_value: item.close_value,
            close_code: item.close_code,
            fromDate: fromDate,
            getOpenCode: () => item.open_code,
            getOpenValue: () => item.open_value,
            getCloseCode: () => item.close_code,
            getCloseValue: () => item.close_value,
          };
        });

        generateTableData(results);
      } catch (error) {
        console.error("Error fetching pana chart:", error);
        setTableData([]);
        setHighlight([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPanaData();
  }, [marketId]);

  const generateTableData = (results) => {
    const weeks = [];
    const validResults = results.filter(r => r.fromDate && !isNaN(r.fromDate.getTime()));
    const sortedResults = [...validResults].sort((a, b) => a.fromDate - b.fromDate);

    let currentWeek = [];
    let currentWeekNumber = -1;

    sortedResults.forEach((result) => {
      const dayOfMonth = result.fromDate.getDate();
      const weekNum = Math.ceil(dayOfMonth / 7);

      if (currentWeekNumber !== weekNum || !currentWeek.length ||
        (currentWeek[0]?.fromDate?.getMonth() !== result.fromDate.getMonth())) {
        if (currentWeek.length > 0) weeks.push(currentWeek);
        currentWeek = [];
        currentWeekNumber = weekNum;
      }
      currentWeek.push(result);
    });

    if (currentWeek.length > 0) weeks.push(currentWeek);

    const formattedData = weeks.map((weekResults) => {
      const firstDate = weekResults[0]?.fromDate;
      const lastDate = weekResults[weekResults.length - 1]?.fromDate;

      const row = {
        year: firstDate ? firstDate.getFullYear().toString() : "",
        from: firstDate ? formatDate(firstDate) : "",
        to: lastDate ? formatDate(lastDate) : "",
      };

      dayNames.forEach((day, index) => {
        const dayResult = weekResults.find((r) => {
          if (!r.fromDate) return false;
          let dayIndex = r.fromDate.getDay();
          dayIndex = dayIndex === 0 ? 7 : dayIndex;
          return dayIndex === (index + 1);
        });

        if (dayResult) {
          row[day] = [
            dayResult.open_code || "***",
            `${dayResult.open_value || "*"}${dayResult.close_value || "*"}`,
            dayResult.close_code || "***",
          ];
        } else {
          row[day] = ["***", "**", "***"];
        }
      });

      return row;
    });

    setTableData(formattedData);

    const allPanas = formattedData
      .flatMap((row) => dayNames.map((day) => row[day]).flat())
      .filter((v) => v !== "***" && v !== "**");
    setHighlight(allPanas);
  };

  const formatDate = (date) => {
    if (!date || isNaN(date.getTime())) return "";
    const day = date.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${day}-${months[date.getMonth()]}`;
  };

  const goBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const diamondBtnStyle = {
    height: "50px",
    px: 4,
    borderRadius: "12px",
    border: "1px solid rgba(123, 97, 255, 0.25)",
    color: "#7b61ff",
    fontSize: { xs: "15px", md: "16px" },
    textTransform: "none",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    transition: "all 0.3s ease",
    "&:hover": {
      border: "1px solid #7b61ff",
      background: "linear-gradient(135deg, rgba(123, 97, 255, 0.12), rgba(255, 110, 199, 0.12))",
      color: "#fff",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 15px rgba(123, 97, 255, 0.2)",
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
              background: "linear-gradient(135deg, rgba(123, 97, 255, 0.1), rgba(255, 110, 199, 0.1))",
              border: "1px solid rgba(123, 97, 255, 0.2)",
              backdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              color: "#7b61ff",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "1px",
              textTransform: "uppercase",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 8px 30px rgba(123, 97, 255, 0.2)",
                borderColor: "#7b61ff",
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
            textTransform: "uppercase",
            fontFamily: "'Outfit', sans-serif",
            background: "linear-gradient(135deg, #7b61ff, #ff6ec7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "28px", md: "34px" },
          }}
        >
          {chartName} Pana Chart | {chartName} Panel Chart
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
          {chartName} Panel Chart Satta Matka Record Old History Historical Data Bracket Results Chart Online Live Book Digits Numbers
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
              maxWidth: "1200px",
              margin: "auto",
              borderCollapse: "collapse",
              background: "rgba(15, 20, 40, 0.4)",
              backdropFilter: "blur(12px)",
              overflow: "hidden",
              borderRadius: "16px",
              border: "1px solid rgba(123, 97, 255, 0.1)",
            }}
          >
            {/* HEADER */}
            <Box component="thead">
              <Box component="tr">
                {["Date", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <Box
                    component="th"
                    key={day}
                    sx={{
                      height: "56px",
                      border: "1px solid rgba(123, 97, 255, 0.1)",
                      background: "rgba(123, 97, 255, 0.06)",
                      color: "#7b61ff",
                      fontWeight: 700,
                      fontFamily: "'Outfit', sans-serif",
                      letterSpacing: "1px",
                      width: day === "Date" ? "200px" : "110px",
                      fontSize: { xs: "13px", md: "14px" },
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
                  <Box component="td" colSpan={8} sx={{ textAlign: "center", py: 5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        margin: "auto",
                        border: "3px solid rgba(123, 97, 255, 0.2)",
                        borderTopColor: "#7b61ff",
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
                    {/* DATE */}
                    <Box
                      component="td"
                      sx={{
                        border: "1px solid rgba(123, 97, 255, 0.06)",
                        background: "rgba(123, 97, 255, 0.03)",
                        textAlign: "center",
                        width: "200px",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.8,
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: { xs: "13px", md: "14px" },
                      }}
                    >
                      <Box py={1.5}>
                        <Typography sx={{ fontWeight: 600, fontSize: "14px", color: "#7b61ff", fontFamily: "'Outfit', sans-serif" }}>
                          {row.from}
                        </Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.3)", fontFamily: "'Outfit', sans-serif" }}>
                          To
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: "14px", color: "#7b61ff", fontFamily: "'Outfit', sans-serif" }}>
                          {row.to}
                        </Typography>
                      </Box>
                    </Box>

                    {/* DAYS */}
                    {dayNames.map((day) => {
                      const left = row[day]?.[0] || "***";
                      const center = row[day]?.[1] || "**";
                      const right = row[day]?.[2] || "***";
                      const hasData = left !== "***" || center !== "**" || right !== "***";

                      return (
                        <Box
                          component="td"
                          key={day}
                          sx={{
                            border: "1px solid rgba(123, 97, 255, 0.06)",
                            background: hasData ? "rgba(123, 97, 255, 0.02)" : "transparent",
                            width: "110px",
                            height: "100px",
                            verticalAlign: "middle",
                            transition: "all 0.2s ease",
                            "&:hover": hasData ? {
                              background: "rgba(123, 97, 255, 0.06)",
                            } : {},
                          }}
                        >
                          <Box
                            sx={{
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 0.5,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "13px",
                                fontWeight: 500,
                                fontFamily: "'Orbitron', sans-serif",
                                color: left === "***" ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.6)",
                              }}
                            >
                              {left}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "20px",
                                fontWeight: 700,
                                fontFamily: "'Orbitron', sans-serif",
                                color: center === "**" ? "rgba(255,255,255,0.15)" : "#ffd700",
                              }}
                            >
                              {center}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "13px",
                                fontWeight: 500,
                                fontFamily: "'Orbitron', sans-serif",
                                color: right === "***" ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.6)",
                              }}
                            >
                              {right}
                            </Typography>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                ))
              )}
            </Box>
          </Box>
        </Box>

        {/* BUTTONS */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <Button onClick={() => navigate(-1)} variant="outlined" sx={diamondBtnStyle}>
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
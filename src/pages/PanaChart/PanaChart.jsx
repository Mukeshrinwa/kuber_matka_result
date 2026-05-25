import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPana } from "../../api/panaCahrtApi";
import { MarketResultModel } from "../../bloc/marketResult/marketResultModel";

export default function PanaChart() {
  const { name, marketId } = useParams();
  const chartName = name?.replaceAll("-", " ").toUpperCase();
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [loading, setLoading] = useState(true);

  const dayNames = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun",
  ];

  useEffect(() => {
    if (!marketId) {
      setLoading(false);
      return;
    }

    const fetchPanaData = async () => {
      setLoading(true);
      try {
        const response = await fetchPana(marketId);

        // FIXED: Handle the response structure correctly
        // The response has { status, total, data } structure
        const rawResults = response?.data?.data || response?.data || [];

        console.log("Raw results:", rawResults); // Debug log

        const results = rawResults.map((item) => {
          // Create a date object from the 'from' field
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

        console.log("Processed results:", results); // Debug log
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
    console.log("Generating table data from:", results); // Debug log

    const weeks = [];

    // Filter out results without valid dates
    const validResults = results.filter(r => r.fromDate && !isNaN(r.fromDate.getTime()));

    const sortedResults = [...validResults].sort((a, b) => {
      return a.fromDate - b.fromDate;
    });

    console.log("Sorted results:", sortedResults); // Debug log

    let currentWeek = [];
    let currentWeekNumber = -1;

    sortedResults.forEach((result) => {
      const dayOfMonth = result.fromDate.getDate();
      // Calculate week number of the month (1-5)
      const weekNum = Math.ceil(dayOfMonth / 7);

      // Get month to ensure we don't mix different months
      const monthKey = `${result.fromDate.getMonth()}-${result.fromDate.getFullYear()}`;

      if (currentWeekNumber !== weekNum || !currentWeek.length ||
        (currentWeek[0]?.fromDate?.getMonth() !== result.fromDate.getMonth())) {
        if (currentWeek.length > 0) {
          weeks.push(currentWeek);
        }
        currentWeek = [];
        currentWeekNumber = weekNum;
      }

      currentWeek.push(result);
    });

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    console.log("Weeks:", weeks); // Debug log

    const formattedData = weeks.map((weekResults) => {
      const firstDate = weekResults[0]?.fromDate;
      const lastDate = weekResults[weekResults.length - 1]?.fromDate;

      const row = {
        year: firstDate ? firstDate.getFullYear().toString() : "",
        from: firstDate ? formatDate(firstDate) : "",
        to: lastDate ? formatDate(lastDate) : "",
      };

      dayNames.forEach((day, index) => {
        // Find result for this day (0 = Sunday, 1 = Monday, etc.)
        // Adjusting for Monday as first day
        const dayResult = weekResults.find((r) => {
          if (!r.fromDate) return false;
          let dayIndex = r.fromDate.getDay();
          // Convert Sunday (0) to 7 for Monday-first week
          dayIndex = dayIndex === 0 ? 7 : dayIndex;
          // Our dayNames order: mon(1), tue(2), wed(3), thu(4), fri(5), sat(6), sun(7)
          return dayIndex === (index + 1);
        });

        if (dayResult) {
          // Format: [open_code, open_value+close_value, close_code]
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

    console.log("Formatted data:", formattedData); // Debug log
    setTableData(formattedData);

    const allPanas = formattedData
      .flatMap((row) =>
        dayNames.map((day) => row[day]).flat()
      )
      .filter((v) => v !== "***" && v !== "**");

    setHighlight(allPanas);
  };

  const formatDate = (date) => {
    if (!date || isNaN(date.getTime())) return "";
    const day = date.getDate();
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    return `${day}-${months[date.getMonth()]}`;
  };

  const goBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

return (
  <Box
    sx={{
      background: "#f2f2f2",

      minHeight: "100vh",

      py: {
        xs: 4,
        md: 6,
      },

      px: 2,
    }}
  >
    <Box
      sx={{
        maxWidth: "1450px",

        mx: "auto",
      }}
    >
      {/* ================= DOWNLOAD BUTTON ================= */}

      <Box
        sx={{
          mb: 7,
        }}
      >
        <Box
          sx={{
            height: {
              xs: "70px",
              md: "74px",
            },

            borderRadius: "50px",

            background:
              "linear-gradient(90deg,#efd98a 0%,#f3ac1d 25%,#f3ac1d 75%,#efe3a5 100%)",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            gap: 1.5,

            color: "#5b5b5b",

            fontWeight: 600,

            cursor: "pointer",

            transition: "0.3s ease",

            "&:hover": {
              transform:
                "translateY(-2px)",
            },

            fontSize: {
              xs: "22px",
              md: "24px",
            },
          }}
        >
          🤖 Download App
        </Box>
      </Box>

      {/* ================= TITLE ================= */}

      <Typography
        sx={{
          textAlign: "center",

          color: "#17233c",

          fontWeight: 500,

          lineHeight: 1.2,

          mb: 3,

          textTransform:
            "uppercase",

          fontSize: {
            xs: "34px",
            md: "34px",
          },
        }}
      >
        {chartName} Pana Chart |
        {` `}
        {chartName} Panel Chart
      </Typography>

      {/* ================= DESC ================= */}

      <Typography
        sx={{
          textAlign: "center",

          color: "#333",

          lineHeight: 1.8,

          maxWidth: "1200px",

          mx: "auto",

          mb: 4,

          fontSize: {
            xs: "16px",
            md: "18px",
          },
        }}
      >
        {chartName} Panel Chart
        Satta Matka Record
        Old History Historical
        Data Bracket Results
        Chart Online Live Book
        Digits Numbers
      </Typography>

      {/* ================= GO BOTTOM ================= */}

      <Box
        sx={{
          display: "flex",

          justifyContent:
            "center",

          mb: 7,
        }}
      >
        <Button
          onClick={goBottom}
          variant="outlined"
          sx={{
            height: "56px",

            px: 5,

            borderRadius: "8px",

            border:
              "1px solid #f1b51c",

            color: "#222",

            fontSize: {
              xs: "18px",
              md: "20px",
            },

            textTransform:
              "none",

            "&:hover": {
              border:
                "1px solid #f1b51c",

              background:
                "#f1b51c",

              color: "#fff",
            },
          }}
        >
          Go To Bottom
        </Button>
      </Box>

      {/* ================= TABLE ================= */}

      <Box
        sx={{
          overflowX: "auto",

          mb: 6,
        }}
      >
        <Box
          component="table"
          sx={{
            width: "100%",

            maxWidth: "1000px",

            margin: "auto",

            borderCollapse:
              "collapse",

            background:
              "#f8f8f8",

            overflow:
              "hidden",

            borderRadius:
              "8px",
          }}
        >
          {/* HEADER */}

          <Box component="thead">
            <Box component="tr">
              {[
                "Date",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
              ].map((day) => (
                <Box
                  component="th"
                  key={day}
                  sx={{
                    height: "64px",

                    border:
                      "1px solid #f1b51c",

                    background:
                      "#f8f8f8",

                    color:
                      "#17233c",

                    fontWeight: 600,

                    width:
                      day ===
                      "Date"
                        ? "220px"
                        : "120px",

                    fontSize: {
                      xs: "18px",
                      md: "18px",
                    },
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
                <Box
                  component="td"
                  colSpan={8}
                  sx={{
                    textAlign:
                      "center",

                    py: 5,

                    fontSize:
                      "24px",
                  }}
                >
                  Loading...
                </Box>
              </Box>
            ) : (
              tableData.map(
                (row, i) => (
                  <Box
                    component="tr"
                    key={i}
                  >
                    {/* DATE */}

                    <Box
                      component="td"
                      sx={{
                        border:
                          "1px solid #f1b51c",

                        background:
                          "#f8f8f8",

                        textAlign:
                          "center",

                        width:
                          "220px",

                        fontWeight: 600,

                        color:
                          "#17233c",

                        lineHeight: 1.8,

                        fontSize:
                          {
                            xs: "18px",
                            md: "18px",
                          },
                      }}
                    >
                      <Box py={2}>
                        <Typography
                          sx={{
                            fontWeight: 600,

                            fontSize:
                              "18px",
                          }}
                        >
                          {row.from}
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 600,

                            fontSize:
                              "18px",
                          }}
                        >
                          To
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 600,

                            fontSize:
                              "18px",
                          }}
                        >
                          {row.to}
                        </Typography>
                      </Box>
                    </Box>

                    {/* DAYS */}

                    {dayNames.map(
                      (day) => {
                        const left =
                          row[
                            day
                          ]?.[0] ||
                          "***";

                        const center =
                          row[
                            day
                          ]?.[1] ||
                          "**";

                        const right =
                          row[
                            day
                          ]?.[2] ||
                          "***";

                        return (
                          <Box
                            component="td"
                            key={
                              day
                            }
                            sx={{
                              border:
                                "1px solid #f1b51c",

                              background:
                                "#f8f8f8",

                              width:
                                "120px",

                              height:
                                "118px",

                              verticalAlign:
                                "middle",
                            }}
                          >
                            <Box
                              sx={{
                                height:
                                  "100%",

                                display:
                                  "flex",

                                flexDirection:
                                  "column",

                                alignItems:
                                  "center",

                                justifyContent:
                                  "center",

                                gap: 1,
                              }}
                            >
                              {/* TOP */}

                              <Typography
                                sx={{
                                  fontSize:
                                    "16px",

                                  fontWeight: 600,

                                  color:
                                    left ===
                                    "146"
                                      ? "red"
                                      : "#17233c",
                                }}
                              >
                                {
                                  left
                                }
                              </Typography>

                              {/* CENTER */}

                              <Typography
                                sx={{
                                  fontSize:
                                    "24px",

                                  fontWeight: 700,

                                  color:
                                    center ===
                                    "11"
                                      ? "red"
                                      : "#17233c",
                                }}
                              >
                                {
                                  center
                                }
                              </Typography>

                              {/* BOTTOM */}

                              <Typography
                                sx={{
                                  fontSize:
                                    "16px",

                                  fontWeight: 600,

                                  color:
                                    right ===
                                    "146"
                                      ? "red"
                                      : "#17233c",
                                }}
                              >
                                {
                                  right
                                }
                              </Typography>
                            </Box>
                          </Box>
                        );
                      }
                    )}
                  </Box>
                )
              )
            )}
          </Box>
        </Box>
      </Box>

      {/* ================= BUTTONS ================= */}

      <Box
        sx={{
          display: "flex",

          justifyContent:
            "center",

          gap: 2,

          flexWrap: "wrap",
        }}
      >
        <Button
          onClick={() =>
            navigate(-1)
          }
          variant="outlined"
          sx={{
            height: "56px",

            px: 5,

            borderRadius: "8px",

            border:
              "1px solid #f1b51c",

            color: "#222",

            fontSize: {
              xs: "18px",
              md: "20px",
            },

            textTransform:
              "none",

            "&:hover": {
              border:
                "1px solid #f1b51c",

              background:
                "#f1b51c",

              color: "#fff",
            },
          }}
        >
          Back
        </Button>

        <Button
          onClick={goTop}
          variant="outlined"
          sx={{
            height: "56px",

            px: 5,

            borderRadius: "8px",

            border:
              "1px solid #f1b51c",

            color: "#222",

            fontSize: {
              xs: "18px",
              md: "20px",
            },

            textTransform:
              "none",

            "&:hover": {
              border:
                "1px solid #f1b51c",

              background:
                "#f1b51c",

              color: "#fff",
            },
          }}
        >
          Go To Top
        </Button>
      </Box>
    </Box>
  </Box>
);
}
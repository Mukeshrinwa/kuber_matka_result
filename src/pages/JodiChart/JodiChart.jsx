import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import AndroidIcon from "@mui/icons-material/Android";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { fetchJodi } from "../../api/jodiCahrtApi";

import { MarketResultModel } from "../../bloc/marketResult/marketResultModel";

export default function JodiChart() {
  const { name, marketId } =
    useParams();

  const chartName = name
    ?.replaceAll("-", " ")
    .toUpperCase();

  const [tableData, setTableData] =
    useState([]);

  const [highlight, setHighlight] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (!marketId) {
      setLoading(false);

      return;
    }

    const fetchJodiData =
      async () => {
        setLoading(true);

        try {
          const response =
            await fetchJodi(
              marketId
            );

          const rawResults =
            Array.isArray(
              response?.data
            )
              ? response.data
              : Array.isArray(
                    response
                  )
                ? response
                : [];

          const results =
            rawResults.map(
              (item) =>
                MarketResultModel.fromJson(
                  {
                    market_name:
                      item.market_name,

                    open_value:
                      item.open_value,

                    open_code:
                      item.open_code,

                    close_value:
                      item.close_value,

                    close_code:
                      item.close_code,

                    from:
                      item.from ||
                      item.fromDate ||
                      item.date,
                  }
                )
            );

          const today =
            new Date();

          generateTableData(
            results,
            today.getFullYear(),
            today.getMonth() +
              1
          );
        } catch (error) {
          console.error(
            "Error fetching jodi chart:",
            error
          );

          setTableData([]);
          setHighlight([]);
        } finally {
          setLoading(false);
        }
      };

    fetchJodiData();
  }, [marketId]);

  const generateTableData = (
    results,
    currentYear,
    currentMonth
  ) => {
    const monthResults =
      results.filter(
        (result) => {
          if (
            !result.fromDate
          )
            return false;

          return (
            result.fromDate.getFullYear() ===
              currentYear &&
            result.fromDate.getMonth() +
              1 ===
              currentMonth
          );
        }
      );

    const daysInMonth =
      new Date(
        currentYear,
        currentMonth,
        0
      ).getDate();

    const firstDay =
      new Date(
        currentYear,
        currentMonth - 1,
        1
      );

    let startDay =
      firstDay.getDay() - 1;

    if (startDay < 0)
      startDay = 6;

    const rows = [];

    let currentDay = 1;

    for (
      let week = 0;
      week < 6;
      week++
    ) {
      const row = [];

      for (
        let day = 0;
        day < 7;
        day++
      ) {
        if (
          (week === 0 &&
            day < startDay) ||
          currentDay >
            daysInMonth
        ) {
          row.push("**");
        } else {
          const result =
            monthResults.find(
              (r) => {
                if (
                  !r.fromDate
                )
                  return false;

                return (
                  r.fromDate.getDate() ===
                  currentDay
                );
              }
            );

          if (result) {
            const openValue =
              result.getOpenValue?.() ||
              "";

            const closeValue =
              result.getCloseValue?.() ||
              "";

            const jodiValue = `${openValue}${closeValue}`;

            row.push(
              jodiValue ||
                "**"
            );
          } else {
            row.push("**");
          }

          currentDay++;
        }
      }

      rows.push(row);
    }

    setTableData(rows);

    const allJodis = rows
      .flat()
      .filter(
        (v) => v !== "**"
      );

    setHighlight(allJodis);
  };

  const goBottom = () => {
    window.scrollTo({
      top: document.body
        .scrollHeight,

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
        background:
          "#f2f2f2",

        minHeight:
          "100vh",

        py: {
          xs: 4,
          md: 6,
        },

        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth:
            "1450px",

          mx: "auto",
        }}
      >
        {/* DOWNLOAD BTN */}

        <Box
          sx={{
            mb: 7,
          }}
        >
          <Box
            sx={{
              height: {
                xs: "68px",
                md: "74px",
              },

              borderRadius:
                "50px",

              background:
                "linear-gradient(90deg,#f3ac1d 0%,#efe7b2 50%,#f3ac1d 100%)",

              display: "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              gap: 1.5,

              color: "#5b5b5b",

              fontWeight: 600,

              cursor: "pointer",

              transition:
                "0.3s ease",

              "&:hover":
                {
                  transform:
                    "translateY(-2px)",
                },

              fontSize: {
                xs: "22px",
                md: "24px",
              },
            }}
          >
            <AndroidIcon
              sx={{
                fontSize:
                  "34px",
              }}
            />

            Download App
          </Box>
        </Box>

        {/* TITLE */}

        <Typography
          sx={{
            textAlign:
              "center",

            color:
              "#17233c",

            fontWeight: 500,

            lineHeight: 1.2,

            mb: 3,

            fontSize: {
              xs: "34px",
              md: "34px",
            },
          }}
        >
          {chartName} Jodi
          Chart
        </Typography>

        {/* DESC */}

        <Typography
          sx={{
            textAlign:
              "center",

            color: "#333",

            lineHeight: 1.8,

            maxWidth:
              "1200px",

            mx: "auto",

            mb: 4,

            fontSize: {
              xs: "16px",
              md: "18px",
            },
          }}
        >
          {chartName} Jodi
          Chart Satta Matka
          Record Old History
          Historical Data
          Bracket Results
          Chart Online Live
          Book Digits Numbers
        </Typography>

        {/* GO BOTTOM */}

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

              borderRadius:
                "8px",

              border:
                "1px solid #f1b51c",

              color: "#222",

              fontSize: {
                xs: "18px",
                md: "20px",
              },

              textTransform:
                "none",

              "&:hover":
                {
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

        {/* TABLE */}

        <Box
          sx={{
            overflowX:
              "auto",

            mb: 6,
          }}
        >
          <Box
            component="table"
            sx={{
              width: "100%",

              maxWidth:
                "1000px",

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

            <Box
              component="thead"
            >
              <Box
                component="tr"
              >
                {[
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                  "Sun",
                ].map(
                  (day) => (
                    <Box
                      component="th"
                      key={day}
                      sx={{
                        height:
                          "64px",

                        border:
                          "1px solid #f1b51c",

                        background:
                          "#f8f8f8",

                        color:
                          "#17233c",

                        fontWeight: 600,

                        fontSize:
                          {
                            xs: "18px",
                            md: "18px",
                          },
                      }}
                    >
                      {day}
                    </Box>
                  )
                )}
              </Box>
            </Box>

            {/* BODY */}

            <Box
              component="tbody"
            >
              {loading ? (
                <Box
                  component="tr"
                >
                  <Box
                    component="td"
                    colSpan={7}
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
                  (
                    row,
                    i
                  ) => (
                    <Box
                      component="tr"
                      key={i}
                    >
                      {row.map(
                        (
                          cell,
                          j
                        ) => (
                          <Box
                            component="td"
                            key={j}
                            sx={{
                              border:
                                "1px solid #f1b51c",

                              height:
                                {
                                  xs: "72px",
                                  md: "74px",
                                },

                              textAlign:
                                "center",

                              fontWeight: 700,

                              background:
                                "#f8f8f8",

                              color:
                                cell ===
                                "11"
                                  ? "red"
                                  : "#17233c",

                              fontSize:
                                {
                                  xs: "24px",
                                  md: "22px",
                                },
                            }}
                          >
                            {
                              cell
                            }
                          </Box>
                        )
                      )}
                    </Box>
                  )
                )
              )}
            </Box>
          </Box>
        </Box>

        {/* BOTTOM BUTTONS */}

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
              window.history.back()
            }
            variant="outlined"
            sx={{
              height: "56px",

              px: 5,

              borderRadius:
                "8px",

              border:
                "1px solid #f1b51c",

              color: "#222",

              fontSize: {
                xs: "18px",
                md: "20px",
              },

              textTransform:
                "none",

              "&:hover":
                {
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

              borderRadius:
                "8px",

              border:
                "1px solid #f1b51c",

              color: "#222",

              fontSize: {
                xs: "18px",
                md: "20px",
              },

              textTransform:
                "none",

              "&:hover":
                {
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
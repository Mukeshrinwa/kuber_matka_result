"use client";

import React, {
  useState,
  useEffect,
} from "react";

import {
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import { useNavigate } from "react-router";

import { fetchResult } from "../../api/resultApi";

import { formatMarketResults } from "../../utils/resultFormatter";

import top from "../../assets/images/section-top.svg";
import bottom from "../../assets/images/section-bottom.svg";

// ================= CHECK TODAY =================

const isToday = (item) => {
  if (!item.from || !item.to)
    return false;

  const now =
    new Date().getTime();

  const from = new Date(
    item.from
  ).getTime();

  const to = new Date(
    item.to
  ).getTime();

  return (
    now >= from && now <= to
  );
};

export default function MarketResults() {
  const [games, setGames] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const navigate =
    useNavigate();

  // ================= FETCH DATA =================

  useEffect(() => {
    const fetchData =
      async () => {
        try {
          const enrollmentNo =
            localStorage.getItem(
              "enrollmentNo"
            ) ||
            "your-enrollment-no";

          const response =
            await fetchResult(
              enrollmentNo
            );

          if (
            response &&
            response.data
          ) {
            const todayResults =
              response.data.filter(
                (item) =>
                  isToday(item)
              );

            const formattedGames =
              formatMarketResults(
                todayResults
              );

            setGames(
              formattedGames
            );
          }
        } catch (error) {
          console.error(
            "Error fetching results:",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    fetchData();
  }, []);

  return (
    <Box
      id="markets-section"
      sx={{
        position: "relative",

        py: {
          xs: 6,
          md: 10,
        },

        px: {
          xs: 2,
          md: 4,
        },

        background:
          "#f2f2f2",

        overflow: "hidden",
      }}
    >
      {/* TOP SHAPE */}

      <Box
        component="img"
        src={top}
        alt="top"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          opacity: 0.6,
        }}
      />

      {/* FLOATING DOTS */}

      <Box
        sx={{
          width: 26,
          height: 26,
          borderRadius: "50%",
          background:
            "#89b8bc",
          position: "absolute",
          right: "5%",
          top: "30%",
        }}
      />

      {/* CONTENT */}

      <Box
        sx={{
          maxWidth: "1150px",
          margin: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* TITLE */}

        <Typography
          sx={{
            fontSize: {
              xs: "34px",
              md: "56px",
            },

            fontWeight: 700,

            color: "#17233c",

            mb: 4,

            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          Games
        </Typography>

        {/* LOADING */}

        {loading ? (
          <Typography
            textAlign="center"
          >
            Loading...
          </Typography>
        ) : (
          <Grid
            container
            spacing={2}
          >
            {games.map(
              (
                game,
                index
              ) => (
                <Grid
                  key={index}
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 4,
                  }}
                >
                  <Box
                    sx={{
                      background:
                        "#f8f8f8",

                      borderRadius:
                        "6px",

                      p: 2,

                      minHeight:
                        "170px",

                      display:
                        "flex",

                      flexDirection:
                        "column",

                      justifyContent:
                        "space-between",

                      boxShadow:
                        "0 2px 10px rgba(0,0,0,0.03)",

                      transition:
                        "0.3s ease",

                      "&:hover":
                        {
                          transform:
                            "translateY(-4px)",
                        },
                    }}
                  >
                    {/* TOP */}

                    <Box>
                      <Box
                        sx={{
                          display:
                            "flex",

                          alignItems:
                            "flex-start",

                          justifyContent:
                            "space-between",

                          gap: 1,
                        }}
                      >
                        {/* LEFT */}

                        <Box>
                          <Typography
                            sx={{
                              fontSize:
                                {
                                  xs: "20px",
                                  md: "24px",
                                },

                              fontWeight: 500,

                              color:
                                "#222",

                              textTransform:
                                "uppercase",

                              display:
                                "flex",

                              alignItems:
                                "center",

                              gap: 1,
                            }}
                          >
                            {game.market_name ||
                              game
                                .market_id
                                ?.name}

                            <InfoOutlinedIcon
                              sx={{
                                fontSize:
                                  "18px",
                              }}
                            />
                          </Typography>

                          <Typography
                            sx={{
                              mt: 1,

                              fontSize:
                                {
                                  xs: "24px",
                                  md: "30px",
                                },

                              fontWeight: 700,

                              color:
                                "#222",
                            }}
                          >
                            {game.formattedResult}
                          </Typography>
                        </Box>

                        {/* RIGHT */}

                        <Box
                          textAlign="right"
                        >
                          <Typography
                            sx={{
                              color:
                                "#f36b7f",

                              fontSize:
                                "14px",

                              mb: 1,
                            }}
                          >
                            Open for
                            today
                          </Typography>

                          <Box
                            sx={{
                              width: 32,
                              height: 32,

                              borderRadius:
                                "50%",

                              background:
                                "#f1b51c",

                              display:
                                "flex",

                              alignItems:
                                "center",

                              justifyContent:
                                "center",

                              ml: "auto",

                              cursor:
                                "pointer",
                            }}
                          >
                            <PlayArrowRoundedIcon
                              sx={{
                                color:
                                  "#fff",
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    {/* BUTTONS */}

                    <Box
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "center",

                        gap: 1.5,

                        mt: 3,
                      }}
                    >
                      {/* JODI */}

                      <Button
                        onClick={() =>
                          navigate(
                            `jodi-chart/${
                              game.market_name ||
                              game
                                .market_id
                                ?.name
                            }/${
                              game
                                .market_id
                                ?.market_id ||
                              ""
                            }`
                          )
                        }
                        variant="outlined"
                        sx={{
                          height: 34,

                          minWidth:
                            "120px",

                          border:
                            "1px solid #f1b51c",

                          borderRadius:
                            "6px",

                          color:
                            "#444",

                          fontSize:
                            "16px",

                          textTransform:
                            "none",

                          "&:hover":
                            {
                              border:
                                "1px solid #f1b51c",

                              background:
                                "#f1b51c",

                              color:
                                "#fff",
                            },
                        }}
                      >
                        Jodi Chart
                      </Button>

                      {/* PANA */}

                      <Button
                        onClick={() =>
                          navigate(
                            `pana-chart/${
                              game.market_name ||
                              game
                                .market_id
                                ?.name
                            }/${
                              game
                                .market_id
                                ?.market_id ||
                              ""
                            }`
                          )
                        }
                        variant="outlined"
                        sx={{
                          height: 34,

                          minWidth:
                            "120px",

                          border:
                            "1px solid #f1b51c",

                          borderRadius:
                            "6px",

                          color:
                            "#444",

                          fontSize:
                            "16px",

                          textTransform:
                            "none",

                          "&:hover":
                            {
                              border:
                                "1px solid #f1b51c",

                              background:
                                "#f1b51c",

                              color:
                                "#fff",
                            },
                        }}
                      >
                        Pana Chart
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              )
            )}
          </Grid>
        )}
      </Box>

      {/* BOTTOM SHAPE */}

      <Box
        component="img"
        src={bottom}
        alt="bottom"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          opacity: 0.6,
        }}
      />
    </Box>
  );
}
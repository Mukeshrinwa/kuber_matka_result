import {
  Box,
  Typography,
  Container,
} from "@mui/material";

import AndroidIcon from "@mui/icons-material/Android";

import { useNavigate } from "react-router-dom";

import React, {
  useState,
  useEffect,
} from "react";

import { fetchResult } from "../../api/resultApi";

export default function ChartsPage() {
  const navigate =
    useNavigate();

  const [markets, setMarkets] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadMarkets =
      async () => {
        try {
          const response =
            await fetchResult();

          const raw =
            Array.isArray(
              response?.data
            )
              ? response.data
              : Array.isArray(
                    response
                  )
                ? response
                : [];

          const uniqueMap =
            {};

          raw.forEach(
            (item) => {
              const m =
                item?.market_id;

              if (
                m &&
                m.market_id &&
                m.name
              ) {
                uniqueMap[
                  m.market_id
                ] = {
                  marketId:
                    m.market_id,

                  name: m.name,
                };
              }
            }
          );

          const uniqueMarkets =
            Object.values(
              uniqueMap
            ).sort(
              (a, b) =>
                a.marketId -
                b.marketId
            );

          setMarkets(
            uniqueMarkets
          );
        } catch (err) {
          console.error(
            "Error loading markets:",
            err
          );
        } finally {
          setLoading(false);
        }
      };

    loadMarkets();
  }, []);

  const slugify = (
    name
  ) =>
    name
      .toLowerCase()
      .replace(/\s+/g, "-");

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
      <Container maxWidth="xl">
        {/* ================= DOWNLOAD APP ================= */}

        <Box
          sx={{
            maxWidth:
              "1450px",

            mx: "auto",

            mb: 7,
          }}
        >
          <Box
            sx={{
              height: {
                xs: "70px",
                md: "76px",
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
                xs: "24px",
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

        {/* ================= JODI CHART ================= */}

        <Box mb={8}>
          {/* TITLE */}

          <Typography
            sx={{
              textAlign:
                "center",

              color:
                "#17233c",

              fontWeight: 500,

              mb: 4,

              lineHeight: 1.2,

              fontSize: {
                xs: "42px",
                md: "34px",
              },
            }}
          >
            Jodi Chart
          </Typography>

          {/* LIST */}

          <Box>
            {loading ? (
              <Typography
                textAlign="center"
                py={4}
                fontSize="24px"
              >
                Loading...
              </Typography>
            ) : (
              markets.map(
                (
                  market
                ) => {
                  const routeBase =
                    slugify(
                      market.name
                    );

                  return (
                    <Box
                      key={
                        market.marketId
                      }
                      onClick={() =>
                        navigate(
                          `/jodi-chart/${routeBase}/${market.marketId}`
                        )
                      }
                      sx={{
                        background:
                          "#f8f8f8",

                        borderRadius:
                          "6px",

                        height:
                          {
                            xs: "82px",
                            md: "76px",
                          },

                        mb: 1.5,

                        display:
                          "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "center",

                        position:
                          "relative",

                        cursor:
                          "pointer",

                        transition:
                          "0.3s ease",

                        "&:hover":
                          {
                            background:
                              "#fff",

                            transform:
                              "translateY(-2px)",
                          },
                      }}
                    >
                      {/* LEFT LINE */}

                      <Box
                        sx={{
                          position:
                            "absolute",

                          left: 20,

                          width:
                            "4px",

                          height:
                            "40px",

                          borderRadius:
                            "10px",

                          background:
                            "#f1b51c",
                        }}
                      />

                      {/* NAME */}

                      <Typography
                        sx={{
                          color:
                            "#17233c",

                          textTransform:
                            "uppercase",

                          fontWeight: 500,

                          letterSpacing:
                            "1px",

                          textAlign:
                            "center",

                          fontSize:
                            {
                              xs: "22px",
                              md: "24px",
                            },
                        }}
                      >
                        {
                          market.name
                        }
                      </Typography>
                    </Box>
                  );
                }
              )
            )}
          </Box>
        </Box>

        {/* ================= PANA CHART ================= */}

        <Box mt={10}>
          {/* TITLE */}

          <Typography
            sx={{
              textAlign:
                "center",

              color:
                "#17233c",

              fontWeight: 500,

              mb: 4,

              lineHeight: 1.2,

              fontSize: {
                xs: "42px",
                md: "34px",
              },
            }}
          >
            Pana Chart
          </Typography>

          {/* LIST */}

          <Box>
            {loading ? (
              <Typography
                textAlign="center"
                py={4}
                fontSize="24px"
              >
                Loading...
              </Typography>
            ) : (
              markets.map(
                (
                  market
                ) => {
                  const routeBase =
                    slugify(
                      market.name
                    );

                  return (
                    <Box
                      key={
                        market.marketId
                      }
                      onClick={() =>
                        navigate(
                          `/pana-chart/${routeBase}/${market.marketId}`
                        )
                      }
                      sx={{
                        background:
                          "#f8f8f8",

                        borderRadius:
                          "6px",

                        height:
                          {
                            xs: "82px",
                            md: "76px",
                          },

                        mb: 1.5,

                        display:
                          "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "center",

                        position:
                          "relative",

                        cursor:
                          "pointer",

                        transition:
                          "0.3s ease",

                        "&:hover":
                          {
                            background:
                              "#fff",

                            transform:
                              "translateY(-2px)",
                          },
                      }}
                    >
                      {/* LEFT LINE */}

                      <Box
                        sx={{
                          position:
                            "absolute",

                          left: 20,

                          width:
                            "4px",

                          height:
                            "40px",

                          borderRadius:
                            "10px",

                          background:
                            "#f1b51c",
                        }}
                      />

                      {/* NAME */}

                      <Typography
                        sx={{
                          color:
                            "#17233c",

                          textTransform:
                            "uppercase",

                          fontWeight: 500,

                          letterSpacing:
                            "1px",

                          textAlign:
                            "center",

                          fontSize:
                            {
                              xs: "22px",
                              md: "24px",
                            },
                        }}
                      >
                        {
                          market.name
                        }
                      </Typography>
                    </Box>
                  );
                }
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
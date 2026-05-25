import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";

import imgStart from "../../assets/images/imgStart.gif";

const features = [
  "Live Updates",
  "Daily Games",
  "Multi Language Support",
  "Telegram Group",
];

export default function StartEarning() {
  return (
    <Box
      sx={{
        background: "#f7f7f7",

        py: {
          xs: 8,
          md: 12,
        },

        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={6}
          alignItems="center"
        >
          {/* ================= LEFT IMAGE ================= */}

          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={imgStart}
                alt="Start Earning"
                sx={{
                  width: "100%",
                  maxWidth: "520px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>

          {/* ================= RIGHT CONTENT ================= */}

          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                color: "#8b8b8b",

                fontSize: {
                  xs: "18px",
                  md: "22px",
                },

                mb: 1,
              }}
            >
              What We Offer
            </Typography>

            <Typography
              sx={{
                fontWeight: 500,

                color: "#17233c",

                lineHeight: 1.2,

                mb: 5,

                fontSize: {
                  xs: "38px",
                  md: "24px",
                },
              }}
            >
              Play Game And Start Earning
            </Typography>

            {/* FEATURES */}

            <Stack spacing={3}>
              {features.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2.5,
                  }}
                >
                  {/* ICON */}

                  <Box
                    sx={{
                      width: {
                        xs: 50,
                        md: 60,
                      },

                      height: {
                        xs: 50,
                        md: 60,
                      },

                      borderRadius: "50%",

                      background: "#fff",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      boxShadow:
                        "0 5px 20px rgba(0,0,0,0.06)",

                      flexShrink: 0,
                    }}
                  >
                    <CheckIcon
                      sx={{
                        color: "#ff1493",

                        fontSize: {
                          xs: 24,
                          md: "24px",
                        },
                      }}
                    />
                  </Box>

                  {/* TEXT */}

                  <Typography
                    sx={{
                      color: "#17233c",

                      fontWeight: 400,

                      fontSize: {
                        xs: "20px",
                        md: "24px",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* ================= TRUSTED SECTION ================= */}

        <Box
          sx={{
            mt: {
              xs: 8,
              md: 12,
            },
          }}
        >
          {/* HEADING */}

          <Typography
            sx={{
              textAlign: "center",

              color: "#17233c",

              fontWeight: 500,

              mb: 5,

              fontSize: {
                xs: "30px",
                md: "28px",
              },
            }}
          >
            Trusted By Lakhs Of Verified Players
          </Typography>

          {/* MAIN BOX */}

          <Box
            sx={{
              background: "#f2f2f7",

              borderRadius: "18px",

              p: {
                xs: 3,
                md: 6,
              },

              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "300px 1fr",
              },

              gap: {
                xs: 5,
                md: 8,
              },

              alignItems: "center",
            }}
          >
            {/* LEFT SIDE */}

            <Box
              sx={{
                textAlign: "center",
              }}
            >
              {/* RATING */}

              <Typography
                sx={{
                  color: "#1e293b",

                  fontWeight: 500,

                  lineHeight: 1,

                  fontSize: {
                    xs: "60px",
                    md: "28px",
                  },
                }}
              >
                4.5
              </Typography>

              {/* STARS */}

              <Box
                sx={{
                  display: "flex",

                  justifyContent: "center",

                  mt: 2,

                  gap: 0.5,
                }}
              >
                {["★", "★", "★", "★", "★"].map(
                  (star, index) => (
                    <Typography
                      key={index}
                      sx={{
                        color:
                          index === 4
                            ? "#111"
                            : "#66cc33",

                        fontSize: {
                          xs: "36px",
                          md: "24px",
                        },

                        lineHeight: 1,
                      }}
                    >
                      {star}
                    </Typography>
                  )
                )}
              </Box>
            </Box>

            {/* RIGHT SIDE */}

            <Stack spacing={3}>
              {[
                {
                  label: "5",
                  value: "90%",
                },
                {
                  label: "4",
                  value: "75%",
                },
                {
                  label: "3",
                  value: "55%",
                },
                {
                  label: "2",
                  value: "25%",
                },
                {
                  label: "1",
                  value: "15%",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",

                    alignItems: "center",

                    gap: 2,
                  }}
                >
                  {/* NUMBER */}

                  <Typography
                    sx={{
                      minWidth: "20px",

                      color: "#1e293b",

                      fontWeight: 500,

                      fontSize: {
                        xs: "22px",
                        md: "20px",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>

                  {/* BAR */}

                  <Box
                    sx={{
                      flex: 1,

                      height: {
                        xs: "12px",
                        md: "16px",
                      },

                      borderRadius: "50px",

                      background: "#fff",

                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: item.value,

                        height: "100%",

                        borderRadius: "50px",

                        background:
                          "linear-gradient(90deg,#66cc33 0%,#66cc33 100%)",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* ================= EXTRA SECTION ================= */}

        <Box
          sx={{
            mt: {
              xs: 8,
              md: 12,
            },
          }}
        >
          {/* HEADING */}

          <Typography
            sx={{
              textAlign: "center",

              color: "#17233c",

              fontWeight: 500,

              mb: 5,

              fontSize: {
                xs: "30px",
                md: "24px",
              },
            }}
          >
            Why Users Love Our Platform
          </Typography>

          {/* CARDS */}

          <Grid
            container
            spacing={3}
          >
            {[
              {
                title: "Fast Withdraw",
                desc: "Instant withdrawals directly into your bank account.",
                icon: "⚡",
              },
              {
                title: "24/7 Support",
                desc: "Our support team is always available for your help.",
                icon: "🎧",
              },
              {
                title: "Safe & Secure",
                desc: "100% secure and trusted platform for all users.",
                icon: "🛡️",
              },
            ].map((item, index) => (
              <Grid
                item
                size={{
                  xs: 12,
                  md: 4,
                }}
                key={index}
              >
                <Box
                  sx={{
                    background: "#fff",

                    borderRadius: "18px",

                    p: 4,

                    textAlign: "center",

                    height: "100%",

                    boxShadow:
                      "0 5px 20px rgba(0,0,0,0.04)",

                    transition: "0.3s ease",

                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "50px",
                        md: "24px",
                      },

                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#17233c",

                      fontWeight: 600,

                      mb: 1.5,

                      fontSize: {
                        xs: "24px",
                        md: "24px",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#7a7a7a",

                      lineHeight: 1.8,

                      fontSize: {
                        xs: "15px",
                        md: "18px",
                      },
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ================= SARA777 CONTENT SECTION ================= */}

        <Box
          sx={{
            mt: {
              xs: 8,
              md: 12,
            },
          }}
        >
          <Box
            sx={{
              background: "#fff",

              border: "2px solid #f1b51c",

              borderRadius: "18px",

              p: {
                xs: 3,
                md: 5,
              },

              boxShadow:
                "0 5px 20px rgba(0,0,0,0.03)",
            }}
          >
            <Typography
              sx={{
                color: "#f1b51c",

                fontWeight: 500,

                mb: 4,

                lineHeight: 1.3,

                fontSize: {
                  xs: "32px",
                  md: "24px",
                },
              }}
            >
              Sara777 – Your Complete
              Satta Matka Chart
              Destination
            </Typography>

            <Typography
              sx={{
                color: "#333",

                lineHeight: 2,

                whiteSpace:
                  "pre-line",

                fontSize: {
                  xs: "16px",
                  md: "18px",
                },
              }}
            >
{`Welcome to Sara777, the most trusted platform for accurate and real-time Satta Matka Charts. Whether you are looking for Radha Morning Chart, Lata Morning Chart, Madhur Day Chart, or Sridevi Night Chart, we provide structured data, historical records, and daily updates.

Our mission is simple: to deliver accurate, transparent, and easy-to-read charts so that users can track market trends and make informed decisions.

Why Sara777 is the Right Choice

• Accurate Updates – Charts are refreshed in real time with verified data.
• Comprehensive Coverage – From morning to night markets, we cover every major chart.
• Historical Records – Access long-term data to study trends and repeating patterns.
• User-Friendly Design – Clean navigation for desktop and mobile users.
• Trusted Data Source – Structured and transparent presentation.

Complete Chart Collection at Sara777

• Radha Morning Chart
• Lata Morning Chart
• Madhur Day Panel Chart
• Sridevi Night Chart
• Kalyan Panel Chart
• Main Bazar Chart
• Rajdhani Night Chart
• Milan Day & Milan Night Chart
• Kalyan Jodi Chart

Radha Morning Chart – Start Your Day with Insights

The Radha Morning Chart is designed for those who want to analyze early-day market results.

Lata Morning Chart – Reliable Morning Analysis

The Lata Morning Chart provides essential insights into morning results.

Madhur Day Chart – Mid-Day Market Trends

The Madhur Day Panel Chart is one of the most followed charts in the Satta Matka community.

Sridevi Night Chart – Evening Market Results

The Sridevi Night Chart is highly popular among evening market followers.

Frequently Asked Questions

Q1: How do I check Radha Morning Chart results on Sara777?
Visit the Radha Morning Chart section for the latest updates and past results.

Q2: Is Sara777 data reliable?
Yes. Every update is verified and structured to ensure accuracy.

Conclusion

Sara777 is more than just a chart website. We are a complete hub for Radha Morning Chart, Lata Morning Chart, Madhur Day, and Sridevi Night Chart.`}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
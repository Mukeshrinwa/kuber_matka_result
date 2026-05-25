import React, {
  useState,
} from "react";

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import top from "../../assets/images/section-top.svg";
import bottom from "../../assets/images/section-bottom.svg";

const faqData = [
  {
    question:
      "What is Sara777 ?",

    answer:
      "Sara777 is an online platform that provides real-time Satta Matka results and charts.",
  },

  {
    question:
      "What are games are available on Sara777 ?",

    answer:
      "Sara777 offers multiple games including Kalyan, Milan, Madhur, Rajdhani, Main Bazar and many more.",
  },

  {
    question:
      "Is Sara777 Have Licence ?",

    answer:
      "Sara777 provides trusted gaming services with secure access for users.",
  },

  {
    question:
      "What Is Minimum Deposit and Withdrawals ?",

    answer:
      "Minimum deposit and withdrawal limits may vary depending on the payment method.",
  },

  {
    question:
      "Why to Choose Sara777 Among Other Providers ?",

    answer:
      "Sara777 provides fast updates, easy navigation, and trusted charts for users.",
  },

  {
    question:
      "What is Sara777, and how does it help with Satta Matka charts?",

    answer:
      "Sara777 helps users track live charts, historical records, and game results easily.",
  },

  {
    question:
      "How often are the charts on Sara777 updated?",

    answer:
      "Charts are updated regularly with real-time results and accurate information.",
  },

  {
    question:
      "What is the purpose of the Kalyan Panel Chart?",

    answer:
      "Kalyan Panel Chart helps users analyze number patterns and historical trends.",
  },

  {
    question:
      "Can I access Sara777 Satta Matka charts on my mobile device?",

    answer:
      "Yes, Sara777 is fully mobile responsive and works smoothly on smartphones.",
  },

  {
    question:
      "What is the difference between the Rajdhani Night Chart and the Milan Night Chart?",

    answer:
      "Both charts belong to different game markets with separate result patterns and timings.",
  },

  {
    question:
      "How can the Kalyan Jodi Chart help in making decisions?",

    answer:
      "Kalyan Jodi Chart allows users to review historical combinations and identify trends.",
  },

  {
    question:
      "Are historical records available for past games on Sara777?",

    answer:
      "Yes, users can check previous records and archived chart data on Sara777.",
  },

  {
    question:
      "Is there a way to compare different timeframes on Sara777?",

    answer:
      "Yes, users can compare charts from multiple days and markets for better analysis.",
  },

  {
    question:
      "Does Sara777 offer interactive options for analyzing charts?",

    answer:
      "Sara777 provides easy-to-read charts and structured data for quick analysis.",
  },

  {
    question:
      "How can I ensure I get the most accurate data from Sara777?",

    answer:
      "Always check live updated charts and trusted historical records available on Sara777.",
  },

  {
    question:
      "How often are Sara777 charts updated?",

    answer:
      "Charts are updated instantly whenever new results are available.",
  },

  {
    question:
      "Where can I download the Sara777 app?",

    answer:
      "You can download the Sara777 app directly from the official website.",
  },

  {
    question:
      "Is Sara777 safe?",

    answer:
      "Yes, Sara777 provides a secure and user-friendly experience for users.",
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] =
    useState(0);

  const handleChange =
    (panel) => (_, isExpanded) => {
      setExpanded(
        isExpanded
          ? panel
          : false
      );
    };

  return (
    <Box
      sx={{
        position: "relative",

        background: "#f2f2f2",

        py: {
          xs: 8,
          md: 12,
        },

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

      {/* CONTENT */}

      <Container maxWidth="lg">
        {/* HEADING */}

        <Typography
          sx={{
            textAlign: "center",

            color: "#222",

            mb: 6,

            fontWeight: 400,

            fontSize: {
              xs: "34px",
              md: "24px",
            },
          }}
        >
          Frequently asked{" "}
          <Box
            component="span"
            sx={{
              fontWeight: 700,
            }}
          >
            questions?
          </Box>
        </Typography>

        {/* FAQ */}

        <Box>
          {faqData.map(
            (
              item,
              index
            ) => (
              <Accordion
                key={index}
                expanded={
                  expanded ===
                  index
                }
                onChange={handleChange(
                  index
                )}
                elevation={0}
                disableGutters
                sx={{
                  background:
                    "transparent",

                  borderBottom:
                    "1px solid #d9d9d9",

                  "&:before": {
                    display:
                      "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color:
                          expanded ===
                          index
                            ? "#f1b51c"
                            : "#555",
                      }}
                    />
                  }
                  sx={{
                    px: 0,

                    minHeight:
                      "65px",

                    "& .MuiAccordionSummary-content":
                      {
                        margin:
                          "14px 0",
                      },
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        expanded ===
                        index
                          ? "#f1b51c"
                          : "#333",

                      fontWeight:
                        expanded ===
                        index
                          ? 500
                          : 400,

                      transition:
                        "0.3s ease",

                      fontSize:
                        {
                          xs: "16px",
                          md: "18px",
                        },
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: 0,
                    pt: 0,
                    pb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        "#666",

                      lineHeight: 1.9,

                      fontSize:
                        {
                          xs: "14px",
                          md: "16px",
                        },
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          )}
        </Box>
      </Container>

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
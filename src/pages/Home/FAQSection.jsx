import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

const faqData = [
  {
    question: "What is Sara777 ?",
    answer:
      "Sara777 is an online platform that provides real-time Satta Matka results and charts.",
  },
  {
    question: "What are games are available on Sara777 ?",
    answer:
      "Sara777 offers multiple games including Kalyan, Milan, Madhur, Rajdhani, Main Bazar and many more.",
  },
  {
    question: "Is Sara777 Have Licence ?",
    answer:
      "Sara777 provides trusted gaming services with secure access for users.",
  },
  {
    question: "What Is Minimum Deposit and Withdrawals ?",
    answer:
      "Minimum deposit and withdrawal limits may vary depending on the payment method.",
  },
  {
    question: "Why to Choose Sara777 Among Other Providers ?",
    answer:
      "Sara777 provides fast updates, easy navigation, and trusted charts for users.",
  },
  {
    question: "What is Sara777, and how does it help with Satta Matka charts?",
    answer:
      "Sara777 helps users track live charts, historical records, and game results easily.",
  },
  {
    question: "How often are the charts on Sara777 updated?",
    answer:
      "Charts are updated regularly with real-time results and accurate information.",
  },
  {
    question: "What is the purpose of the Kalyan Panel Chart?",
    answer:
      "Kalyan Panel Chart helps users analyze number patterns and historical trends.",
  },
  {
    question: "Can I access Sara777 Satta Matka charts on my mobile device?",
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
    question: "How can the Kalyan Jodi Chart help in making decisions?",
    answer:
      "Kalyan Jodi Chart allows users to review historical combinations and identify trends.",
  },
  {
    question: "Are historical records available for past games on Sara777?",
    answer:
      "Yes, users can check previous records and archived chart data on Sara777.",
  },
  {
    question: "Is there a way to compare different timeframes on Sara777?",
    answer:
      "Yes, users can compare charts from multiple days and markets for better analysis.",
  },
  {
    question: "Does Sara777 offer interactive options for analyzing charts?",
    answer:
      "Sara777 provides easy-to-read charts and structured data for quick analysis.",
  },
  {
    question: "How can I ensure I get the most accurate data from Sara777?",
    answer:
      "Always check live updated charts and trusted historical records available on Sara777.",
  },
  {
    question: "How often are Sara777 charts updated?",
    answer: "Charts are updated instantly whenever new results are available.",
  },
  {
    question: "Where can I download the Sara777 app?",
    answer:
      "You can download the Sara777 app directly from the official website.",
  },
  {
    question: "Is Sara777 safe?",
    answer:
      "Yes, Sara777 provides a secure and user-friendly experience for users.",
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "transparent",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(123, 97, 255, 0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          top: "10%",
          right: "-5%",
          animation: "float 10s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-25px)" },
          },
        }}
      />

      <Container maxWidth="lg">
        {/* HEADING */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              px: 3,
              py: 1,
              borderRadius: "50px",
              background: "rgba(123, 97, 255, 0.08)",
              border: "1px solid rgba(123, 97, 255, 0.15)",
              mb: 3,
            }}
          >
            <HelpOutlineRoundedIcon sx={{ color: "#7b61ff", fontSize: 18 }} />
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#7b61ff",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              FAQ
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "28px", md: "38px" },
              fontFamily: "'Outfit', sans-serif",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Frequently asked{" "}
            <Box
              component="span"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(135deg, #7b61ff, #00f0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              questions?
            </Box>
          </Typography>
        </Box>

        {/* FAQ */}
        <Box
          sx={{
            maxWidth: "900px",
            margin: "auto",
            background: "rgba(15, 20, 40, 0.4)",
            backdropFilter: "blur(16px)",
            borderRadius: "20px",
            border: "1px solid rgba(123, 97, 255, 0.1)",
            overflow: "hidden",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, #7b61ff, #00f0ff, transparent)",
            },
          }}
        >
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              elevation={0}
              disableGutters
              sx={{
                background: "transparent",
                borderBottom:
                  index < faqData.length - 1
                    ? "1px solid rgba(255,255,255,0.04)"
                    : "none",
                "&:before": { display: "none" },
                transition: "background 0.3s ease",
                "&:hover": {
                  background: "rgba(123, 97, 255, 0.03)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "8px",
                      background:
                        expanded === index
                          ? "linear-gradient(135deg, #7b61ff, #00f0ff)"
                          : "rgba(255,255,255,0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ExpandMoreIcon
                      sx={{
                        color: expanded === index ? "#fff" : "rgba(255,255,255,0.4)",
                        fontSize: 20,
                        transition: "color 0.3s ease",
                      }}
                    />
                  </Box>
                }
                sx={{
                  px: { xs: 2, md: 3 },
                  minHeight: "68px",
                  "& .MuiAccordionSummary-content": {
                    margin: "16px 0",
                  },
                }}
              >
                <Typography
                  sx={{
                    color:
                      expanded === index
                        ? "#fff"
                        : "rgba(255,255,255,0.65)",
                    fontWeight: expanded === index ? 600 : 400,
                    transition: "all 0.3s ease",
                    fontSize: { xs: "14px", md: "16px" },
                    fontFamily: "'Outfit', sans-serif",
                    pr: 2,
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: { xs: 2, md: 3 },
                  pt: 0,
                  pb: 2.5,
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.9,
                    fontSize: { xs: "13px", md: "15px" },
                    fontFamily: "'Outfit', sans-serif",
                    pl: 0,
                    borderLeft: "2px solid rgba(123, 97, 255, 0.3)",
                    paddingLeft: 2,
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
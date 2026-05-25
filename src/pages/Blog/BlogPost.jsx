import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import {
  Link,
  useParams,
} from "react-router-dom";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const blogPosts = [
  {
    id: 1,

    title:
      "Sara777 - The Complete Guide to Sara 777, Sara777 App, and Radha Morning Chart",

    content: `
Introduction

In the world of Satta Matka, accuracy and transparency are everything. That is where Sara777 has built its reputation as a trusted platform.

What is Sara777?

Sara777 is a leading online platform for Satta Matka charts and results. It covers all major markets including morning, day, and night games.

Features:
• Real-time updates of charts
• Historical data archives
• Mobile friendly interface
• Fast loading website

Sara777 vs Sara777

Both terms point to the same trusted platform. Users often search using different spellings.

The Sara777 App

The app allows users to check charts, results, and market timings instantly from mobile devices.

Radha Morning Chart

Radha Morning Chart is one of the most followed charts in Satta Matka due to its accurate and trusted historical data.

Conclusion

Sara777 continues to be one of the most trusted destinations for Satta Matka charts and gaming updates.
`,
  },
];

export default function BlogDetails() {
  const { id } =
    useParams();

  const post =
    blogPosts.find(
      (item) =>
        item.id ===
        Number(id)
    );

  return (
    <Box
      sx={{
        background:
          "#f2f2f2",

        minHeight:
          "100vh",

        py: {
          xs: 5,
          md: 8,
        },

        px: 2,
      }}
    >
      {/* BACK BTN */}

      <Box
        sx={{
          maxWidth:
            "900px",

          margin:
            "0 auto 25px",
        }}
      >
        <Button
          component={Link}
          to="/blogs"
          startIcon={
            <ArrowBackRoundedIcon />
          }
          sx={{
            color: "#222",

            fontSize:
              "16px",

            textTransform:
              "none",

            fontWeight: 500,
          }}
        >
          Back
        </Button>
      </Box>

      {/* CONTENT */}

      <Box
        sx={{
          maxWidth:
            "900px",

          margin: "auto",

          background:
            "#fff",

          borderRadius:
            "12px",

          p: {
            xs: 2.5,
            md: 5,
          },

          boxShadow:
            "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        {/* TITLE */}

        <Typography
          sx={{
            fontSize: {
              xs: "28px",
              md: "44px",
            },

            fontWeight: 600,

            lineHeight: 1.3,

            color: "#222",

            mb: 3,
          }}
        >
          {post?.title}
        </Typography>

        {/* CONTENT */}

        <Typography
          sx={{
            fontSize: {
              xs: "16px",
              md: "18px",
            },

            lineHeight: 2,

            color: "#444",

            whiteSpace:
              "pre-line",
          }}
        >
          {post?.content}
        </Typography>
      </Box>
    </Box>
  );
}
import { Box, Typography, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
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
  const { id } = useParams();
  const post = blogPosts.find((item) => item.id === Number(id));

  return (
    <Box
      sx={{
        background: "transparent",
        minHeight: "100vh",
        py: { xs: 5, md: 8 },
        px: 2,
      }}
    >
      {/* BACK BTN */}
      <Box sx={{ maxWidth: "900px", margin: "0 auto 25px" }}>
        <Button
          component={Link}
          to="/blog"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{
            color: "#00f0ff",
            fontSize: "15px",
            textTransform: "none",
            fontWeight: 600,
            fontFamily: "'Outfit', sans-serif",
            px: 2.5,
            py: 1,
            borderRadius: "10px",
            border: "1px solid rgba(0, 240, 255, 0.15)",
            background: "rgba(0, 240, 255, 0.05)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "rgba(0, 240, 255, 0.1)",
              borderColor: "#00f0ff",
              transform: "translateX(-4px)",
            },
          }}
        >
          Back to Blogs
        </Button>
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          maxWidth: "900px",
          margin: "auto",
          background: "rgba(15, 20, 40, 0.6)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(0, 240, 255, 0.1)",
          borderRadius: "20px",
          p: { xs: 3, md: 5 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #00f0ff, #7b61ff, transparent)",
          },
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "40px" },
            fontWeight: 700,
            lineHeight: 1.3,
            color: "#fff",
            mb: 3,
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {post?.title}
        </Typography>

        {/* CONTENT */}
        <Typography
          sx={{
            fontSize: { xs: "15px", md: "17px" },
            lineHeight: 2,
            color: "rgba(255,255,255,0.6)",
            whiteSpace: "pre-line",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {post?.content}
        </Typography>
      </Box>
    </Box>
  );
}
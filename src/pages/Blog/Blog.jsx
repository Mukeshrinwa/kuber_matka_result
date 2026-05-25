import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const blogPosts = [
  {
    id: 1,
    title: "Sara777 Online Gaming in India",
    excerpt:
      "Sara777 is a new name in the Indian online gaming and betting market. With the growing digital platform and interest in online gambling.",
    color: "#00f0ff",
    gradient: "linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(123, 97, 255, 0.04))",
    borderColor: "rgba(0, 240, 255, 0.15)",
  },
  {
    id: 2,
    title: "Sara777 - The Complete Guide to Satta Matka Charts and Results",
    excerpt:
      "When it comes to tracking Satta Matka charts, one name that stands out for reliability and accuracy is Sara777.",
    color: "#7b61ff",
    gradient: "linear-gradient(135deg, rgba(123, 97, 255, 0.08), rgba(255, 110, 199, 0.04))",
    borderColor: "rgba(123, 97, 255, 0.15)",
  },
  {
    id: 3,
    title:
      "Sara777 - The Complete Guide to Sara 777, Sara777 App, and Radha Morning Chart",
    excerpt:
      "In the world of Satta Matka, accuracy and transparency are everything. That is where Sara777 has built its reputation.",
    color: "#ff6ec7",
    gradient: "linear-gradient(135deg, rgba(255, 110, 199, 0.08), rgba(255, 215, 0, 0.04))",
    borderColor: "rgba(255, 110, 199, 0.15)",
  },
  {
    id: 4,
    title:
      "Sara777 - Your Complete Guide to Sara 777, Sara777 App, Sara777 APK, and Lata Morning Chart",
    excerpt:
      "In the fast-moving world of Satta Matka, accuracy and accessibility are the two pillars of success.",
    color: "#ffd700",
    gradient: "linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(0, 240, 255, 0.04))",
    borderColor: "rgba(255, 215, 0, 0.15)",
  },
];

export default function Blog() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        background: "transparent",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <Box
        sx={{
          position: "absolute",
          width: 120,
          height: 120,
          background: "radial-gradient(circle, rgba(255, 110, 199, 0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          bottom: "15%",
          left: "3%",
          animation: "float 9s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-18px)" },
          },
        }}
      />

      <Box
        sx={{
          maxWidth: "1150px",
          margin: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* TITLE */}
        <Box sx={{ mb: 5, textAlign: { xs: "center", md: "left" } }}>
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "12px",
                background: "linear-gradient(135deg, rgba(255, 110, 199, 0.12), rgba(123, 97, 255, 0.12))",
                border: "1px solid rgba(255, 110, 199, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AutoStoriesRoundedIcon sx={{ color: "#ff6ec7", fontSize: 22 }} />
            </Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#ff6ec7",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Latest Posts
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "52px" },
              fontWeight: 800,
              background: "linear-gradient(135deg, #ff6ec7, #7b61ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.1,
            }}
          >
            Our Latest Blogs
          </Typography>
        </Box>

        {/* GRID */}
        <Grid container spacing={3}>
          {blogPosts.map((post, index) => (
            <Grid key={post.id} size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  background: "rgba(15, 20, 40, 0.5)",
                  backdropFilter: "blur(16px)",
                  border: `1px solid ${post.borderColor}`,
                  borderRadius: "18px",
                  p: { xs: 3, md: 3.5 },
                  minHeight: "260px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  position: "relative",
                  overflow: "hidden",
                  animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
                  "@keyframes fadeInUp": {
                    from: { opacity: 0, transform: "translateY(25px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${post.color}, transparent)`,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 100,
                    height: 100,
                    background: post.gradient,
                    borderRadius: "50%",
                    transition: "all 0.4s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 25px ${post.borderColor}`,
                    borderColor: post.color,
                    "&::after": {
                      width: 200,
                      height: 200,
                      top: -80,
                      right: -80,
                    },
                  },
                }}
              >
                {/* Post number badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    background: `${post.gradient}`,
                    border: `1px solid ${post.borderColor}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: post.color,
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                  >
                    {String(post.id).padStart(2, "0")}
                  </Typography>
                </Box>

                <Box sx={{ position: "relative", zIndex: 2 }}>
                  {/* TITLE */}
                  <Typography
                    sx={{
                      fontSize: { xs: "22px", md: "24px" },
                      fontWeight: 700,
                      lineHeight: 1.3,
                      color: "#fff",
                      mb: 2,
                      pr: 5,
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {post.title}
                  </Typography>

                  {/* DESC */}
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "15px" },
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.5)",
                      mb: 3,
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                </Box>

                {/* BTN */}
                <Button
                  component={Link}
                  to={`/blog/${post.id}`}
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "16px !important" }} />}
                  sx={{
                    height: 42,
                    px: 3,
                    borderRadius: "10px",
                    background: "transparent",
                    border: `1px solid ${post.borderColor}`,
                    color: post.color,
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    fontFamily: "'Outfit', sans-serif",
                    transition: "all 0.3s ease",
                    alignSelf: "flex-start",
                    position: "relative",
                    zIndex: 2,
                    "&:hover": {
                      background: post.gradient,
                      borderColor: post.color,
                      color: "#fff",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
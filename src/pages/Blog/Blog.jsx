import {
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

import top from "../../assets/images/section-top.svg";
import bottom from "../../assets/images/section-bottom.svg";

const blogPosts = [
  {
    id: 1,
    title:
      "Sara777 Online Gaming in India",
    excerpt:
      "Sara777 is a new name in the Indian online gaming and betting market. With the growing digital platform and interest in online gambling.",
  },

  {
    id: 2,
    title:
      "Sara777 - The Complete Guide to Satta Matka Charts and Results",
    excerpt:
      "When it comes to tracking Satta Matka charts, one name that stands out for reliability and accuracy is Sara777.",
  },

  {
    id: 3,
    title:
      "Sara777 - The Complete Guide to Sara 777, Sara777 App, and Radha Morning Chart",
    excerpt:
      "In the world of Satta Matka, accuracy and transparency are everything. That is where Sara777 has built its reputation.",
  },

  {
    id: 4,
    title:
      "Sara777 - Your Complete Guide to Sara 777, Sara777 App, Sara777 APK, and Lata Morning Chart",
    excerpt:
      "In the fast-moving world of Satta Matka, accuracy and accessibility are the two pillars of success.",
  },
];

export default function Blog() {
  return (
    <Box
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
          Our Latest Blogs
        </Typography>

        {/* GRID */}

        <Grid
          container
          spacing={3}
        >
          {blogPosts.map(
            (post) => (
              <Grid
                key={post.id}
                size={{
                  xs: 12,
                  md: 6,
                }}
              >
                <Box
                  sx={{
                    background:
                      "#f8f8f8",

                    borderRadius:
                      "12px",

                    p: {
                      xs: 2.5,
                      md: 3,
                    },

                    minHeight:
                      "240px",

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
                  {/* TITLE */}

                  <Typography
                    sx={{
                      fontSize:
                        {
                          xs: "26px",
                          md: "30px",
                        },

                      fontWeight: 600,

                      lineHeight: 1.3,

                      color:
                        "#222",

                      mb: 2,
                    }}
                  >
                    {post.title}
                  </Typography>

                  {/* DESC */}

                  <Typography
                    sx={{
                      fontSize:
                        {
                          xs: "16px",
                          md: "18px",
                        },

                      lineHeight: 1.8,

                      color:
                        "#444",

                      mb: 3,
                    }}
                  >
                    {post.excerpt}
                  </Typography>

                  {/* BTN */}

                  <Button
                    component={
                      Link
                    }
                    to={`/blog/${post.id}`}
                    sx={{
                      height: 42,

                      px: 3,

                      borderRadius:
                        "6px",

                      background:
                        "#f1b51c",

                      color:
                        "#000",

                      fontSize:
                        "18px",

                      fontWeight: 500,

                      textTransform:
                        "none",

                      "&:hover":
                        {
                          background:
                            "#d99f13",
                        },
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Grid>
            )
          )}
        </Grid>
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
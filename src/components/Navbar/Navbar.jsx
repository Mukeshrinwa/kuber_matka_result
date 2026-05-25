import React, {
  useState,
  useEffect,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import { fetchResult } from "../../api/resultApi";

export default function Navbar() {
  const [open, setOpen] =
    useState(false);

  const navigate =
    useNavigate();

  const [markets, setMarkets] =
    useState([]);

  const [jodiAnchorEl, setJodiAnchorEl] =
    useState(null);

  const [panaAnchorEl, setPanaAnchorEl] =
    useState(null);

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

  const navItems = [
    {
      label: "Home",
      path: "/",
    },

    {
      label: "Charts",
      path: "/charts",
    },

    {
      label: "Blogs",
      path: "/blog",
    },
  ];

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background:
            "#f4f4f4",

          borderBottom:
            "1px solid #e5e5e5",
        }}
      >
        <Toolbar
          sx={{
            justifyContent:
              "space-between",

            minHeight:
              "88px !important",

            px: {
              xs: 2,
              md: 8,
            },
          }}
        >
          {/* LOGO */}

          <Box
            onClick={() =>
              navigate("/")
            }
            sx={{
              display: "flex",

              alignItems:
                "center",

              cursor:
                "pointer",
            }}
          >
            <img
              src="/logo.svg"
              alt="Sara777 Logo"
              style={{
                width: "200px",

                height:
                  "70px",

                objectFit:
                  "contain",
              }}
            />
          </Box>

          {/* DESKTOP MENU */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              alignItems:
                "center",

              gap: 5,
            }}
          >
            {/* NORMAL MENUS */}

            {navItems.map(
              (
                item,
                index
              ) => (
                <Button
                  key={
                    item.label
                  }
                  onClick={() =>
                    navigate(
                      item.path
                    )
                  }
                  sx={{
                    color:
                      index ===
                        0
                        ? "#f4a300"
                        : "#111",

                    fontSize:
                      { xs: "14px", sm: "16px", md: "18px" },


                    fontWeight: 500,

                    textTransform:
                      "none",

                    p: 0,

                    minWidth:
                      "auto",

                    "&:hover":
                    {
                      background:
                        "transparent",

                      color:
                        "#f4a300",
                    },
                  }}
                >
                  {item.label}
                </Button>
              )
            )}

            {/* ================= JODI DROPDOWN ================= */}

            <Box>
              <Button
                onMouseEnter={(
                  e
                ) =>
                  setJodiAnchorEl(
                    e.currentTarget
                  )
                }
                endIcon={
                  <KeyboardArrowDownRoundedIcon />
                }
                sx={{
                  color:
                    "#111",

                  fontSize:
                    "18px",

                  fontWeight: 500,

                  textTransform:
                    "none",

                  p: 0,

                  minWidth:
                    "auto",

                  "&:hover":
                  {
                    background:
                      "transparent",

                    color:
                      "#f4a300",
                  },
                }}
              >
                Jodi Charts
              </Button>

              <Menu
                anchorEl={
                  jodiAnchorEl
                }
                open={Boolean(
                  jodiAnchorEl
                )}
                onClose={() =>
                  setJodiAnchorEl(
                    null
                  )
                }
                MenuListProps={{
                  onMouseLeave:
                    () =>
                      setJodiAnchorEl(
                        null
                      ),
                }}
                PaperProps={{
                  sx: {
                    width:
                      "260px",

                    borderRadius:
                      "12px",

                    mt: 1,
                  },
                }}
              >
                {markets.map(
                  (
                    market
                  ) => (
                    <MenuItem
                      key={
                        market.marketId
                      }
                      onClick={() => {
                        navigate(
                          `/jodi-chart/${slugify(
                            market.name
                          )}/${market.marketId}`
                        );

                        setJodiAnchorEl(
                          null
                        );
                      }}
                      sx={{
                        fontSize:
                          "16px",

                        py: 1.3,

                        textTransform:
                          "uppercase",

                        "&:hover":
                        {
                          background:
                            "#fff7e7",

                          color:
                            "#f4a300",
                        },
                      }}
                    >
                      {
                        market.name
                      }
                    </MenuItem>
                  )
                )}
              </Menu>
            </Box>

            {/* ================= PANA DROPDOWN ================= */}

            <Box>
              <Button
                onMouseEnter={(
                  e
                ) =>
                  setPanaAnchorEl(
                    e.currentTarget
                  )
                }
                endIcon={
                  <KeyboardArrowDownRoundedIcon />
                }
                sx={{
                  color:
                    "#111",

                  fontSize:
                    "18px",

                  fontWeight: 500,

                  textTransform:
                    "none",

                  p: 0,

                  minWidth:
                    "auto",

                  "&:hover":
                  {
                    background:
                      "transparent",

                    color:
                      "#f4a300",
                  },
                }}
              >
                Pana Charts
              </Button>

              <Menu
                anchorEl={
                  panaAnchorEl
                }
                open={Boolean(
                  panaAnchorEl
                )}
                onClose={() =>
                  setPanaAnchorEl(
                    null
                  )
                }
                MenuListProps={{
                  onMouseLeave:
                    () =>
                      setPanaAnchorEl(
                        null
                      ),
                }}
                PaperProps={{
                  sx: {
                    width:
                      "260px",

                    borderRadius:
                      "12px",

                    mt: 1,
                  },
                }}
              >
                {markets.map(
                  (
                    market
                  ) => (
                    <MenuItem
                      key={
                        market.marketId
                      }
                      onClick={() => {
                        navigate(
                          `/pana-chart/${slugify(
                            market.name
                          )}/${market.marketId}`
                        );

                        setPanaAnchorEl(
                          null
                        );
                      }}
                      sx={{
                        fontSize:
                          "16px",

                        py: 1.3,

                        textTransform:
                          "uppercase",

                        "&:hover":
                        {
                          background:
                            "#fff7e7",

                          color:
                            "#f4a300",
                        },
                      }}
                    >
                      {
                        market.name
                      }
                    </MenuItem>
                  )
                )}
              </Menu>
            </Box>
          </Box>

          {/* DOWNLOAD BTN */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                height: 50,

                px: 3,

                borderRadius:
                  "10px",

                border:
                  "1px solid #f4a300",

                color: "#111",

                fontSize:
                  "18px",

                fontWeight: 500,

                textTransform:
                  "none",

                "&:hover":
                {
                  border:
                    "1px solid #f4a300",

                  background:
                    "#f4a300",

                  color:
                    "#fff",
                },
              }}
            >
              Download App
            </Button>
          </Box>

          {/* MOBILE MENU */}

          <IconButton
            onClick={() =>
              setOpen(true)
            }
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },

              color: "#111",
            }}
          >
            <MenuIcon
              sx={{
                fontSize: 32,
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}

      <Drawer
        anchor="right"
        open={open}
        onClose={() =>
          setOpen(false)
        }
      >
        <Box
          sx={{
            width: 280,

            height: "100%",

            background:
              "#fff",

            p: 3,
          }}
        >
          {/* TOP */}

          <Box
            sx={{
              display: "flex",

              justifyContent:
                "space-between",

              alignItems:
                "center",

              mb: 5,
            }}
          >
            <img
              src="/logo.svg"
              alt="Sara777 Logo"
              style={{
                width: "160px",

                height:
                  "50px",

                objectFit:
                  "contain",
              }}
            />

            <IconButton
              onClick={() =>
                setOpen(false)
              }
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* NORMAL MENU */}

          <List>
            {navItems.map(
              (
                item,
                index
              ) => (
                <ListItemButton
                  key={
                    item.label
                  }
                  onClick={() => {
                    navigate(
                      item.path
                    );

                    setOpen(
                      false
                    );
                  }}
                  sx={{
                    borderRadius:
                      "10px",

                    mb: 1.5,

                    py: 1.5,

                    "&:hover":
                    {
                      background:
                        "#f4f4f4",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        "18px",

                      color:
                        index ===
                          0
                          ? "#f4a300"
                          : "#111",

                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Typography>
                </ListItemButton>
              )
            )}

            {/* JODI */}

            <Typography
              sx={{
                fontSize: "18px",

                fontWeight: 700,

                mt: 2,

                mb: 1,

                color:
                  "#f4a300",
              }}
            >
              Jodi Charts
            </Typography>

            {markets.map(
              (
                market
              ) => (
                <ListItemButton
                  key={
                    market.marketId
                  }
                  onClick={() => {
                    navigate(
                      `/jodi-chart/${slugify(
                        market.name
                      )}/${market.marketId}`
                    );

                    setOpen(
                      false
                    );
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        "16px",

                      textTransform:
                        "uppercase",
                    }}
                  >
                    {
                      market.name
                    }
                  </Typography>
                </ListItemButton>
              )
            )}

            {/* PANA */}

            <Typography
              sx={{
                fontSize: "18px",

                fontWeight: 700,

                mt: 3,

                mb: 1,

                color:
                  "#f4a300",
              }}
            >
              Pana Charts
            </Typography>

            {markets.map(
              (
                market
              ) => (
                <ListItemButton
                  key={
                    market.marketId
                  }
                  onClick={() => {
                    navigate(
                      `/pana-chart/${slugify(
                        market.name
                      )}/${market.marketId}`
                    );

                    setOpen(
                      false
                    );
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        "16px",

                      textTransform:
                        "uppercase",
                    }}
                  >
                    {
                      market.name
                    }
                  </Typography>
                </ListItemButton>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import logoImg from "../../assets/images/newlogo.jpeg";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { fetchResult } from "../../api/resultApi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [markets, setMarkets] = useState([]);
  const [jodiAnchorEl, setJodiAnchorEl] = useState(null);
  const [panaAnchorEl, setPanaAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const loadMarkets = async () => {
      try {
        const response = await fetchResult();
        const raw = Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response)
            ? response
            : [];

        const uniqueMap = {};
        raw.forEach((item) => {
          const m = item?.market_id;
          if (m && m.market_id && m.name) {
            uniqueMap[m.market_id] = {
              marketId: m.market_id,
              name: m.name,
            };
          }
        });

        const uniqueMarkets = Object.values(uniqueMap).sort(
          (a, b) => a.marketId - b.marketId
        );
        setMarkets(uniqueMarkets);
      } catch (err) {
        console.error("Error loading markets:", err);
      }
    };
    loadMarkets();
  }, []);

  const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Charts", path: "/charts" },
    { label: "Blogs", path: "/blog" },
  ];

  const isActive = (path) => location.pathname === path;

  const menuPaperStyle = {
    sx: {
      background: "rgba(10, 14, 26, 0.95)",
      backdropFilter: "blur(24px)",
      border: "1px solid rgba(0, 240, 255, 0.15)",
      borderRadius: "16px",
      mt: 1.5,
      width: "280px",
      boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(0, 240, 255, 0.08)",
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
    },
  };

  const menuItemStyle = {
    fontSize: "15px",
    py: 1.5,
    px: 2.5,
    color: "rgba(255,255,255,0.75)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontFamily: "'Outfit', sans-serif",
    transition: "all 0.25s ease",
    "&:hover": {
      background: "rgba(0, 240, 255, 0.08)",
      color: "#00f0ff",
      pl: 3.5,
    },
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(6, 8, 15, 0.85)"
            : "rgba(6, 8, 15, 0.5)",
          backdropFilter: "blur(24px)",
          borderBottom: scrolled
            ? "1px solid rgba(0, 240, 255, 0.12)"
            : "1px solid transparent",
          transition: "all 0.4s ease",
          zIndex: 1300,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: "72px !important",
            px: { xs: 2, md: 6 },
          }}
        >
          {/* LOGO */}
          <Box
            onClick={() => navigate("/")}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap: 1.5,
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.03)" },
            }}
          >
            <Box
              component="img"
              src={logoImg}
              alt="Kuber Matka"
              sx={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                objectFit: "contain",
              }}
            />
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 800,
                fontFamily: "'Orbitron', sans-serif",
                background: "linear-gradient(135deg, #fff, #00f0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "1px",
              }}
            >
              KUBER MATKA
            </Typography>
          </Box>

          {/* DESKTOP MENU */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  color: isActive(item.path) ? "#00f0ff" : "rgba(255,255,255,0.75)",
                  fontSize: "15px",
                  fontWeight: 600,
                  textTransform: "none",
                  px: 2.5,
                  py: 1,
                  borderRadius: "10px",
                  fontFamily: "'Outfit', sans-serif",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 6,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: isActive(item.path) ? "30px" : "0px",
                    height: "2px",
                    borderRadius: "2px",
                    background: "linear-gradient(90deg, #00f0ff, #7b61ff)",
                    transition: "width 0.3s ease",
                  },
                  "&:hover": {
                    background: "rgba(0, 240, 255, 0.06)",
                    color: "#00f0ff",
                    "&::after": { width: "30px" },
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* JODI DROPDOWN */}
            <Box>
              <Button
                onMouseEnter={(e) => setJodiAnchorEl(e.currentTarget)}
                endIcon={<KeyboardArrowDownRoundedIcon sx={{ fontSize: "18px !important" }} />}
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "15px",
                  fontWeight: 600,
                  textTransform: "none",
                  px: 2.5,
                  py: 1,
                  borderRadius: "10px",
                  fontFamily: "'Outfit', sans-serif",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(0, 240, 255, 0.06)",
                    color: "#00f0ff",
                  },
                }}
              >
                Jodi Charts
              </Button>
              <Menu
                anchorEl={jodiAnchorEl}
                open={Boolean(jodiAnchorEl)}
                onClose={() => setJodiAnchorEl(null)}
                MenuListProps={{
                  onMouseLeave: () => setJodiAnchorEl(null),
                }}
                PaperProps={menuPaperStyle}
              >
                {markets.map((market) => (
                  <MenuItem
                    key={market.marketId}
                    onClick={() => {
                      navigate(`/jodi-chart/${slugify(market.name)}/${market.marketId}`);
                      setJodiAnchorEl(null);
                    }}
                    sx={menuItemStyle}
                  >
                    {market.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* PANA DROPDOWN */}
            <Box>
              <Button
                onMouseEnter={(e) => setPanaAnchorEl(e.currentTarget)}
                endIcon={<KeyboardArrowDownRoundedIcon sx={{ fontSize: "18px !important" }} />}
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "15px",
                  fontWeight: 600,
                  textTransform: "none",
                  px: 2.5,
                  py: 1,
                  borderRadius: "10px",
                  fontFamily: "'Outfit', sans-serif",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(0, 240, 255, 0.06)",
                    color: "#00f0ff",
                  },
                }}
              >
                Pana Charts
              </Button>
              <Menu
                anchorEl={panaAnchorEl}
                open={Boolean(panaAnchorEl)}
                onClose={() => setPanaAnchorEl(null)}
                MenuListProps={{
                  onMouseLeave: () => setPanaAnchorEl(null),
                }}
                PaperProps={menuPaperStyle}
              >
                {markets.map((market) => (
                  <MenuItem
                    key={market.marketId}
                    onClick={() => {
                      navigate(`/pana-chart/${slugify(market.name)}/${market.marketId}`);
                      setPanaAnchorEl(null);
                    }}
                    sx={menuItemStyle}
                  >
                    {market.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          {/* DOWNLOAD BUTTON */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              startIcon={<DownloadRoundedIcon />}
              sx={{
                height: 44,
                px: 3,
                borderRadius: "12px",
                background: "linear-gradient(135deg, #00f0ff, #7b61ff)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "none",
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.5px",
                boxShadow: "0 4px 20px rgba(0, 240, 255, 0.3)",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                "&:hover": {
                  transform: "translateY(-2px) scale(1.03)",
                  boxShadow: "0 8px 30px rgba(0, 240, 255, 0.5)",
                },
              }}
            >
              Download App
            </Button>
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#fff",
              background: "rgba(0, 240, 255, 0.08)",
              border: "1px solid rgba(0, 240, 255, 0.15)",
              borderRadius: "10px",
              width: 42,
              height: 42,
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(0, 240, 255, 0.15)",
                borderColor: "#00f0ff",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacer for fixed navbar */}
      <Box sx={{ height: "72px" }} />

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            background: "linear-gradient(180deg, #06080f 0%, #0d1225 100%)",
            borderLeft: "1px solid rgba(0, 240, 255, 0.12)",
          },
        }}
      >
        <Box sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
          {/* HEADER */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                component="img"
                src={logoImg}
                alt="Kuber Matka"
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 800,
                  fontFamily: "'Orbitron', sans-serif",
                  background: "linear-gradient(135deg, #fff, #00f0ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                KUBER MATKA
              </Typography>
            </Box>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                color: "rgba(255,255,255,0.6)",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#ff6ec7",
                  background: "rgba(255, 110, 199, 0.1)",
                  transform: "rotate(90deg)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Glow divider */}
          <Box
            sx={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, #00f0ff, #7b61ff, transparent)",
              mb: 3,
              opacity: 0.4,
            }}
          />

          {/* NAV ITEMS */}
          <List sx={{ flex: 1 }}>
            {navItems.map((item, index) => (
              <ListItemButton
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                sx={{
                  borderRadius: "12px",
                  mb: 1,
                  py: 1.5,
                  px: 2,
                  background: isActive(item.path)
                    ? "rgba(0, 240, 255, 0.08)"
                    : "transparent",
                  border: isActive(item.path)
                    ? "1px solid rgba(0, 240, 255, 0.15)"
                    : "1px solid transparent",
                  transition: "all 0.3s ease",
                  animation: `fadeInUp 0.5s ease ${index * 0.08}s both`,
                  "@keyframes fadeInUp": {
                    from: { opacity: 0, transform: "translateX(20px)" },
                    to: { opacity: 1, transform: "translateX(0)" },
                  },
                  "&:hover": {
                    background: "rgba(0, 240, 255, 0.06)",
                    transform: "translateX(6px)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: isActive(item.path) ? "#00f0ff" : "rgba(255,255,255,0.75)",
                    fontWeight: 600,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {item.label}
                </Typography>
              </ListItemButton>
            ))}

            {/* JODI */}
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 700,
                mt: 3,
                mb: 1,
                px: 2,
                color: "#00f0ff",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              ◆ Jodi Charts
            </Typography>
            {markets.map((market) => (
              <ListItemButton
                key={market.marketId}
                onClick={() => {
                  navigate(`/jodi-chart/${slugify(market.name)}/${market.marketId}`);
                  setOpen(false);
                }}
                sx={{
                  borderRadius: "10px",
                  py: 1.2,
                  "&:hover": {
                    background: "rgba(0, 240, 255, 0.06)",
                    transform: "translateX(4px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                    textTransform: "uppercase",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {market.name}
                </Typography>
              </ListItemButton>
            ))}

            {/* PANA */}
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 700,
                mt: 3,
                mb: 1,
                px: 2,
                color: "#7b61ff",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              ◆ Pana Charts
            </Typography>
            {markets.map((market) => (
              <ListItemButton
                key={market.marketId}
                onClick={() => {
                  navigate(`/pana-chart/${slugify(market.name)}/${market.marketId}`);
                  setOpen(false);
                }}
                sx={{
                  borderRadius: "10px",
                  py: 1.2,
                  "&:hover": {
                    background: "rgba(123, 97, 255, 0.06)",
                    transform: "translateX(4px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                    textTransform: "uppercase",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {market.name}
                </Typography>
              </ListItemButton>
            ))}
          </List>

          {/* DOWNLOAD BUTTON */}
          <Button
            startIcon={<DownloadRoundedIcon />}
            fullWidth
            sx={{
              mt: 2,
              py: 1.8,
              borderRadius: "14px",
              background: "linear-gradient(135deg, #00f0ff, #7b61ff)",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
              textTransform: "none",
              fontFamily: "'Outfit', sans-serif",
              boxShadow: "0 4px 20px rgba(0, 240, 255, 0.3)",
              "&:hover": {
                boxShadow: "0 8px 30px rgba(0, 240, 255, 0.5)",
              },
            }}
          >
            Download App
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
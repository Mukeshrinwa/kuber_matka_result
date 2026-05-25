import { Box, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DiamondIcon from "@mui/icons-material/Diamond";

export default function RegisterAccount() {
  return (
    <Box
      sx={{
        background: "transparent",
        minHeight: "70vh",
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* PAGE TITLE */}
      <Typography
        textAlign="center"
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: 800,
          background: "linear-gradient(135deg, #00f0ff, #7b61ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 4,
          fontFamily: "'Outfit', sans-serif",
          position: "relative",
        }}
      >
        Register your account
        <Box
          sx={{
            width: "80px",
            height: "3px",
            background: "linear-gradient(90deg, #00f0ff, #7b61ff)",
            margin: "10px auto 0",
            borderRadius: "2px",
          }}
        />
      </Typography>

      {/* CARD */}
      <Box
        sx={{
          maxWidth: "600px",
          width: "100%",
          mx: "auto",
          background: "rgba(15, 20, 40, 0.6)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(0, 240, 255, 0.1)",
          borderRadius: "24px",
          padding: { xs: 4, md: 6 },
          textAlign: "center",
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
        {/* ICON */}
        <Box
          sx={{
            width: 80,
            height: 80,
            background: "linear-gradient(135deg, #00f0ff, #7b61ff)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            boxShadow: "0 8px 25px rgba(0, 240, 255, 0.25)",
          }}
        >
          <PersonOutlineIcon sx={{ color: "#fff", fontSize: 40 }} />
        </Box>

        {/* TITLE */}
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "26px" },
            fontWeight: 700,
            mb: 2,
            color: "#fff",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Register your account
        </Typography>

        {/* TEXT */}
        <Typography
          sx={{
            color: "rgba(255,255,255,0.6)",
            mb: 1,
            fontFamily: "'Outfit', sans-serif",
            fontSize: "16px",
          }}
        >
          Registration is temporarily not available
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "14px",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          We appreciate your cooperation.
        </Typography>
      </Box>
    </Box>
  );
}
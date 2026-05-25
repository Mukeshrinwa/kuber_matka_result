import { Box, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function RegisterAccount() {
  return (
    <Box
      sx={{
        background: "#f5f5f5",
        minHeight: "70vh",
        py: 6
      }}
    >

      {/* PAGE TITLE */}
      <Typography
        textAlign="center"
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: 700,
          color: "#2f3e8f",
          mb: 4,
          position: "relative"
        }}
      >
        Register your account

        {/* underline */}
        <Box
          sx={{
            width: "120px",
            height: "2px",
            background: "#2f3e8f",
            margin: "8px auto 0"
          }}
        />
      </Typography>

      {/* CARD */}
      <Box
        sx={{
          maxWidth: "900px",
          margin: "auto",
          background: "#fff",
          borderRadius: "10px",
          padding: { xs: 4, md: 8 },
          textAlign: "center",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
        }}
      >

        {/* ICON */}
        <Box
          sx={{
            width: "70px",
            height: "70px",
            background: "#1da1f2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px"
          }}
        >
          <PersonOutlineIcon sx={{ color: "#fff", fontSize: 35 }} />
        </Box>

        {/* TITLE */}
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "28px" },
            fontWeight: 600,
            mb: 2
          }}
        >
          Register your account
        </Typography>

        {/* TEXT */}
        <Typography
          sx={{
            color: "#333",
            mb: 1
          }}
        >
          Registration is temporarily not available
        </Typography>

        <Typography
          sx={{
            color: "#888",
            fontSize: "14px"
          }}
        >
          We appreciate your cooperation.
        </Typography>

      </Box>

    </Box>
  );
}
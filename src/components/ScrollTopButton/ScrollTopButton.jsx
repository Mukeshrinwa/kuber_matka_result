import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <Fab
      onClick={goTop}
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        width: 48,
        height: 48,
        background: "linear-gradient(135deg, #00f0ff, #7b61ff)",
        color: "#fff",
        zIndex: 9999,
        boxShadow: "0 4px 20px rgba(0, 240, 255, 0.35)",
        border: "1px solid rgba(0, 240, 255, 0.3)",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        animation: "fadeIn 0.3s ease",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "scale(0.8)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        "&:hover": {
          background: "linear-gradient(135deg, #7b61ff, #00f0ff)",
          transform: "translateY(-4px) scale(1.1)",
          boxShadow: "0 8px 30px rgba(0, 240, 255, 0.5)",
        },
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}
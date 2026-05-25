import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const steps = [
  {
    icon: <PersonAddAlt1OutlinedIcon />,
    title: "1. Create An Account",
    color: "#2563eb",
    bg: "#dbeafe",
    points: [
      "Open The MatkaFun App Or Visit Our Website.",
      "Register Using Your Mobile Number And Set A Secure Password.",
      "Verify Your Number Using The OTP Sent To You.",
    ],
  },

  {
    icon: <AccountBalanceWalletOutlinedIcon />,
    title: "2. Add Funds To Your Wallet",
    color: "#16a34a",
    bg: "#dcfce7",
    points: [
      "Go To The Add Funds Section.",
      "Select A Payment Method And Complete The Transaction.",
      "Funds Appear Instantly In Your Wallet — You're Ready To Play.",
    ],
  },

  {
    icon: <SportsEsportsOutlinedIcon />,
    title: "3. Choose A Market & Game",
    color: "#9333ea",
    bg: "#f3e8ff",
    points: [
      "Select From Available Markets (For Example: Supreme Night, Morning, Etc.) And Pick The Game Type You Prefer.",
      "Open / Close — Pick A Single Digit Or Two-Digit Number.",
      "Sangam — Combination Plays With Higher Payouts.",
      "Custom Games — Special Formats Available On The App.",
    ],
  },

  {
    icon: <PlayCircleOutlineOutlinedIcon />,
    title: "4. Place Your Bet",
    color: "#0f766e",
    bg: "#ccfbf1",
    points: [
      "Enter The Number You Want To Bet On.",
      "Choose The Bet Type (Open, Close, Sangam, Etc.).",
      "Enter Your Stake (The Amount You Want To Bet).",
      "Confirm The Bet — It Will Be Recorded Immediately.",
      "Tip: Double-Check Market Timing And Your Selected Number Before Confirming. Bets Cannot Be Changed After Confirmation.",
    ],
  },

  {
    icon: <EmojiEventsOutlinedIcon />,
    title: "5. Result & Payouts",
    color: "#ca8a04",
    bg: "#fef3c7",
    points: [
      "When Results Are Declared:",
      "Winning Bets Are Credited Automatically To Your Wallet.",
      "Payout Multiples Depend On The Market And Bet Type. Check The Payout Table In The App For Exact Rates.",
    ],
  },

  {
    icon: <CreditCardOutlinedIcon />,
    title: "6. Withdraw Funds",
    color: "#db2777",
    bg: "#fce7f3",
    points: [
      "Go To The Withdraw Section In Your Account.",
      "Enter Bank Details And The Amount To Withdraw.",
      "Submit The Withdrawal Request. Processing Times May Vary.",
    ],
  },
];

export default function AboutGame() {
  return (
    <Box
      sx={{
        background: "#eef7f8",
        minHeight: "100vh",
        py: { xs: 3, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        {/* Top Welcome Card */}
        <Paper
          elevation={0}
          sx={{
            p: {
              xs: 2.5,
              sm: 3,
              md: 4,
            },
            borderRadius: "18px",
            border: "1px solid #dbe4e6",
            background: "#ffffff",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "28px",
                sm: "36px",
              },
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            Welcome To MatkaFun
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              color: "#4b5563",
              fontSize: {
                xs: "14px",
                sm: "16px",
              },
              lineHeight: 1.8,
            }}
          >
            Play Safely And Enjoy A Smooth Matka Experience. Follow These
            Simple Steps To Start Placing Bets And Winning.
          </Typography>
        </Paper>

        {/* Steps Grid */}
        <Grid container spacing={3}>
          {steps.map((step, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "18px",
                  border: "1px solid #dbe4e6",
                  background: "#ffffff",
                  height: "100%",
                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                  },
                }}
              >
                {/* Header */}
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="flex-start"
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      minWidth: 46,
                      width: 46,
                      height: 46,
                      borderRadius: "14px",
                      background: step.bg,
                      color: step.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step.icon}
                  </Box>

                  {/* Content */}
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: "#111827",
                        fontSize: {
                          xs: "18px",
                          sm: "20px",
                        },
                        mb: 1,
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Stack spacing={0.8}>
                      {step.points.map((point, i) => (
                        <Typography
                          key={i}
                          sx={{
                            color: "#4b5563",
                            fontSize: {
                              xs: "14px",
                              sm: "15px",
                            },
                            lineHeight: 1.8,
                          }}
                        >
                          {point}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Help Section */}
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            p: {
              xs: 2.5,
              sm: 3,
            },
            borderRadius: "18px",
            background:
              "linear-gradient(135deg, #2b6cb0 0%, #2563eb 100%)",
            color: "#fff",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "14px",
                background: "rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HelpOutlineOutlinedIcon />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: "20px",
                    sm: "24px",
                  },
                }}
              >
                Need Help?
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  opacity: 0.95,
                  lineHeight: 1.8,
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                  },
                }}
              >
                Visit The Help & Support Section Or Contact Our 24/7 Support
                Team Through The App's Chat.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
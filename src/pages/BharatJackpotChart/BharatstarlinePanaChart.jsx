import { Box, Typography, Button } from "@mui/material";

export default function BharatstarlinePanaChart() {

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"
  ];

  const data = [
    {
      date: "01-Mar",
      panna: ["238", "469", "700", "389", "260", "399", "689", "233", "480", "569", "560", "**"],
      ank: ["3", "9", "7", "0", "8", "1", "3", "8", "2", "0", "1", "**"]
    },
    {
      date: "02-Mar",
      panna: ["145", "278", "339", "401", "290", "333", "412", "190", "210", "305", "322", "410"],
      ank: ["1", "8", "5", "4", "2", "9", "7", "0", "3", "1", "6", "2"]
    }
  ];

  return (

    <Box py={6} bgcolor="#F6F6F6">

      {/* TITLE */}
      <Typography
        textAlign="center"
        fontWeight={700}
        fontSize="32px"
        color="#2e3c91"
        mb={1}
      >
        MatkaFun Jackpot
      </Typography>

      <Typography
        textAlign="center"
        fontSize="14px"
        color="#555"
        mb={3}
      >
        MatkaFun Jackpot Jodi Chart Satta Matka Record Old History Historical Data Bracket Results Chart Online Live Book Digits Numbers
      </Typography>

      {/* BUTTON */}
      <Box textAlign="center" mb={4}>
        <Button
          sx={{
            background: "#1d8ae7",
            color: "#fff",
            px: 4,
            py: 1,
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              background: "#e69300"
            }
          }}
        >
          Go to Bottom ↓
        </Button>
      </Box>

      {/* TABLE */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          overflowX: "auto"
        }}
      >

        <Box
          component="table"
          sx={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#fff"
          }}
        >

          {/* HEADER */}
          <Box component="thead" sx={{ background: "#efefef" }}>

            <Box component="tr">

              <Box component="th" sx={thStyle}>
                Date
              </Box>

              {timeSlots.map((t, i) => (
                <Box key={i} component="th" sx={thStyle}>
                  {t}
                </Box>
              ))}

            </Box>

          </Box>


          {/* BODY */}
          <Box component="tbody">

            {data.map((row, i) => (
              <Box component="tr" key={i}>

                {/* DATE COLUMN */}
                <Box component="td" sx={tdDate}>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%"
                    }}
                  >

                    {/* YEAR LEFT */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: 1
                      }}
                    >
                      {"2023".split("").map((d, i) => (
                        <Typography key={i} sx={{ fontSize: "12px" }}>
                          {d}
                        </Typography>
                      ))}
                    </Box>

                    {/* DATE CENTER */}
                    <Typography
                      sx={{
                        flexGrow: 1,
                        textAlign: "center",
                        fontSize: "12px"
                      }}
                    >
                      {row.date}
                    </Typography>

                  </Box>

                </Box>

                {/* PANNA + ANK */}
                {row.panna.map((p, index) => (
                  <Box key={index} component="td" sx={td}>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#444"
                      }}
                    >
                      {p}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 700
                      }}
                    >
                      {row.ank[index]}
                    </Typography>

                  </Box>
                ))}

              </Box>
            ))}

          </Box>

        </Box>

      </Box>
      {/* BOTTOM BUTTONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mt: 6,
          flexWrap: "wrap"
        }}
      >

        {/* BACK BUTTON */}
        <Button
          variant="outlined"
          onClick={() => window.history.back()}
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: "10px",
            borderColor: "#ddd",
            color: "#333",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            background: "#f5f5f5",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            "&:hover": {
              background: "#eee"
            }
          }}
        >
          ← Back
        </Button>


        {/* GO TOP BUTTON */}
        <Button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: "10px",
            background: "#1d8ae7",
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            "&:hover": {
              background: "#e69300"
            }
          }}
        >
          Go to Top ↑
        </Button>

      </Box>
    </Box>
  );
}


const thStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  fontSize: "13px",
  fontWeight: 600,
  textAlign: "center"
};

const td = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "center"
};

const tdDate = {
  border: "1px solid #ddd",
  padding: "10px"
};
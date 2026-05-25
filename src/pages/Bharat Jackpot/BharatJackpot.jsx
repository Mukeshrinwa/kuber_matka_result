import { Box, Typography, Button } from "@mui/material";

export default function BharatJackpot() {

  const timeSlots = [
    "10:30 AM",
    "01:30 PM",
    "04:30 PM",
    "07:30 PM",
    "10:30 PM"
  ];

  const data = [
    { date: "01-Jun", values: ["77", "74", "57", "43", "78"] },
    { date: "02-Jun", values: ["25", "89", "85", "51", "19"] }
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
            background: "#fff",
            borderRadius: "10px"
          }}
        >

          {/* HEADER */}
          <Box component="thead" sx={{ background: "#efefef" }}>

            <Box component="tr">

              <Box component="th" sx={thStyle}>Date</Box>

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

                {/* DATE */}
                <Box component="td" sx={tdDate}>

                  <Box sx={{ display: "flex", alignItems: "center" }}>

                    {/* YEAR */}
                    <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                      {"2023".split("").map((d, i) => (
                        <Typography key={i} fontSize="12px">
                          {d}
                        </Typography>
                      ))}
                    </Box>

                    {/* DATE */}
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

                {/* VALUES */}
                {row.values.map((v, index) => (
                  <Box key={index} component="td" sx={td}>
                    {v}
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
          mt: 6
        }}
      >

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
            background: "#f5f5f5"
          }}
        >
          ← Back
        </Button>

        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: "10px",
            background: "#1d8ae7",
            color: "#fff",
            fontWeight: 600,
            textTransform: "none"
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
  padding: "12px",
  textAlign: "center",
  fontWeight: 600
};

const tdDate = {
  border: "1px solid #ddd",
  padding: "10px"
};
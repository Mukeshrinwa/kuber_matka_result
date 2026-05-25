import { Box, Typography, Paper } from "@mui/material";

export default function SeoContent() {
  return (
    <Box 
      py={{ xs: 3, sm: 4, md: 6 }} 
      bgcolor="#F6F6F6"
    >
      {/* MAIN HEADING */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={600}
        mb={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          fontSize: {
            xs: '1.5rem',    // Mobile: 24px
            sm: '1.75rem',   // Tablet: 28px
            md: '2rem'       // Desktop: 32px
          },
          px: { xs: 2, sm: 3, md: 0 }
        }}
      >
        Sara5567 | Sara 777 | Sara Ji
      </Typography>

      <Box 
        maxWidth={{ xs: '100%', sm: '90%', md: '90%' }} 
        mx="auto" 
        px={{ xs: 2, sm: 3, md: 2 }}
      >
        {/* ================= MAIN SEO INTRO ================= */}
        <Paper 
          sx={{ 
            p: { xs: 2, sm: 2.5, md: 3 }, 
            mb: { xs: 2, sm: 2.5, md: 3 },
            borderRadius: '12px'
          }}
        >
          <Typography 
            fontWeight={600} 
            mb={2}
            sx={{
              fontSize: {
                xs: '1rem',
                sm: '1.1rem',
                md: '1.2rem'
              }
            }}
          >
            Sara5567 All Satta Matka Charts – Complete Historical Records & Results
          </Typography>

          <Typography 
            sx={{ 
              color: "#555", 
              lineHeight: 1.7,
              fontSize: {
                xs: '0.85rem',
                sm: '0.9rem',
                md: '0.95rem'
              }
            }}
          >
            Sara5567 offers a comprehensive archive of past results and real-time updates,
            allowing you to track number trends and make smart selections. With a complete
            history available through the satta matka charts record and satta matka charts result,
            you can explore the Sara5567 all satta matka chart that includes all jodi charts,
            all pana charts, all king starline charts, and all king jackpot charts in one place.
          </Typography>
        </Paper>

        {/* ================= JODI CHART ================= */}
        <Paper 
          sx={{ 
            p: { xs: 2, sm: 2.5, md: 3 }, 
            mb: { xs: 2, sm: 2.5, md: 3 },
            borderRadius: '12px'
          }}
        >
          <Typography 
            fontWeight={600} 
            mb={2}
            sx={{
              fontSize: {
                xs: '1.1rem',
                sm: '1.2rem',
                md: '1.3rem'
              },
              color: '#f4a300'
            }}
          >
            Jodi Chart – Track Past Winning Combinations
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',           // Mobile: 1 column
                sm: 'repeat(2, 1fr)', // Tablet: 2 columns
                md: 'repeat(2, 1fr)'  // Desktop: 2 columns
              },
              gap: { xs: 2, sm: 2, md: 3 }
            }}
          >
            {[
              "Radha Morning","Lata Morning","Sridevi","Time Bazar",
              "Madhur Day","Rajdhani Day","Milan Day","Lata Day",
              "Radha Day","Kalyan","Lata Night","Sridevi Night",
              "Madhur Night","Milan Night","Rajdhani Night",
              "Kalyan Night","Main Bazar","Radha Night"
            ].map((item,i)=>(
              <Box 
                key={i} 
                sx={{
                  p: { xs: 1.5, sm: 1.8, md: 2 },
                  bgcolor: '#f9f9f9',
                  borderRadius: '8px',
                  border: '1px solid #eee'
                }}
              >
                <Typography 
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: '0.9rem',
                      sm: '0.95rem',
                      md: '1rem'
                    },
                    mb: 0.5,
                    color: '#333'
                  }}
                >
                  {item} Jodi Chart
                </Typography>
                <Typography 
                  sx={{
                    color: "#555",
                    fontSize: {
                      xs: '0.8rem',
                      sm: '0.85rem',
                      md: '0.9rem'
                    },
                    lineHeight: 1.5
                  }}
                >
                  Displays winning numbers and helps identify recurring patterns
                  in {item} market results.
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>

        {/* ================= PANA CHART ================= */}
        <Paper 
          sx={{ 
            p: { xs: 2, sm: 2.5, md: 3 }, 
            mb: { xs: 2, sm: 2.5, md: 3 },
            borderRadius: '12px'
          }}
        >
          <Typography 
            fontWeight={600} 
            mb={2}
            sx={{
              fontSize: {
                xs: '1.1rem',
                sm: '1.2rem',
                md: '1.3rem'
              },
              color: '#f4a300'
            }}
          >
            Pana Chart – Review Past Winning Numbers
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)'
              },
              gap: { xs: 2, sm: 2, md: 3 }
            }}
          >
            {[
              "Radha Morning","Lata Morning","Sridevi","Time Bazar",
              "Madhur Day","Rajdhani Day","Milan Day","Lata Day",
              "Radha Day","Kalyan","Lata Night","Sridevi Night",
              "Madhur Night","Milan Night","Rajdhani Night",
              "Kalyan Night","Main Bazar","Radha Night"
            ].map((item,i)=>(
              <Box 
                key={i}
                sx={{
                  p: { xs: 1.5, sm: 1.8, md: 2 },
                  bgcolor: '#f9f9f9',
                  borderRadius: '8px',
                  border: '1px solid #eee'
                }}
              >
                <Typography 
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: '0.9rem',
                      sm: '0.95rem',
                      md: '1rem'
                    },
                    mb: 0.5,
                    color: '#333'
                  }}
                >
                  {item} Pana Chart
                </Typography>
                <Typography 
                  sx={{
                    color: "#555",
                    fontSize: {
                      xs: '0.8rem',
                      sm: '0.85rem',
                      md: '0.9rem'
                    },
                    lineHeight: 1.5
                  }}
                >
                  Shows past winning numbers for {item} market and helps track
                  recurring number patterns.
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>

        {/* ================= FAQ ================= */}
        <Paper 
          sx={{ 
            p: { xs: 2, sm: 2.5, md: 3 },
            borderRadius: '12px'
          }}
        >
          <Typography 
            fontWeight={600} 
            mb={3}
            sx={{
              fontSize: {
                xs: '1.1rem',
                sm: '1.2rem',
                md: '1.3rem'
              },
              color: '#f4a300',
              borderBottom: '2px solid #f4a300',
              pb: 1
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '1fr 1fr'
              },
              gap: { xs: 2, md: 3 }
            }}
          >
            {[
              ["What is the satta matka charts record?",
              "It is a historical database of all winning numbers from January 1, 2020."],

              ["How does the satta matka charts result help players?",
              "It provides real-time updates on the latest winning numbers."],

              ["What does the Sara5567 all satta matka chart offer?",
              "It combines historical records and live results with all jodi and pana charts."],

              ["How do all jodi charts improve winning chances?",
              "They help identify frequently appearing number pairs."],

              ["What is the benefit of reviewing all pana charts?",
              "They help understand recurring patterns and frequently drawn numbers."],

              ["Why are all king starline charts important?",
              "They contain a complete history of king starline market results."],

              ["How do all king jackpot charts help in decision-making?",
              "They present jackpot-winning numbers over time."]
            ]
            .map((item,i)=>(
              <Box 
                key={i} 
                sx={{
                  p: { xs: 1.5, md: 2 },
                  bgcolor: '#f9f9f9',
                  borderRadius: '8px',
                  border: '1px solid #eee',
                  height: 'fit-content'
                }}
              >
                <Typography 
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: '0.9rem',
                      sm: '0.95rem',
                      md: '1rem'
                    },
                    mb: 1,
                    color: '#333'
                  }}
                >
                  Q{i+1}: {item[0]}
                </Typography>
                <Typography 
                  sx={{
                    color: "#555",
                    fontSize: {
                      xs: '0.8rem',
                      sm: '0.85rem',
                      md: '0.9rem'
                    },
                    lineHeight: 1.5
                  }}
                >
                  {item[1]}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
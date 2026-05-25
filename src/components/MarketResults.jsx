import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { fetchResult } from "../api/resultApi";
import { formatMarketResults } from "../utils/resultFormatter";

export default function MarketResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with actual enrollment number or get from props/context
        const data = await fetchResult("your-enrollment-no");
        const formattedData = formatMarketResults(data.data || []);
        setResults(formattedData);
      } catch (err) {
        setError("Failed to load results");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        Today's Market Results
      </Typography>

      <Grid container spacing={2}>
        {results.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 1,
                "&:hover": { boxShadow: 3 },
              }}
            >
              <CardContent>
                {/* Market Name */}
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: "#1d66c2" }}
                >
                  {item.market_name || item.market_id?.name || "Unknown"}
                </Typography>

                {/* Open Time */}
                <Typography variant="body2" color="text.secondary">
                  Open: {item.market_id?.open_time || "-"}
                </Typography>

                {/* Formatted Result */}
                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    background: "#f5f5f5",
                    borderRadius: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#111827",
                      letterSpacing: 1,
                    }}
                  >
                    {item.formattedResult}
                  </Typography>
                </Box>

                {/* Raw values (optional debug info) */}
                <Typography variant="caption" color="text.secondary">
                  {item.open_code} - {item.close_code}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {results.length === 0 && (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography color="text.secondary">No results available</Typography>
        </Box>
      )}
    </Box>
  );
}
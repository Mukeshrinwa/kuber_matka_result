import { Box, Typography, Container } from "@mui/material";
import { useState } from "react";

export default function Charts() {
    const [jodiFilter, setJodiFilter] = useState("All");
    const [panaFilter, setPanaFilter] = useState("All");
    const [starlineFilter, setStarlineFilter] = useState("All");
    const [jackpotFilter, setJackpotFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const jodiCharts = [
        "RADHA MORNING", "LATA MORNING", "SRIDEVI", "TIME BAZAR",
        "MADHUR DAY", "MILAN DAY", "RAJDHANI DAY", "LATA DAY",
        "RADHA DAY", "KALYAN", "LATA NIGHT", "SRIDEVI NIGHT",
        "MADHUR NIGHT", "MILAN NIGHT", "KALYAN NIGHT",
        "RAJDHANI NIGHT", "MAIN BAZAR", "RADHA NIGHT"
    ];

    const panaCharts = [
        "RADHA MORNING", "LATA MORNING", "SRIDEVI", "TIME BAZAR",
        "MADHUR DAY", "MILAN DAY", "RAJDHANI DAY", "LATA DAY",
        "RADHA DAY", "KALYAN", "LATA NIGHT", "SRIDEVI NIGHT",
        "MADHUR NIGHT", "MILAN NIGHT", "KALYAN NIGHT",
        "RAJDHANI NIGHT", "MAIN BAZAR", "RADHA NIGHT"
    ];

    const starlineCharts = [
        "All King Starline", "10:30 AM", "11:30 AM", "12:30 PM",
        "01:30 PM", "02:30 PM", "03:30 PM", "04:30 PM",
        "05:30 PM", "06:30 PM", "07:30 PM", "08:30 PM", "09:30 PM"
    ];

    const jackpotCharts = [
        "All King Jackpot", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
        "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"
    ];

    // Filter functions
    const filterJodiCharts = () => {
        if (jodiFilter === "All") return jodiCharts;
        return jodiCharts.filter(item => 
            item.toLowerCase().includes(jodiFilter.toLowerCase())
        );
    };

    const filterPanaCharts = () => {
        if (panaFilter === "All") return panaCharts;
        return panaCharts.filter(item => 
            item.toLowerCase().includes(panaFilter.toLowerCase())
        );
    };

    const filterStarlineCharts = () => {
        if (starlineFilter === "All") return starlineCharts;
        return starlineCharts.filter(item => 
            item.toLowerCase().includes(starlineFilter.toLowerCase())
        );
    };

    const filterJackpotCharts = () => {
        if (jackpotFilter === "All") return jackpotCharts;
        return jackpotCharts.filter(item => 
            item.toLowerCase().includes(jackpotFilter.toLowerCase())
        );
    };

    return (
        <Box
            py={{ xs: 4, sm: 6, md: 8 }}
            bgcolor="#F6F6F6"
            minHeight="100vh"
        >
            <Container maxWidth="lg">
                {/* HEADING - with top margin */}
                <Typography
                    variant="h4"
                    textAlign="center"
                    mb={{ xs: 3, sm: 4, md: 5 }}  // Increased margin bottom
                    sx={{
                        fontSize: {
                            xs: '1.75rem',
                            sm: '2rem',
                            md: '2.125rem'
                        },
                        fontWeight: 600,
                        mt: { xs: 2, sm: 3, md: 4 }  // Added top margin
                    }}
                >
                    All Satta Matka Chart
                </Typography>

                {/* JODI CHART SECTION */}
                <Box mb={{ xs: 4, sm: 5, md: 6 }}>
                    <Typography
                        variant="h5"
                        textAlign="center"
                        mb={{ xs: 2, sm: 2.5, md: 3 }}
                        sx={{
                            fontSize: {
                                xs: '1.25rem',
                                sm: '1.5rem',
                                md: '1.75rem'
                            },
                            color: '#f4a300',
                            fontWeight: 500
                        }}
                    >
                        Jodi Chart
                    </Typography>

                    {/* Jodi Charts Grid */}
                    <Box
                        sx={{
                            maxWidth: { xs: '100%', sm: '90%', md: '100%' },
                            mx: 'auto',
                            px: { xs: 2, sm: 3, md: 1 }
                        }}
                    >
                        <Box
                            display="grid"
                            gridTemplateColumns={{
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(3, 1fr)",
                                lg: "repeat(4, 1fr)"
                            }}
                            gap={{ xs: 2, sm: 2, md: 2.5 }}
                        >
                            {filterJodiCharts().map((item, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        p: { xs: 1.5, sm: 1.8, md: 2 },
                                        borderRadius: "10px",
                                        bgcolor: "#fff",
                                        boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "4px",
                                            height: { xs: '25px', sm: '28px', md: '30px' },
                                            bgcolor: "#f4a300",
                                            mr: { xs: 1.5, sm: 1.8, md: 2 },
                                            borderRadius: '2px'
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '0.85rem',
                                                sm: '0.9rem',
                                                md: '1rem'
                                            },
                                            color: '#333',
                                            flex: 1
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Jodi Filter */}
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            gap={1}
                            mt={3}
                            sx={{ flexWrap: 'wrap' }}
                        >
                            <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>
                                Filter:
                            </Typography>
                            {['All', 'MORNING', 'DAY', 'NIGHT'].map((filter) => (
                                <Box
                                    key={filter}
                                    onClick={() => setJodiFilter(filter)}
                                    sx={{
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: '15px',
                                        bgcolor: jodiFilter === filter ? '#f4a300' : '#fff',
                                        color: jodiFilter === filter ? '#fff' : '#333',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        border: '1px solid',
                                        borderColor: jodiFilter === filter ? '#f4a300' : '#ddd',
                                        '&:hover': {
                                            bgcolor: '#f4a300',
                                            color: '#fff',
                                            borderColor: '#f4a300'
                                        }
                                    }}
                                >
                                    {filter}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* PANA CHART SECTION */}
                <Box mb={{ xs: 4, sm: 5, md: 6 }}>
                    <Typography
                        variant="h5"
                        textAlign="center"
                        mb={{ xs: 2, sm: 2.5, md: 3 }}
                        sx={{
                            fontSize: {
                                xs: '1.25rem',
                                sm: '1.5rem',
                                md: '1.75rem'
                            },
                            color: '#f4a300',
                            fontWeight: 500
                        }}
                    >
                        Pana Chart
                    </Typography>

                    {/* Pana Charts Grid */}
                    <Box
                        sx={{
                            maxWidth: { xs: '100%', sm: '90%', md: '100%' },
                            mx: 'auto',
                            px: { xs: 2, sm: 3, md: 1 }
                        }}
                    >
                        <Box
                            display="grid"
                            gridTemplateColumns={{
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(3, 1fr)",
                                lg: "repeat(4, 1fr)"
                            }}
                            gap={{ xs: 2, sm: 2, md: 2.5 }}
                        >
                            {filterPanaCharts().map((item, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        p: { xs: 1.5, sm: 1.8, md: 2 },
                                        borderRadius: "10px",
                                        bgcolor: "#fff",
                                        boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "4px",
                                            height: { xs: '25px', sm: '28px', md: '30px' },
                                            bgcolor: "#f4a300",
                                            mr: { xs: 1.5, sm: 1.8, md: 2 },
                                            borderRadius: '2px'
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '0.85rem',
                                                sm: '0.9rem',
                                                md: '1rem'
                                            },
                                            color: '#333',
                                            flex: 1
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Pana Filter */}
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            gap={1}
                            mt={3}
                            sx={{ flexWrap: 'wrap' }}
                        >
                            <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>
                                Filter:
                            </Typography>
                            {['All', 'MORNING', 'DAY', 'NIGHT'].map((filter) => (
                                <Box
                                    key={filter}
                                    onClick={() => setPanaFilter(filter)}
                                    sx={{
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: '15px',
                                        bgcolor: panaFilter === filter ? '#f4a300' : '#fff',
                                        color: panaFilter === filter ? '#fff' : '#333',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        border: '1px solid',
                                        borderColor: panaFilter === filter ? '#f4a300' : '#ddd',
                                        '&:hover': {
                                            bgcolor: '#f4a300',
                                            color: '#fff',
                                            borderColor: '#f4a300'
                                        }
                                    }}
                                >
                                    {filter}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* KING STARLINE CHART SECTION */}
                <Box mb={{ xs: 4, sm: 5, md: 6 }}>
                    <Typography
                        variant="h5"
                        textAlign="center"
                        mb={{ xs: 2, sm: 2.5, md: 3 }}
                        sx={{
                            fontSize: {
                                xs: '1.25rem',
                                sm: '1.5rem',
                                md: '1.75rem'
                            },
                            color: '#f4a300',
                            fontWeight: 500
                        }}
                    >
                        King Starline Chart
                    </Typography>

                    {/* Starline Charts Grid */}
                    <Box
                        sx={{
                            maxWidth: { xs: '100%', sm: '90%', md: '100%' },
                            mx: 'auto',
                            px: { xs: 2, sm: 3, md: 1 }
                        }}
                    >
                        <Box
                            display="grid"
                            gridTemplateColumns={{
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(3, 1fr)",
                                lg: "repeat(4, 1fr)"
                            }}
                            gap={{ xs: 2, sm: 2, md: 2.5 }}
                        >
                            {filterStarlineCharts().map((item, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        p: { xs: 1.5, sm: 1.8, md: 2 },
                                        borderRadius: "10px",
                                        bgcolor: "#fff",
                                        boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "4px",
                                            height: { xs: '25px', sm: '28px', md: '30px' },
                                            bgcolor: "#f4a300",
                                            mr: { xs: 1.5, sm: 1.8, md: 2 },
                                            borderRadius: '2px'
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '0.85rem',
                                                sm: '0.9rem',
                                                md: '1rem'
                                            },
                                            color: '#333',
                                            flex: 1
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Starline Filter */}
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            gap={1}
                            mt={3}
                            sx={{ flexWrap: 'wrap' }}
                        >
                            <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>
                                Filter:
                            </Typography>
                            {['All', 'AM', 'PM'].map((filter) => (
                                <Box
                                    key={filter}
                                    onClick={() => setStarlineFilter(filter)}
                                    sx={{
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: '15px',
                                        bgcolor: starlineFilter === filter ? '#f4a300' : '#fff',
                                        color: starlineFilter === filter ? '#fff' : '#333',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        border: '1px solid',
                                        borderColor: starlineFilter === filter ? '#f4a300' : '#ddd',
                                        '&:hover': {
                                            bgcolor: '#f4a300',
                                            color: '#fff',
                                            borderColor: '#f4a300'
                                        }
                                    }}
                                >
                                    {filter}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* KING JACKPOT CHART SECTION */}
                <Box mb={{ xs: 4, sm: 5, md: 6 }}>
                    <Typography
                        variant="h5"
                        textAlign="center"
                        mb={{ xs: 2, sm: 2.5, md: 3 }}
                        sx={{
                            fontSize: {
                                xs: '1.25rem',
                                sm: '1.5rem',
                                md: '1.75rem'
                            },
                            color: '#f4a300',
                            fontWeight: 500
                        }}
                    >
                        King Jackpot Chart
                    </Typography>

                    {/* Jackpot Charts Grid */}
                    <Box
                        sx={{
                            maxWidth: { xs: '100%', sm: '90%', md: '100%' },
                            mx: 'auto',
                            px: { xs: 2, sm: 3, md: 1 }
                        }}
                    >
                        <Box
                            display="grid"
                            gridTemplateColumns={{
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(3, 1fr)",
                                lg: "repeat(4, 1fr)"
                            }}
                            gap={{ xs: 2, sm: 2, md: 2.5 }}
                        >
                            {filterJackpotCharts().map((item, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        p: { xs: 1.5, sm: 1.8, md: 2 },
                                        borderRadius: "10px",
                                        bgcolor: "#fff",
                                        boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "4px",
                                            height: { xs: '25px', sm: '28px', md: '30px' },
                                            bgcolor: "#f4a300",
                                            mr: { xs: 1.5, sm: 1.8, md: 2 },
                                            borderRadius: '2px'
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '0.85rem',
                                                sm: '0.9rem',
                                                md: '1rem'
                                            },
                                            color: '#333',
                                            flex: 1
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Jackpot Filter */}
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            gap={1}
                            mt={3}
                            sx={{ flexWrap: 'wrap' }}
                        >
                            <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>
                                Filter:
                            </Typography>
                            {['All', 'AM', 'PM'].map((filter) => (
                                <Box
                                    key={filter}
                                    onClick={() => setJackpotFilter(filter)}
                                    sx={{
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: '15px',
                                        bgcolor: jackpotFilter === filter ? '#f4a300' : '#fff',
                                        color: jackpotFilter === filter ? '#fff' : '#333',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        border: '1px solid',
                                        borderColor: jackpotFilter === filter ? '#f4a300' : '#ddd',
                                        '&:hover': {
                                            bgcolor: '#f4a300',
                                            color: '#fff',
                                            borderColor: '#f4a300'
                                        }
                                    }}
                                >
                                    {filter}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* PAGINATION */}
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                    mt={{ xs: 4, sm: 5, md: 6 }}
                    sx={{ flexWrap: 'wrap' }}
                >
                    {[1, 2, 3, 4, 5, '...', 8, 9, 10].map((page, i) => (
                        <Box
                            key={i}
                            onClick={() => typeof page === 'number' && setCurrentPage(page)}
                            sx={{
                                width: { xs: 32, sm: 36, md: 40 },
                                height: { xs: 32, sm: 36, md: 40 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '8px',
                                bgcolor: currentPage === page ? '#f4a300' : '#fff',
                                color: currentPage === page ? '#fff' : '#333',
                                cursor: typeof page === 'number' ? 'pointer' : 'default',
                                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                                border: '1px solid #e0e0e0'
                            }}
                        >
                            {page}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
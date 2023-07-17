import { Box, Container, Typography } from "@mui/material";

export default function ScreenLoader() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm" sx={{ display: "grid" }}>
        <Typography variant="body1" color="inherit" textAlign="center">
          <img src="./weather.svg" alt="Icon not Found" width={300} />
        </Typography>
        <Typography
          variant="body1"
          color="inherit"
          textAlign="center"
          fontSize={{
            xs: 40,
            sm: 50,
          }}
          fontWeight={600}
        >
          Let Us Load Data
        </Typography>
      </Container>
    </Box>
  );
}

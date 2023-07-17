import { Container, Paper } from "@mui/material";
import Current from "./Components/Current";
import Forecast from "./Components/Forecast";
import Search from "./Components/Search";

function Weather() {
  return (
    <Paper
      sx={{
        flexGrow: 1,
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Container maxWidth="md" sx={{ marginTop: 8, paddingY: 2 }}>
        <Search />
        <Current />
        <Forecast />
      </Container>
    </Paper>
  );
}

export default Weather;

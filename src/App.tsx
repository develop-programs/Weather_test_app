import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Weather from "./Weather";
import { createTheme, ThemeProvider } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./Redux/Reducers/Weather";
import { AppDispatch } from "./Redux/store";

function App() {
  const [ChangeTheme, setTheme] = React.useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const color = createTheme({
    palette: {
      mode: ChangeTheme ? "light" : "dark",
    },
  });
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        dispatch(fetchData(position))
      );
    }
  });
  return (
    <ThemeProvider theme={color}>
      <Box>
        <AppBar position="fixed" color="inherit" sx={{ boxShadow: "none" }}>
          <Toolbar>
            <Typography
              variant="body1"
              color="inheritl"
              sx={{ flexGrow: 1 }}
              fontSize={25}
              fontWeight={650}
            >
              Weather App
            </Typography>
            <Typography
              variant="body1"
              color="inheritl"
              display="flex"
              justifyContent="flex-end"
              gap={2}
              sx={{ flexGrow: 1 }}
            >
              <IconButton
                onClick={() => {
                  setTheme(!ChangeTheme);
                }}
              >
                {ChangeTheme ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <IconButton href="">
                <GitHubIcon />
              </IconButton>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Weather />
    </ThemeProvider>
  );
}

export default App;

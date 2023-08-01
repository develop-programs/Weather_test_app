import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Weather from "./Weather";
import { createTheme, ThemeProvider } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./Redux/Reducers/Weather";
import { AppDispatch } from "./Redux/store";
import ScreenLoader from "./Components/Loader";
import { FaSun, FaMoon } from "react-icons/fa"
function App() {
  const Data = useSelector((state: any) => state);
  const [ChangeTheme, setTheme] = React.useState(true);
  const [Loader, setLoader] = React.useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const color = createTheme({
    palette: {
      mode: ChangeTheme ? "light" : "dark",
    },
  });
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, Error);
    }
    function success(position: any) {
      setLoader(false);
      dispatch(fetchData(position));
    }
    function Error() {
      alert("Access not Granted");
      setLoader(true);
    }
  });
  return (
    <ThemeProvider theme={color}>
      {Loader ? (
        <>
          <ScreenLoader />
        </>
      ) : (
        <>
          {" "}
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
                  justifyContent="space-between"
                  gap={2}
                  sx={{ flexGrow: 1 }}
                >
                  <Typography variant="body1" color="inherit">
                    {Data?.WeatherReport?.data?.forecast?.forecastday?.slice(0, 1).map(
                      (itm: any, idk: any) => (
                        <Box key={idk} sx={{ display: 'flex', gap: 2 }}>
                          <Typography variant="body1" color="inherit" display="flex" alignItems="center" gap={1}>
                            <FaSun />
                            {itm.astro.sunrise}
                          </Typography>
                          <Typography variant="body1" color="inherit" display="flex" alignItems="center" gap={1}>
                            <FaMoon />
                            {itm.astro.sunset}
                          </Typography>
                        </Box>
                      ))}
                  </Typography>
                  <Typography variant="body1" color="inherit">
                    <IconButton
                      onClick={() => {
                        setTheme(!ChangeTheme);
                      }}
                    >
                      {ChangeTheme ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                    <IconButton href="https://github.com/develop-programs/Weather_test_app.git">
                      <GitHubIcon />
                    </IconButton>
                  </Typography>
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <Weather />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;

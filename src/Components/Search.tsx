import { Paper, Typography, Input, IconButton } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../Redux/Reducers/Weather";
import { AppDispatch } from "../Redux/store";
import { fetchSearchData } from "../Redux/Reducers/Search";

function Search() {
  const [Value, setValue] = React.useState("");
  const dispatch = useDispatch<AppDispatch>();
  const CurrentWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        dispatch(fetchData(position))
      );
    }
  };

  return (
    <Paper
      elevation={5}
      sx={{
        borderRadius: 20,
        paddingX: 2,
        paddingY: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="body1" color="inherit" component="div">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Typography>

      <Typography
        variant="body1"
        color="inherit"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <Input
          placeholder="Search"
          disableUnderline={true}
          fullWidth
          value={Value}
          onChange={(e: any) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(fetchSearchData(Value));
            }
          }}
        />
      </Typography>

      <Typography variant="body1" color="inherit" component="div">
        <IconButton onClick={CurrentWeather}>
          <MyLocationIcon />
        </IconButton>
      </Typography>
    </Paper>
  );
}

export default Search;

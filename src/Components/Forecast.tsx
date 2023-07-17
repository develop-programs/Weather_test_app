import { Divider, Grid, Paper, Typography } from "@mui/material";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function Forecast() {
  const Data = useSelector((state: any) => state);
  return (
    <Paper elevation={5} sx={{ marginTop: 4, borderRadius: 2, padding: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            color="inherit"
            fontSize={28}
            fontWeight={550}
            paddingX={1}
          >
            Forecast
          </Typography>
        </Grid>
        {Data?.WeatherReport?.data?.forecast?.forecastday?.map(
          (itm: any, idk: any) => (
            <Grid item xs={12} sm={4} key={idk}>
              <Typography
                variant="body1"
                color="inherit"
                textAlign="center"
                paddingY={1}
              >
                {itm.date}
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img src={`http://${itm.day.condition.icon}`} width={130} />
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                paddingY={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <AiOutlineArrowDown />
                {Data.convert.value ? (
                  <> {itm.day.mintemp_c}&deg;</>
                ) : (
                  <> {itm.day.maxtemp_c}&deg;</>
                )}{" "}
                <AiOutlineArrowUp />
                {Data.convert.value ? (
                  <> {itm.day.mintemp_f}&deg;</>
                ) : (
                  <> {itm.day.maxtemp_f}&deg;</>
                )}{" "}
              </Typography>
              <Divider
                sx={{
                  display: {
                    xs: "block",
                    sm: "none",
                  },
                }}
              />
            </Grid>
          )
        )}
      </Grid>
    </Paper>
  );
}

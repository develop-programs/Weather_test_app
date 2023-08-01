import { Button, Divider, Paper, Typography } from "@mui/material";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";
import moment from "moment";
import { switchval } from "../Redux/Reducers/switch";

export default function Forecast() {
  const dispatch = useDispatch<AppDispatch>();
  const Data = useSelector((state: any) => state);
  return (
    <Paper elevation={5} sx={{ marginTop: 2, borderRadius: 2, padding: 2 }}>
      <Typography
        variant="body1"
        color="inherit"
        paddingX={1}
        sx={{ flexGrow: 1, display: "flex" }}
        gap={2}
      >
        <Button type="button" variant="contained" onClick={() => { dispatch(switchval()) }}>Forecast</Button>
        <Button type="button" variant="contained" onClick={() => { dispatch(switchval()) }}>Daily</Button>
      </Typography>
      {Data.switch.value ? <>
        <Typography variant="body1" color="inherit" sx={{ flexGrow: 1, display: { xs: 'grid', sm: 'flex' }, alignContent: 'center', justifyContent: 'space-evenly', marginTop: 2 }}>
          {Data?.WeatherReport?.data?.forecast?.forecastday?.map(
            (itm: any, idk: any) => (
              <Typography variant="body1" color="inherit" key={idk}>
                <Typography variant="body1" color="inherit" textAlign="center">
                  {moment(itm.date).format("dddd")}
                </Typography>
                <Typography variant="body1" color="inherit" textAlign="center">
                  <img src={`https://${itm?.day?.condition?.icon}`} width={100} alt="" />
                </Typography>
                <Typography variant="body1" color="inherit" textAlign="center" paddingY={1}>
                  {itm?.day?.condition?.text}
                </Typography>
                <Typography variant="body1" color="inherit" textAlign="center">
                  Feel's Like
                  {Data.convert.value ? (
                    <> <AiOutlineArrowUp />
                      {itm?.day?.maxtemp_c}&deg;
                      <AiOutlineArrowDown />
                      {itm?.day?.mintemp_c}&deg;</>
                  ) : (
                    <> <AiOutlineArrowUp />
                      {itm?.day?.maxtemp_f}&deg;
                      <AiOutlineArrowDown />
                      {itm?.day?.mintemp_f}&deg;</>
                  )}
                </Typography>
                <Divider />
              </Typography>
            )
          )}
        </Typography>
      </> :
        <>
          <Typography variant="body1" color="inherit">
            {Data?.WeatherReport?.data?.forecast?.forecastday?.slice(0, 1).map(
              (itm: any, idk: any) => (
                <Typography variant="body1" color="inherit" sx={{ flexGrow: 1, overflowX: "auto", display: { xs: 'block', sm: 'flex' }, gap: 2, padding: 1 }} key={idk}>
                  {itm.hour.slice(0, 24).map((itm: any, ind: any) => (
                    <Paper key={ind} elevation={5} sx={{ marginTop: { xs: '2vh', sm: 'none' } }}>
                      <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
                        <Typography variant="body1" color="inherit" textAlign="center" paddingY={.5}>
                          {moment(itm.time).format("hh:mm a")}
                        </Typography>
                        <Typography variant="body1" color="inherit" paddingX={8} paddingY={1} textAlign="center">
                          <img src={`https://${itm.condition.icon}`} alt="" />
                        </Typography>
                        <Typography variant="body1" color="inherit" textAlign="center">
                          {itm.condition.text}
                        </Typography>
                        <Typography variant="body1" color="inherit" textAlign="center" paddingY={.5}>
                          {Data.convert.value ? (
                            <>
                              {itm?.temp_c}&deg;</>
                          ) : (
                            <>
                              {itm?.temp_f}&deg;</>
                          )}
                        </Typography>
                      </Typography>
                    </Paper>
                  ))}
                </Typography>
              ))}
          </Typography>
        </>
      }

    </Paper>
  );
}

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
const InfoBox = ({info}) => {
    const INIT =
      "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      const HOT =
        "https://images.unsplash.com/photo-1782393961489-dbde139ba08b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1bm55JTIwd2FldGhlcnxlbnwwfHwwfHx8MA%3D%3D";
      const COLD =
        "https://plus.unsplash.com/premium_photo-1671962237304-6999037252a4?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      const RAIN =
        "https://images.unsplash.com/photo-1563389843516-4a7b39dce10d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55fGVufDB8fDB8fHww";
    return (
      <div>
        <h1 className="text-center text-3xl font-serif font-semibold">
          ------Today's Weather------
        </h1>
        <div className="flex justify-center items-center mt-5">
          <Card className="max-w-96 flex flex-col justify-center items-center">
            <CardMedia
              component="img"
              alt="green iguana"
              height="110"
              image={info.humidity > 80 ? RAIN : info.temp > 15 ? HOT : COLD}
            />
            <CardContent className="flex flex-col justify-center items-center">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="font-bold gap-5"
              >
                {info.city} &nbsp;
                {info.humidity > 80 ? < ThunderstormIcon />: info.temp > 15 ? < WbSunnyIcon/> : <AcUnitIcon/>}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                <div className="flex flex-col justify-center items-center leading-6">
                  <p>Temp:-{info.temp}&deg;C</p>
                  <p>Humidity:-{info.humidity}</p>
                  <p>Minimum Temperature:-{info.tempmax}&deg;C</p>
                  <p>Minimum Temperature:-{info.tempmin}&deg;C</p>
                  <p>
                    the Weather is{" "}
                    <i className="font-semibold">{info.weather}</i> and feels
                    like {info.feelslike}&deg;C
                  </p>
                </div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
}
export default InfoBox
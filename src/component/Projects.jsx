import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "../constant/style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";

export default function Projects({ data }) {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    margin: "auto",
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div name="projects" id="projects" style={style.AboutMe}>
      <Typography
        gutterBottom
        variant="h3"
        sx={{ my: 5 }}
        align="center"
        component="div"
      >
        Projects
      </Typography>

      <Grid container direction={"row"}>
        {data
          .filter((a) => a.id < 4)
          .map((e, i) => (
            <Projectlist
              name={e.name}
              isActive={e.isActive}
              desc={e.desc}
              img={e.image}
              link={e.link}
              key={i}
            />
          ))}
      </Grid>

      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
      >
        <ExpandMoreIcon />
      </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container direction={"row"}>
          {data
            .filter((a) => a.id > 3)
            .map((e, i) => (
              <>
                <Projectlist
                  name={e.name}
                  isActive={e.isActive}
                  desc={e.desc}
                  img={e.image}
                  link={e.link}
                  key={i}
                  
                >
                  </Projectlist>
              </>
            ))}
        </Grid>
      </Collapse>
    </div>
  );

  function Projectlist(props) {
    
    const [expandText, setExpandText] = React.useState(false);

  const handleExpandText = () => {
    setExpandText(!expandText);
  };
    
    return (
      <>
        <Grid item xs={12} md={4} lg={4}>
          <Card
            onClick={props.onClick}
            sx={{
              maxWidth: 345,
              m: 3,
              transition: "transform .2s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: `0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #bc13fe,
            0 0 0.8rem #bc13fe,
            0 0 2.8rem #bc13fe,
            inset 0 0 1.3rem #bc13fe`,
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={props.img}
              alt={props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.name}
              </Typography>
              <Typography
                variant="body2"
                color={props.isActive ? "#66ff33" : "red"}
              >
                {props.isActive ? "Online" : "Offline"}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {expandText ? props.desc : props.desc.slice(0, 160) + " ..."}
              </Typography>
            </CardContent>

            <CardActions>
              {props.link != "" && <Button href={props.link}target="_blank" size="small">Learn More</Button>}
              <IconButton
          onClick={handleExpandText}
        >
                {expandText ? <ExpandMoreIcon /> : <ExpandLessIcon/> }
        </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
  }
}

import { Box, Button, Typography } from "@mui/material";
import html from "../assets/Programming/html.png";
import css from "../assets/Programming/css-3.png";
import tailwindcss from "../assets/Programming/Tailwind_CSS_Logo (1).svg";
import bootstrap from "../assets/Programming/bootstrap.png";
import javascript from "../assets/Programming/js.png";
import nodejs from "../assets/Programming/node-js.png";
import materialui from "../assets/Programming/material-ui-1.svg";
import react from "../assets/Programming/React-icon.svg.png";
import vue from "../assets/Programming/Vue.js_Logo_2.svg";
import wordpress from "../assets/Programming/Wordpress_Blue_logo.png";

const Skills = () => {
  return (
    <>
      <Box
        width={"100%"}
        minHeight={"100vh"}
        padding={{ xs: "50px 20px", lg: "0px 50px" }}
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row", lg: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={"#f2f2f2"}
        gap={{ xs: "20px", lg: "20px" }}
      >
        <Box
          width={{ lg: "50%", xs: "100%" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ xs: "center", lg: "start" }}
          textAlign={{ xs: "center", lg: "left" }}
          gap={2}
        >
          <Typography
            variant="h3"
            color={"#111827"}
            fontSize={{ xs: "35px", lg: "40px" }}
            fontWeight={{ xs: "600", lg: "600" }}
          >
            I am a proffesional <br />
            Full Stack Developer
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus
            explicabo cumque, sed reprehenderit modi quidem tenetur culpa
            officia ab debitis exercitationem voluptate distinctio, quae porro
            repellat! Explicabo, aliquid facere. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </Typography>
          <Button
            variant="contained"
            color={"primary"}
            disableElevation
            disableFocusRipple
            disableTouchRipple
            disableRipple
            sx={{
              fontSize: "16px",
              boxShadow: "none",
              borderRadius: "6px",
              padding: "6px 20px",
              ":hover": {
                boxShadow: "none",
              },
            }}
          >
            Hire me
          </Button>
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          width={{ xs: "100%", sm: "50%" }}
          gap={5}
          bgcolor={"#fff"}
          borderRadius={2}
          padding={5}
          sx={{
            ":hover": { bgcolor: "#111827", scale: "1.05" },
            transition: "200ms",
            cursor: "pointer",
            boxShadow: "5",
          }}
        >
          <img src={html} alt="" style={{ width: "70px" }} />
          <img src={css} alt="" style={{ width: "70px" }} />
          <img src={javascript} alt="" style={{ width: "70px" }} />
          <img src={tailwindcss} alt="" style={{ width: "70px" }} />
          <img src={bootstrap} alt="" style={{ width: "70px" }} />
          <img src={react} alt="" style={{ width: "70px" }} />
          <img src={materialui} alt="" style={{ width: "70px" }} />
          <img src={vue} alt="" style={{ width: "70px" }} />
          <img src={nodejs} alt="" style={{ width: "70px" }} />
          <img src={wordpress} alt="" style={{ width: "70px" }} />
        </Box>
      </Box>
    </>
  );
};

export default Skills;

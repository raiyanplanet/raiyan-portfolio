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
        flexDirection={{ xs: "column", sm: "row", lg: "column" }}
        alignItems={{ lg: "start", xs: "center" }}
        justifyContent={"center"}
        bgcolor={"#060913"}
        color={"#fff"}
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
            fontSize={{ xs: "35px", lg: "40px" }}
            fontWeight={{ xs: "600", lg: "600" }}
          >
            I am a proffesional <br />
            <span style={{ color: "#49E9C7" }}>Full Stack Developer</span>
          </Typography>
          <Typography color={"#cccccc"}>
            A passionate web developer with a strong background in creating
            visually stunning and highly functional websites. With 2 years of
            experience, I specialize in crafting responsive and user-friendly
            web solutions that deliver exceptional results.
          </Typography>
          {/* <Button
            variant="contained"
            color={"primary"}
            disableRipple
            disableElevation
            disableFocusRipple
            disableTouchRipple
            sx={{
              fontSize: "16px",
              boxShadow: "none",
              display: "flex",
              gap: "10px",
              border: "1px solid #1C1E28",
              borderRadius: "6px",
              padding: "8px 15px",
              ":hover": {
                bgcolor: "#0F111B",
                boxShadow: "none",
              },
            }}
          >
            Hire me
          </Button> */}
        </Box>

        {/* Skill list */}

        <Box
          display={"flex"}
          flexWrap={"wrap"}
          width={{ xs: "100%", sm: "100%" }}
          gap={3}
          bgcolor={"#0C0F19"}
          border={"1px solid #3C414C"}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderRadius={2}
          padding={5}
          sx={{
            ":hover": { borderColor: "#1C1E28" },
            transition: "200ms",
            boxShadow: "5",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            width={{ lg: "50%", sx: "100%" }}
          >
            {/* Web development  */}

            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1}
              border={"1px solid #1C1E28"}
              borderRadius={"10px"}
              padding={3}
              sx={{
                ":hover": { borderColor: "#49E9C7", scale: "1.05" },
                transition: "200ms",
                cursor: "pointer",
                boxShadow: "5",
              }}
            >
              <Box
                display={"flex"}
                bgcolor={"#0F1328"}
                padding={"10px 10px"}
                border={"1px solid #373945"}
                gap={1}
                color={"#B7B9C1"}
                borderRadius={2}
              >
                <img src={html} alt="" style={{ width: "30px" }} />
                <Typography variant="h6">HTML</Typography>
              </Box>
              <Box
                display={"flex"}
                bgcolor={"#0F1328"}
                padding={"10px 10px"}
                border={"1px solid #373945"}
                gap={1}
                color={"#B7B9C1"}
                borderRadius={2}
              >
                <img src={css} alt="" style={{ width: "30px" }} />
                <Typography variant="h6" textTransform={"uppercase"}>
                  css
                </Typography>
              </Box>
              <Box
                display={"flex"}
                bgcolor={"#0F1328"}
                padding={"10px 10px"}
                border={"1px solid #373945"}
                gap={1}
                color={"#B7B9C1"}
                borderRadius={2}
              >
                <img src={javascript} alt="" style={{ width: "30px" }} />
                <Typography variant="h6" textTransform={"uppercase"}>
                  JAVASCRIPT
                </Typography>
              </Box>
            </Box>

            {/* css framework */}

            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1}
              border={"1px solid #1C1E28"}
              borderRadius={"10px"}
              padding={3}
              sx={{
                ":hover": { borderColor: "#49E9C7", scale: "1.05" },
                transition: "200ms",
                cursor: "pointer",
                boxShadow: "5",
              }}
            >
              <Box
                display={"flex"}
                bgcolor={"#0F1328"}
                padding={"10px 10px"}
                border={"1px solid #373945"}
                gap={1}
                color={"#B7B9C1"}
                borderRadius={2}
              >
                <img src={tailwindcss} alt="" style={{ width: "30px" }} />
                <Typography variant="h6" textTransform={"uppercase"}>
                  tailwind css
                </Typography>
              </Box>
              <Box
                display={"flex"}
                bgcolor={"#0F1328"}
                padding={"10px 10px"}
                border={"1px solid #373945"}
                gap={1}
                color={"#B7B9C1"}
                borderRadius={2}
              >
                <img src={bootstrap} alt="" style={{ width: "30px" }} />
                <Typography variant="h6" textTransform={"uppercase"}>
                  bootstrap
                </Typography>
              </Box>
              <Box
                display={"flex"}
                bgcolor={"#0F1328"}
                padding={"10px 10px"}
                border={"1px solid #373945"}
                gap={1}
                color={"#B7B9C1"}
                borderRadius={2}
              >
                <img src={materialui} alt="" style={{ width: "30px" }} />
                <Typography variant="h6" textTransform={"uppercase"}>
                  material ui
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Javascript framework */}

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={9}
            border={"1px solid #1C1E28"}
            width={{ lg: "47%", sx: "100%", sm: "100%" }}
            borderRadius={"10px"}
            padding={3}
            sx={{
              ":hover": { borderColor: "#49E9C7", scale: "1.05" },
              transition: "200ms",
              cursor: "pointer",
              boxShadow: "5",
            }}
          >
            <Box
              display={"flex"}
              bgcolor={"#0F1328"}
              padding={"10px 10px"}
              width={"100%"}
              border={"1px solid #373945"}
              gap={1}
              color={"#B7B9C1"}
              borderRadius={2}
            >
              <img src={react} alt="" style={{ width: "30px" }} />
              <Typography variant="h6" textTransform={"uppercase"}>
                react js
              </Typography>
            </Box>
            <Box
              display={"flex"}
              bgcolor={"#0F1328"}
              padding={"10px 10px"}
              border={"1px solid #373945"}
              gap={1}
              color={"#B7B9C1"}
              borderRadius={2}
            >
              <img src={vue} alt="" style={{ width: "30px" }} />
              <Typography variant="h6" textTransform={"uppercase"}>
                vue js
              </Typography>
            </Box>
            <Box
              display={"flex"}
              bgcolor={"#0F1328"}
              padding={"10px 10px"}
              border={"1px solid #373945"}
              gap={1}
              color={"#B7B9C1"}
              borderRadius={2}
            >
              <img src={nodejs} alt="" style={{ width: "30px" }} />
              <Typography variant="h6" textTransform={"uppercase"}>
                node js
              </Typography>
            </Box>
            <Box
              display={"flex"}
              bgcolor={"#0F1328"}
              padding={"10px 10px"}
              border={"1px solid #373945"}
              gap={1}
              color={"#B7B9C1"}
              borderRadius={2}
            >
              <img src={wordpress} alt="" style={{ width: "30px" }} />
              <Typography variant="h6" textTransform={"uppercase"}>
                Wordpress
              </Typography>
            </Box>
          </Box>
          {/* <img src={tailwindcss} alt="" style={{ width: "70px" }} />
          <img src={bootstrap} alt="" style={{ width: "70px" }} />
          <img src={react} alt="" style={{ width: "70px" }} />
          <img src={materialui} alt="" style={{ width: "70px" }} />
          <img src={vue} alt="" style={{ width: "70px" }} />
          <img src={nodejs} alt="" style={{ width: "70px" }} />
          <img src={wordpress} alt="" style={{ width: "70px" }} /> */}
        </Box>
      </Box>
    </>
  );
};

export default Skills;

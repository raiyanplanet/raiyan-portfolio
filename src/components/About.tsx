import { GitHub } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
import myphoto from "../assets/me.jpg";

const About = () => {
  return (
    <>
      <Box
        minHeight={"100vh"}
        bgcolor={"#060913"}
        color={"#fff"}
        width={"100%"}
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"space-between "}
        gap={{ lg: "0", xs: "50px" }}
        padding={{ lg: "20px 50px", xs: "50px 50px" }}
      >
        <Box
          width={{ lg: "50%", xs: "30%" }}
          display={{ xs: "flex", lg: "none" }}
          alignItems={"center"}
          justifyContent={{ lg: "end", xs: "center" }}
        >
          <Avatar
            src={myphoto}
            sx={{
              width: "350px",
              height: "350px",
              border: "5px solid #49E9C7",
            }}
          ></Avatar>
        </Box>
        <Box
          width={{ xs: "100%", lg: "50%" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ lg: "start", xs: "center" }}
          textAlign={{ xs: "center", lg: "left" }}
          gap={2}
        >
          <Typography
            variant="h3"
            fontSize={{ xs: "35px", lg: "40px" }}
            color={"#E1E5E9"}
            fontWeight={700}
          >
            I am Full Stack <br />
            <span style={{ color: "#49E9C7" }}>Web Application Developer</span>
          </Typography>
          <Typography color={"#cccccc"}>
            Hi there! I'm Raiyan, a passionate Web Developer with years of
            experience in the industry. I've helped countless businesses like
            yours achieve their goals and I'm excited to work with you. <br />
            <br />A passionate web developer with a strong background in
            creating visually stunning and highly functional websites. With 2
            years of experience, I specialize in crafting responsive and
            user-friendly web solutions that deliver exceptional results.
          </Typography>
          <Button
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
              padding: "10px 15px",
              ":hover": {
                bgcolor: "#0F111B",
                borderColor: "#49E9C7",
                boxShadow: "none",
              },
            }}
            href="https://www.github.com/raiyanplanet/"
          >
            <GitHub />
            View On Github
          </Button>
        </Box>
        <Box
          width={"50%"}
          display={{ lg: "flex", xs: "none" }}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Avatar
            src={myphoto}
            sx={{
              width: "350px",
              height: "350px",
              border: "4px solid #49E9C7",
            }}
          ></Avatar>
        </Box>
      </Box>
    </>
  );
};

export default About;

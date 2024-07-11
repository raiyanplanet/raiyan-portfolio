import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Import your design pattern image
import designPattern from "../assets/fancy-cushion.png";

const Hero: React.FC = () => {
  return (
    <Box
      padding={{ xs: "0 20px" }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        justifyContent: "center",
        height: "100vh", // Full viewport height
        backgroundImage: `url(${designPattern})`, // Use your design pattern image
        backgroundSize: "cover", // Cover the entire box with the pattern
        backgroundPosition: "center", // Center the pattern
        position: "relative", // Positioning context for overlay
        textAlign: "center",
        color: "white", // Text color
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
          zIndex: 1, // Ensure the overlay is behind content but above the background image
        },
      }}
    >
      <Box
        bgcolor={"#060913"}
        position={"absolute"}
        minHeight={"100vh"}
        width={"100%"}
        sx={{ opacity: "70%" }}
      />

      <Box
        zIndex={10}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Typography
          variant="h2"
          fontWeight={600}
          sx={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)", // Text shadow for visibility against the background
            animation: "fadeInDown 1s ease-in-out", // Fade-in animation for heading
            "@keyframes fadeInDown": {
              "0%": { opacity: 0, transform: "translateY(-30px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          Hello, I'm <span style={{ color: "#49E9C7" }}>Raiyan</span>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)", // Text shadow for visibility against the background
            animation: "fadeInUp 1s ease-in-out", // Fade-in animation for subheading
            "@keyframes fadeInUp": {
              "0%": { opacity: 0, transform: "translateY(30px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          Welcome to My Portfolio.I'm a{" "}
          <span style={{ color: "#49E9C7" }}>Full Stack Developer</span>
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
            border: "1px solid #1C1E28",
            borderRadius: "6px",
            padding: "10px 15px",
            width: "200px",
            ":hover": {
              bgcolor: "#0F111B",
              borderColor: "#49E9C7",
              boxShadow: "none",
            },
            animation: "fadeIn 1.5s ease-in-out", // Fade-in animation for button
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;

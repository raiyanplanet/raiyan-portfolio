import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Import your design pattern image
import designPattern from "../assets/fancy-cushion.png";

const Hero: React.FC = () => {
  return (
    <Box
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
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h2"
          fontWeight={600}
          sx={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)", // Text shadow for visibility against the background
            animation: "fadeInDown 1s ease-in-out", // Fade-in animation for heading
            "@keyframes fadeInDown": {
              "0%": { opacity: 0, transform: "translateY(-20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          Hello, I'm Raiyan!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            mb: 4,
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)", // Text shadow for visibility against the background
            animation: "fadeInUp 1s ease-in-out", // Fade-in animation for subheading
            "@keyframes fadeInUp": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          Welcome to My Portfolio.I'm a Full Stack Developer
        </Typography>
        <Button
          variant="contained"
          size="large"
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
          color={"secondary"}
          sx={{
            animation: "fadeIn 1.5s ease-in-out", // Fade-in animation for button
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          Get in Touch
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;

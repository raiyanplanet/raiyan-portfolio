import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
        >
          <Typography variant="body1">
            © 2024 Raiyan Portfolio. All rights reserved.
          </Typography>

          <Grid item>
            <IconButton
              aria-label="facebook"
              component="a"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </IconButton>
            <IconButton
              aria-label="instagram"
              component="a"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              component="a"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </IconButton>
            <IconButton
              aria-label="youtube"
              component="a"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </IconButton>
            <IconButton
              aria-label="dribbble"
              component="a"
              href="https://www.dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDribbble />
            </IconButton>
            <IconButton
              aria-label="github"
              component="a"
              href="https://www.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </IconButton>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

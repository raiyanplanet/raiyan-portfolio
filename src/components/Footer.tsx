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
    <Box bgcolor={"#060913"} color={"#fff"}>
      <Container maxWidth="sm">
        <Box
          display={"flex"}
          flexDirection={"column"}
          padding={4}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          gap={1}
        >
          <Typography variant="body1">
            © 2024 Raiyan Portfolio. All rights reserved.
          </Typography>

          <Grid item>
            <IconButton
              aria-label="facebook"
              component="a"
              href="https://www.facebook.com/tawsifulalamraiyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook color="#fff" />
            </IconButton>
            <IconButton
              aria-label="instagram"
              component="a"
              href="https://www.instagram.com/_raiyan.n_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram color="#fff" />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              component="a"
              href="https://www.linkedin.com/tawsiful-alam-raiyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="#fff" />
            </IconButton>
            <IconButton
              aria-label="youtube"
              component="a"
              href="https://www.youtube.com/raiyanplanet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube color="#fff" />
            </IconButton>
            <IconButton
              aria-label="dribbble"
              component="a"
              href="https://www.dribbble.com/raiyanplanet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDribbble color="#fff" />
            </IconButton>
            <IconButton
              aria-label="github"
              component="a"
              href="https://www.github.com/raiyanplanet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="#fff" />
            </IconButton>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

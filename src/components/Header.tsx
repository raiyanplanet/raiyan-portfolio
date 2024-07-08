import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Link } from "react-scroll";
import { Box } from "@mui/material";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  boxShadow: "none",
  borderBottom: "1px solid #e0e0e0",
  position: "sticky",
  top: 0,
  zIndex: 1100, // Ensure the header is above other content
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Logo = styled("div")({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
});

const NavItems = styled("div")({
  display: "flex",
  alignItems: "center",
  "& a": {
    margin: 8, // Use the equivalent of theme.spacing(1)
    textDecoration: "none",
    color: "#000",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: "#111827",
    },
  },
});

const Header: React.FC = () => {
  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Logo>
            {/* <LogoImage src="" alt="logo" width={40} height={40} /> */}
            <Typography variant="h4" fontWeight={900} color="#111827">
              RAIYAN
            </Typography>
          </Logo>
        </IconButton>
        <Box display={{ xs: "none", lg: "flex" }}>
          <NavItems sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <Link to="about" smooth duration={500}>
              <Typography
                textTransform={"uppercase"}
                variant="h6"
                fontWeight={400}
                fontSize={"19px"}
              >
                About
              </Typography>
            </Link>
            <Link to="skills" smooth duration={500}>
              <Typography
                textTransform={"uppercase"}
                variant="h6"
                fontWeight={400}
                fontSize={"19px"}
              >
                Skills
              </Typography>
            </Link>
            <Link to="projects" smooth duration={500}>
              <Typography
                textTransform={"uppercase"}
                variant="h6"
                fontWeight={400}
                fontSize={"19px"}
              >
                Portfolio
              </Typography>
            </Link>
            <Link to="testimonials" smooth duration={500}>
              <Typography
                textTransform={"uppercase"}
                variant="h6"
                fontWeight={400}
                fontSize={"19px"}
              >
                Testimonials
              </Typography>
            </Link>
          </NavItems>
        </Box>
        <Button
          variant="contained"
          disableElevation
          disableRipple
          disableTouchRipple
          color={"primary"}
        >
          Hire Me
        </Button>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;

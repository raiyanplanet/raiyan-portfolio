import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import img1 from "../assets/projects/image_processing20220616-8811-dnmt4f.jpg";
import img2 from "../assets/projects/Yellow and Green Bold Geometric Business Agency Facebook Post (2).png";
import img3 from "../assets/projects/note app.png";

const projects = [
  {
    title: "Make E-Commerce website using React and Tailwind css",
    description: "Make E-Commerce website using React and Tailwind css",
    image: img1,
  },
  {
    title: "Project Two",
    description: "Description of project two...",
    image: img2,
  },
  {
    title: "Parsonal Note application create using React and Material UI",
    description: "Parsonal Note application create using React and Material UI",
    image: img3,
  },
  {
    title: "Project Two",
    description: "Description of project two...",
    image: img3,
  },
  {
    title: "Project One",
    description: "Description of project one...",
    image: img2,
  },
  {
    title: "Project Two",
    description: "Description of project two...",
    image: img1,
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={{ xs: "0px 20px", lg: "50px 50px" }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        padding={"20px 0"}
        color={"#111827"}
        align="center"
      >
        My Latest Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={20} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: "200ms",
                boxShadow: "5",
                borderRadius: 2,
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <CardMedia
                component="img"
                height={"10px"}
                image={project.image}
                alt={project.title}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "space-between",
                  height: "220px",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    component="div"
                    gutterBottom
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                >
                  View more
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;

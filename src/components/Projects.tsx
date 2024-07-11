import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import img1 from "../assets/projects/project1.jpg";
import img2 from "../assets/projects/project2.png";
import img3 from "../assets/projects/project3.jpg";
import img4 from "../assets/projects/Project4.png";
import img5 from "../assets/projects/project5.png";
// import img6 from "../assets/projects/project6.png";
import img7 from "../assets/projects/Project7.png";

const projects = [
  {
    title: "Maked E-Commerce website using React and Tailwind css",
    description: "Make E-Commerce website using React and Tailwind css",
    image: img1,
  },
  {
    title: "Created Note Application using React and Tailwind css",
    description: "Created Note Application using React and Tailwind css",
    image: img2,
  },
  {
    title: "Build E-Commerce website using React and Material UI",
    description: "Build E-Commerce website using React and Material UI",
    image: img3,
  },
  {
    title:
      "Created Modern dark Engineeering Website using React and Tailwind CSS",
    description:
      "Created Modern dark Engineeering Website using React and Tailwind CSS",
    image: img4,
  },
  {
    title: "Created E-commerce website with React and Tailwind css",
    description: "Description of project one...",
    image: img5,
  },
  {
    title:
      "Created Photographar portfolio website using React and Tailwind css",
    description: "Photographar portfolio website using React and Tailwind css",
    image: img7,
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={5}
      bgcolor={"#060913"}
      padding={{ xs: "0px 20px", lg: "50px 50px" }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        padding={"20px 0"}
        color={"#fff"}
        align="center"
        textTransform={"uppercase"}
      >
        My Latest <span style={{ color: "#49E9C7" }}>Projects</span>
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={20} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: "200ms",
                boxShadow: "5",
                paddingBottom: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2",
                border: "1px solid #3C414C",
                bgcolor: "#0C0F19",
                borderRadius: 5,
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <CardMedia
                component="img"
                height={"30%"}
                image={project.image}
                alt={project.title}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                  height: "220px",
                  color: "#fff",
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
                  <Typography variant="body2" color={"#cccccc"}>
                    {project.description}
                  </Typography>
                </Box>
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

import { Avatar, Box, List, ListItemText, Typography } from "@mui/material";
import company1 from "../assets/Raiyan Software.png";
import company2 from "../assets/wepik.png";
import { Check } from "@mui/icons-material";

const experience = [
  {
    companylogo: company1,
    position: "Web Application Developer",
    companyname: "Raiyan Software",
    timeduretion: "2024-prasent",
    details1:
      "Assisted in building and maintaining responsive websites and web applications.",
    details2:
      "Gained experience in front-end development using HTML, CSS, and JavaScript.",
    details3:
      "Participated in code reviews and collaborated with the development team.",
    details4: "",
  },
  {
    companylogo: company2,
    position: "Front-end Web Developer",
    companyname: "Wipik Company",
    timeduretion: "2024-prasent",
    details1:
      "Assisted in building and maintaining responsive websites and web applications.",
    details2:
      "Gained experience in front-end development using HTML, CSS, and JavaScript.",
    details3:
      "Participated in code reviews and collaborated with the development team.",
    details4: "",
  },
];

const Experiance = () => {
  return (
    <>
      <Box
        width={"100%"}
        minHeight={"100vh"}
        padding={{ xs: "20px 20px", lg: "50px 50px" }}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={"#f2f2f2"}
      >
        <Typography variant="h4" fontWeight={700}>
          Experience
        </Typography>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {experience.map((experience) => (
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", lg: "row" }}
              alignItems={{ xs: "center", lg: "start" }}
              borderRadius={2}
              bgcolor={"#fff"}
              gap={"50px"}
              width={"100%"}
              padding={"20px 20px"}
              boxShadow={4}
              sx={{
                transition: "200ms",
                ":hover": { bgcolor: "#1c273d", scale: "1.01", color: "#fff" },
              }}
            >
              <Avatar
                sx={{
                  height: "150px",
                  width: "150px",
                  bgcolor: "#fff",
                  boxShadow: 3,
                }}
              >
                <img
                  src={experience.companylogo}
                  alt={experience.companyname}
                  style={{ width: "100px", height: "100px" }}
                />
              </Avatar>

              <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Typography
                  variant="h4"
                  fontSize={{ xs: "35px" }}
                  fontWeight={500}
                >
                  {experience.position}
                </Typography>
                <Typography variant="h6" textTransform={"uppercase"}>
                  {experience.companyname}
                </Typography>
                <Typography variant="h6" fontWeight={400}>
                  {experience.timeduretion}
                </Typography>

                <List sx={{ margin: "0", padding: "0" }}>
                  <ListItemText>
                    <Check
                      sx={{
                        fontSize: "15px",
                        borderRadius: "3px",
                        color: "#fff",
                        padding: "1px",
                        bgcolor: "black",
                        margin: "10",
                      }}
                    />
                    {"    "}
                    {experience.details1}
                  </ListItemText>
                  <ListItemText>
                    <Check
                      sx={{
                        fontSize: "15px",
                        borderRadius: "3px",
                        color: "#fff",
                        padding: "1px",
                        bgcolor: "black",
                        margin: "10",
                      }}
                    />
                    {"    "}
                    {experience.details2}
                  </ListItemText>
                  <ListItemText>
                    <Check
                      sx={{
                        fontSize: "15px",
                        borderRadius: "3px",
                        color: "#fff",
                        padding: "1px",
                        bgcolor: "black",
                        margin: "10",
                      }}
                    />
                    {"    "}
                    {experience.details3}
                  </ListItemText>
                </List>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Experiance;

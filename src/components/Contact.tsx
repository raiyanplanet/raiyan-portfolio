import {
  Box,
  Button,
  InputBase,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import emailimg from "../assets/New message-cuate.png";

const Contact = () => {
  return (
    <>
      <Box
        display={"flex"}
        bgcolor={"#060913"}
        color={"#fff"}
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={{ xs: "20px 20px", lg: "0px 50px" }}
        minHeight={{ lg: "100vh", xs: "80vh" }}
        width={"100%"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{ lg: "40%", xs: "100%" }}
          gap={2}
        >
          <form method="post">
            <Typography
              variant="h4"
              fontWeight={500}
              padding={"10px 0"}
              textTransform={"uppercase"}
            >
              Contact Me
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"column"}
              width={"100%"}
              gap={"10px"}
            >
              <Box display={"flex"} gap={1}>
                <InputBase
                  placeholder="Enter First name"
                  fullWidth
                  sx={{
                    border: "1px solid #3C414C",
                    borderRadius: "6px",
                    fontSize: "16px",
                    "::placeholder": { color: "#fff" },
                    color: "#fff",
                    padding: "5px 10px",
                  }}
                  required
                />
                <InputBase
                  placeholder="Enter Last name"
                  fullWidth
                  sx={{
                    border: "1px solid #3C414C",
                    borderRadius: "6px",
                    color: "#fff",
                    padding: "5px 10px",
                  }}
                  required
                />
              </Box>
              <InputBase
                placeholder="Enter Email address"
                fullWidth
                sx={{
                  border: "1px solid #3C414C",
                  borderRadius: "6px",
                  color: "#fff",
                  padding: "5px 10px",
                }}
                required
              />
              <TextareaAutosize
                placeholder="Message......"
                minRows={7}
                style={{
                  border: "1px solid #3C414C",
                  borderRadius: "6px",
                  backgroundColor: "transparent",
                  fontSize: "17px",
                  outline: "none",
                  padding: "10px 10px",
                }}
                required
              ></TextareaAutosize>
              <Button
                variant="contained"
                color={"primary"}
                disableRipple
                disableElevation
                disableFocusRipple
                disableTouchRipple
                type="submit"
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
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
        <Box display={{ xs: "none", lg: "flex" }}>
          <img src={emailimg} alt="" style={{ width: "350px" }} />
        </Box>
      </Box>
    </>
  );
};

export default Contact;

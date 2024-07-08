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
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={{ xs: "0px 20px", lg: "0px 50px" }}
        minHeight={"100vh"}
        width={"100%"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{ lg: "40%", xs: "100%" }}
          gap={2}
        >
          <form action="#" method="post">
            <Typography
              variant="h4"
              fontWeight={500}
              padding={"10px 0"}
              color={"#111827"}
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
                    border: "1px solid #bcbcbc",
                    borderRadius: "6px",
                    fontSize: "16px",
                    padding: "5px 10px",
                  }}
                />
                <InputBase
                  placeholder="Enter Last name"
                  fullWidth
                  sx={{
                    border: "1px solid #bcbcbc",
                    borderRadius: "6px",
                    padding: "5px 10px",
                  }}
                />
              </Box>
              <InputBase
                placeholder="Enter Email address"
                fullWidth
                sx={{
                  border: "1px solid #bcbcbc",
                  borderRadius: "6px",
                  padding: "5px 10px",
                }}
              />
              <TextareaAutosize
                placeholder="Message......"
                minRows={7}
                style={{
                  border: "1px solid #bcbcbc",
                  borderRadius: "6px",
                  fontSize: "15px",
                  outline: "none",
                  padding: "10px 10px",
                }}
              ></TextareaAutosize>
              <Button
                variant="contained"
                color={"primary"}
                disableElevation
                disableFocusRipple
                disableTouchRipple
                disableRipple
                sx={{
                  fontSize: "16px",
                  boxShadow: "none",
                  borderRadius: "6px",
                  padding: "7px 10px",
                  ":hover": {
                    bgcolor: "#1c273d",
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

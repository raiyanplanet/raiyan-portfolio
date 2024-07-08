import React, { ReactNode } from "react";
import { Typography, Box, Grid, Paper, Avatar } from "@mui/material";
import { Rating } from "@mui/material";
import { Star } from "@mui/icons-material";

interface ClientReview {
  position: ReactNode;
  id: number;
  clientName: string;
  reviewText: string;
  rating: number;
  imageUrl: string; // New property for client image URL
}

interface ClientReviewsProps {
  reviews: ClientReview[];
}

const ClientReviews: React.FC<ClientReviewsProps> = ({ reviews }) => {
  // Demo reviews data with images
  const demoReviews: ClientReview[] = [
    {
      id: 1,
      clientName: "John Devit",
      position: "Senior Developer",
      reviewText:
        "Excellent service! They delivered exactly what I needed on time.",
      rating: 5,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg", // Example image URL
    },
    {
      id: 2,
      clientName: "Jane Smith",
      position: "Designer",
      reviewText:
        "Very professional and responsive. I would highly recommend them.",
      rating: 4.5,
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg", // Example image URL
    },
    {
      id: 3,
      clientName: "Michael Johnson",
      position: "CEO",
      reviewText:
        "Great experience working with them. Will definitely work with them again.",
      rating: 4,
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg", // Example image URL
    },
    {
      id: 4,
      clientName: "Emily Brown",
      position: "Manager",
      reviewText:
        "Good communication and quality work. Happy with the results.",
      rating: 4.2,
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg", // Example image URL
    },
  ];

  // Use demo reviews if no reviews prop is provided
  const reviewsToDisplay = reviews.length > 0 ? reviews : demoReviews;

  return (
    <Box
      mt={4}
      mb={4}
      padding={{ xs: "0 20px ", lg: "0px 50px" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        color={"#111827"}
        align="center"
        padding={"20px 0"}
      >
        Client Reviews
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {reviewsToDisplay.map((review) => (
          <Grid key={review.id} item xs={12} sm={6} md={6} lg={3}>
            <Paper
              elevation={3}
              sx={{
                bgcolor: "#111827",
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "10px",
                borderRadius: "10px",
                justifyContent: "space-between",
                transition: "200ms",
                ":hover": { bgcolor: "#fff", scale: "1.001", color: "#000" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  bgcolor: "#fff",
                  borderRadius: "10px",
                  padding: "10px",
                  gap: "10px",
                }}
              >
                <Typography variant="body1">{review.reviewText}</Typography>
                <Box mb={2} sx={{ display: "flex", justifyContent: "center" }}>
                  <Rating
                    name={`rating-${review.id}`}
                    value={review.rating}
                    precision={0.5}
                    readOnly
                    icon={<Star fontSize="inherit" />}
                  />
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={2}
                color={"#fff"}
              >
                <Avatar
                  alt={review.clientName}
                  src={review.imageUrl}
                  sx={{ width: 80, height: 80 }}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"start"}
                  sx={{
                    ":hover": {
                      bgcolor: "#fff",
                      scale: "1.001",
                      color: "#000",
                    },
                    transition: "200ms",
                  }}
                >
                  <Typography variant="h6">{review.clientName}</Typography>
                  <Typography variant="subtitle1" color={"#d1d1d1"}>
                    {review.position}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClientReviews;

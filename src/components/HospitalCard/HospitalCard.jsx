import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import Calendar from "../Calendar/Calendar";
import { useState } from "react";
import { format } from "date-fns";
import icon from "../../assets/hospital.png";
import thumb from "../../assets/thumbsup.png";

export default function HospitalCard({
  availableSlots,
  handleBooking,
  details,
  booking = false,
}) {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Box sx={{ bgcolor: "#fff", borderRadius: 2, p: { xs: 2, md: 4 } }}>
      <Stack
        flexWrap={"wrap"}
        spacing={{ xs: 1, md: 4 }}
        direction={{ xs: "column", md: "row" }}
      >
        <Box
          component="img"
          src={icon}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
          alt="hospital"
        />

        {/* Hospital Info */}
        <Box flex={1}>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            textTransform="capitalize"
            lineHeight={1}
            mb={1}
          >
            {details["Hospital Name"]?.toLowerCase()}
          </Typography>
          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            fontWeight={700}
          >
            {`${details["City"]?.toLowerCase()}, ${details["State"]}`}
          </Typography>
          <Typography fontSize={14} mb={1}>
            {details["Hospital Type"]}
          </Typography>

          {/* Consultation Fee Section */}
          <Stack direction="row" spacing="4px" mb={2} flexWrap="wrap">
            <Typography
              textTransform="uppercase"
              color="primary.green"
              fontWeight={800}
            >
              Free
            </Typography>
            <Typography
              sx={{ color: "#787887", textDecoration: "line-through" }}
            >
              ₹500
            </Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>

          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />

          {/* Rating Section */}
          <Stack
            spacing="4px"
            px={1}
            py="4px"
            direction="row"
            bgcolor="primary.green"
            borderRadius={1}
            alignItems="center"
            width="fit-content"
          >
            <Box
              component={"img"}
              src={thumb}
              height={{ xs: 16, md: 20 }}
              width={{ xs: 16, md: 20 }}
              alt="rating"
            />
            <Typography
              fontWeight={700}
              sx={{ opacity: 0.5 }}
              color="#fff"
              fontSize={{ xs: 14, md: 16 }}
            >
              {details["Hospital overall rating"] === "Not Available"
                ? 0
                : details["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

        {/* Booking Section */}
        <Stack justifyContent={booking ? "flex-start" : "flex-end"} minWidth="23%">
          {!booking && (
            <>
              <Typography
                color="primary.green"
                textAlign="center"
                mb={1}
                fontWeight={500}
                fontSize={14}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar((prev) => !prev)}
              >
                {!showCalendar ? "Book FREE Center Visit" : "Hide Booking Calendar"}
              </Button>
            </>
          )}

          {booking && (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={details.bookingTime}
                variant="outlined"
                color="primary"
                sx={{ fontSize: 14, borderRadius: 1 }}
              />
              <Chip
                color="success"
                variant="outlined"
                sx={{ fontSize: 14, borderRadius: 1 }}
                label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {/* Calendar Section */}
      {showCalendar && (
        <Calendar
          availableSlots={availableSlots}
          handleBooking={handleBooking}
          details={details}
        />
      )}
    </Box>
  );
}

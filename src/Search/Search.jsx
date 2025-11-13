import { Container, Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import icon from "../assets/tick.png";
import banner from "../assets/banner.png";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import BookingModal from "../components/BookingModal/BookingModal";
import NavBar from "../components/NavBar/NavBar";
import AutohideSnackbar from "../components/AutohideSnackbar/AutohideSnackbar";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  // ✅ Fetch hospitals when state or city changes
  useEffect(() => {
    const getHospitals = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setHospitals(data);
      } catch (err) {
        console.error("Error fetching hospitals:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (state && city) getHospitals();
  }, [state, city]);

  // ✅ Sync URL params with state
  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  return (
    <>
      <NavBar />
      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
        }}
      >
        {/* 🔍 Search Section */}
        <Box
          sx={{
            position: "relative",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            background: "linear-gradient(90deg,#2AA7FF,#0C8CE5)",
          }}
        >
          <Container
            sx={{
              p: 3,
              borderRadius: 2,
              background: "#fff",
              mb: "50px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              transform: "translateY(50px)",
            }}
            maxWidth="xl"
          >
            <SearchHospital />
          </Container>
        </Box>

        {/* 🏥 Hospital List Section */}
        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          {hospitals.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography
                component="h1"
                fontSize={24}
                lineHeight={1.1}
                mb={2}
                fontWeight={500}
              >
                {`${hospitals.length} medical centers available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {city?.toLowerCase()}
                </span>
              </Typography>
              <Stack spacing={2} direction="row">
                <img src={icon} height={24} width={24} alt="tick icon" />
                <Typography color="#787887" lineHeight={1.4}>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
              spacing={3}
            >
              {isLoading ? (
                <Typography
                  variant="h3"
                  bgcolor="#fff"
                  borderRadius={2}
                  p={3}
                  textAlign="center"
                >
                  Loading...
                </Typography>
              ) : hospitals.length > 0 ? (
                hospitals.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    availableSlots={availableSlots}
                    handleBooking={handleBookingModal}
                    details={hospital}
                  />
                ))
              ) : (
                state &&
                city && (
                  <Typography
                    variant="h3"
                    bgcolor="#fff"
                    borderRadius={2}
                    p={3}
                    textAlign="center"
                  >
                    No hospitals found for {city}, {state}
                  </Typography>
                )
              )}

              {!state && (
                <Typography
                  variant="h3"
                  bgcolor="#fff"
                  borderRadius={2}
                  p={3}
                  textAlign="center"
                >
                  Please select a state and city
                </Typography>
              )}
            </Stack>

            <img src={banner} width={360} height="auto" alt="banner" />
          </Stack>
        </Container>

        {/* 📅 Booking Modal */}
        <BookingModal
          open={isModalOpen}
          bookingDetails={bookingDetails}
          showSuccessMessage={setShowBookingSuccess}
          setOpen={setIsModalOpen}
        />

        {/* ✅ Success Snackbar */}
        <AutohideSnackbar
          setOpen={setShowBookingSuccess}
          open={showBookingSuccess}
          message="Booking Successful"
        />
      </Box>
    </>
  );
}

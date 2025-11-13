import {Box,Typography,Container,Stack} from "@mui/material";
import {useEffect,useState} from "react";
import banner from "../assets/banner.png";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import SearchBar from "../components/SearchBar/SearchBar";
import NavBar from "../components/NavBar/NavBar";
export default function MyBookings(){
    const [bookings,setBookings]=useState([]);
    const [filteredBookings,setFilteredBookings]=useState([]);
    useEffect(()=>{
        const localBookings=localStorage.getItem("bookings") || "[]";
        setBookings(JSON.parse(localBookings));
    },[]);
    useEffect(()=>{
        setFilteredBookings(bookings);
    },[bookings]);
    return (
        <>
        <NavBar />
        <Box sx={{background:"linear-gradient(#EFF5FE, rgba(241,247,255,0.47))"}} >
            <Box 
              mb="50px"
              pt={{xs:3,md:1}}
              sx={{
                position:"relative",
                borderBottomLeftRadius:"1rem",
                borderBottomRightRadius:"1rem",
                background:"linear-gradient(90deg,#2AA7FF,#0C8CE5)",
                }}
            >
                <Container maxWidth="xl" sx={{px:{xs:0,md:5} }}>
                    <Stack
                      direction={{xs:"column", md:"row"}}
                      alignItems={{xs:"center", md:"flex-end"}}
                      spacing={{xs:0,md:12}}
                    >
                        <Typography 
                          component="h1"
                          color="#fff"
                          pb={1}
                          fontWeight={700}
                          fontSize={{xs:32, md:40}}
                        >
                            My Bookings
                        </Typography>
                        <Box
                          bgcolor="#fff"
                          p={3}
                          borderRadius={2}
                          flexGrow={1}
                          width={{xs:1, md:"auto"}}
                          sx={{translate:"0 50px"}}
                          boxShadow="0 0 10px rgba(0,0,0,0.1)"
                        >
                            <SearchBar list={bookings} filterList={setFilteredBookings} />
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Container maxWidth="xl" sx={{pt:8,pb:10,px:{xs:0,md:4} }}>
                <Stack direction={{md:"row"}} alignItems="flex-start">
                    <Stack
                      mb={{xs:4, md:0}}
                      width={{xs:1, md:"calc(100%-384px)"}}
                      spacing={3}
                      mr="24px"
                    >
                        {filteredBookings.length>0 && 
                          filteredBookings.map((hospital)=>(
                            <HospitalCard
                              key={hospital["Hospital Name"]}
                              details={hospital}
                              booking={true}
                            />
                          ))}
                          {filteredBookings.length ===0 &&(
                            <Typography variant="h3" bgcolor="#fff" borderRadius={2} p={3}>
                                No Bookings Found!
                            </Typography>
                          )}
                    </Stack>
                    <img src={banner} width={360} height="auto" alt="Booking banner" />

                </Stack>
            </Container>
        </Box>
        </>
    );
}
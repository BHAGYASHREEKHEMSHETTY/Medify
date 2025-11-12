import styled from "@emotion/styled";
import { Stack,Chip,Divider,Typography } from "@mui/material";
export default function TimeSlotPicker({
    availableSlots,
    details,
    handleBooking,
    selectedDate,
}){
    const CustomChip=(props)=>(
        <Chip
         label={props.label}
         color="primary"
         variant="outlined"
         sx={{
            fontSize:{xs:10,md:14},
            borderRadius:"5px",
            cursor:"pointer",
            "&:nth-of-type(1)":{
                ml:0,
            },
            mr:{xs:1,md:3},
            mt:{xs:1,md:0},
         }}
         onClick={props.handleClick}
        />
    );
    const handleClick=(slot)=>{
        handleBooking({...details,bookingDate:selectedDate,bookingTime:slot});
    };
    return (
        <Stack
          spacing={{xs:2,md:3}}
          divider={<Divider orientation="horizontal" flexItem />}
        >
            {availableSlots.morning.length>0 && (
                <Stack
                 direction="row"
                 alignItems="center"
                 flexWrap={"wrap"}
                 px={{xs:0,md:6}}
                >
                    <Typography
                      fontSize={{xs:14,md:16}}
                      width={{xs:1,md:"15%"}}
                    >
                        Morning
                    </Typography>
                    {availableSlots.morning.map((slot)=>(
                        <CustomChip
                          key={slot}
                          label={slot}
                          handleClick={()=>handleClick(slot)}
                        />
                    ))}
                </Stack>
            )}
            {availableSlots.afternoon.length>0 && (
                <Stack
                 direction="row"
                 alignItems="center"
                 flexWrap={"wrap"}
                 px={{xs:0,md:6}}
                >
                    <Typography
                      fontSize={{xs:14,md:16}}
                      width={{xs:1,md:"15%"}}
                    >
                        Afternoon
                    </Typography>
                    {availableSlots.afternoon.map((slot)=>(
                        <CustomChip
                          key={slot}
                          label={slot}
                          handleClick={()=>handleClick(slot)}
                        />
                    ))}
                </Stack>
            )}
            {availableSlots.afternoon.length>0 && (
                <Stack
                 direction="row"
                 alignItems="center"
                 flexWrap={"wrap"}
                 px={{xs:0,md:6}}
                >
                    <Typography
                      fontSize={{xs:14,md:16}}
                      width={{xs:1,md:"15%"}}
                    >
                        Evening
                    </Typography>
                    {availableSlots.evening.map((slot)=>(
                        <CustomChip
                          key={slot}
                          label={slot}
                          handleClick={()=>handleClick(slot)}
                        />
                    ))}
                </Stack>
            )}
        </Stack>
    );
}
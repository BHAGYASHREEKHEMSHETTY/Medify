import { Typography,Grid,Box } from "@mui/material";
import  {useMemo} from "react";
import IconCard from "../IconCard/IconCard";
import doctorIcon from "../../assets/doctor.png";
import labIcon from "../../assets/labs.png";
import capsuleIcon from "../../assets/capsule.png";
import hospitalIcon from "../../assets/hospitalicon.png";
import ambulanceIcon from "../../assets/ambulance.png";
export default function HeroServices(){
    const Services=useMemo(
        ()=>[
            {img:doctorIcon,title:"Doctors"},
            {img:labIcon,title:"Labs"},
            {img:hospitalIcon,title:"Hospitals",active:true},
            {img:capsuleIcon,title:"Medical Store"},
            {img:ambulanceIcon,title:"Ambulance"},
        ],
        []
    );
    return (
        <Box>
            <Typography
              component="h4"
              color="#102851"
              textAlign="center"
              mb={2}
              fontWeight={500}
              fontSize={20}
            >
                You may be looking for
            </Typography>
            <Grid 
              container
              justifyContent={"center"}
              columnSpacing={{xs:1,md:2}}
            >
                {Services.map((service)=>(
                    <Grid item key={service.title} xs={4} md={2.4}>
                        <IconCard
                          img={service.img}
                          title={service.title}
                          active={service.active || false}
                          bgColor="#FAFBFE"
                        />
                    </Grid>
    
                ))}
            </Grid>
        </Box>
    );
}
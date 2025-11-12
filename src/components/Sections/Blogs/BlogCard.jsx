import {Box,Stack,Typography} from "@mui/material";
import featured from "../../../assets/blog.png";
import person from "../../../assets/person.png";
export default function BlogCard(){
    return (
        <Box border="1px solid rgba(0,0,0,0.1)" borderRadius={2}>
            <Box 
              component="img"
              src={featured}
              width={1}
            />
            <Box p={2}>
                <Typography color="#77829D"  mb={1} fontWeight={500} fontSize={{xs:12,md:16}}>
                    Medical | March 31, 2022
                </Typography>
                <Typography color="#1B3C74" component="h3" mb={2} lineHeight={1.2} fontWeight={500} fontSize={{xs:14,md:18}}>
                    6 Tips To Protect Your Mental Health When You're Sick
                </Typography>
                <Stack spacing={1} direction="row" alignItems="center">
                    <Box
                      component="img"
                      src={person}
                      height={32}
                      width={32}
                    />
                    <Typography color="#1B3C74" fontSize={{xs:12,md:16}}>
                        Rebecca Lee
                    </Typography>
                </Stack>
            </Box>
             
        </Box>
    )
}
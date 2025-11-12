import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/app_store.png";
import arrow from "../../../assets/down-arrow.png";
import SmsForm from "./SmsForm";
import {Button,Box,Typography,Container,Stack,Grid} from "@mui/material";
export default function DownloadApp(){
    return (
        <Box
          sx={{background:"linear-gradient(#E7F0FF 100%, #E8F1FF 47%)",pt:5}}
        >
            <Container>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={5.5}>
                        <Box src={mobile} component="img" width={1} height="auto" />
                    </Grid>
                    <Grid item xs={12} md={6.5}>
                        <Box 
                          position="relative"
                          pl={{xs:"36px",md:"50px"}}
                          mb={{xs:4, md:0}}
                        >
                            <Typography variant="h2" mb={2}>
                                Download the
                                <br />
                                <Box component="span" color="primary.main">
                                    Medify{" "}
                                </Box>
                                App
                            </Typography>
                            <Box 
                              src={arrow}
                              component="img"
                              width={{xs:24,md:40}}
                              left={0}
                              top={50}
                              position="absolute"
                            />
                            <SmsForm />
                            <Stack  
                              spacing={{xs:1,md:2}}
                              direction={{xs:"column",md:"row"}}
                            >
                               <Button 
                                 sx={{
                                  color:"#fff",
                                  bgcolor:"#333",
                                  py:1.5,
                                  borderRadius:1.5,
                                 }}
                                 size={"large"}
                                 startIcon={<img src={playstore} height={24} />}
                                 variant="contained"
                                 disableElevation
                                >
                                    Google Play
                                </Button>
                                <Button 
                                 sx={{
                                  color:"#fff",
                                  bgcolor:"#333",
                                  py:1.5,
                                  borderRadius:1.5,
                                 }}
                                 size={"large"}
                                 startIcon={<img src={apple} height={24} />}
                                 variant="contained"
                                 disableElevation
                                >
                                    App Store
                                </Button>

                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
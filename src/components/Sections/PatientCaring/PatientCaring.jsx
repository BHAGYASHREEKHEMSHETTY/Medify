import {Box,Container,Grid,List,ListItem,ListItemIcon,ListItemText,Typography} from "@mui/material";
import banner from "../../../assets/patientcaring.png";
import tick from "../../../assets/blue-tick.png";
export default function PatientCaring(){
    return (
        <Box py={6} sx={{background:"linear-gradient(#E7F0FF,#E8F1FF"}}>
            <Container>
                <Grid container  alignItems="center" spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box 
                          component="img"
                          src={banner}
                          width={1}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography color="primary.main" fontWeight={600}>
                            HELPING PATIENTS FROM AROUND THE GLOBE !!
                        </Typography>
                        <Typography mb={1} variant="h2">
                            Patient <Box component="span" color="primary.main">Caring</Box>
                        </Typography>
                        <Typography lineHeight={1.8} color="#77829D">
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                        </Typography>
                        <List sx={{fontSize:{xs:12,md:18} }}>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{minWidth:32}}>
                                    <Box component="img" src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Stay updated About Your Health"
                                  primaryTypographyProps={{fontSize:{xs:14,md:18}, fontWeight:500, color:"#1B3C74"}}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{minWidth:32}}>
                                    <Box component="img" src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Check Your Results Online"
                                  primaryTypographyProps={{fontSize:{xs:14,md:18}, fontWeight:500, color:"#1B3C74"}}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{minWidth:32}}>
                                    <Box component="img" src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Manage Your Appointments"
                                  primaryTypographyProps={{fontSize:{xs:14,md:18}, fontWeight:500, color:"#1B3C74"}}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
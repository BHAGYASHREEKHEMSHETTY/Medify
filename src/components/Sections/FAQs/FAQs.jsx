import {Box,Container,Typography,Grid} from "@mui/material";
import CustomizedAccordions from "../../Accordion/Accordion";
import faqBanner from "../../../assets/faqs-banner.png";
export default function FAQs(){
    const faqs=[
        {
            question:"Why choose our medify for your family?"
        },
        {
            question:"Why we are different from others?"
        },
        {
            question:"Trusted & experience senior care & love"
        },
        {
            question:"How to get appointment for emergency cases?"
        }
    ]
    return (
        <Box py={4}>
            <Container maxWidth="xl">
                <Typography color="primary.main" fontWeight={600} textAlign="center">
                    Get Your Answer
                </Typography>
                <Typography textAlign="center" mb={2} variant="h2">
                    Frequently Asked Questions
                </Typography>
                <Grid  container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box 
                          src={faqBanner}
                          component="img"
                          width={1}
                          height="auto"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <CustomizedAccordions data={faqs} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
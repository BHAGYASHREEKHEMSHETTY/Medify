import {Box,Typography,Container,Grid} from "@mui/material";
import BlogCard from "./BlogCard";
export default function Blogs(){
  return (
    <Box py={6}>
        <Container>
            <Typography color="primary.main" textAlign="center" fontWeight={600}>
                Blog & News
            </Typography>
            <Typography textAlign="center" mb={2} variant="h2">
                Read Our Latest News
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <BlogCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <BlogCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <BlogCard />
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
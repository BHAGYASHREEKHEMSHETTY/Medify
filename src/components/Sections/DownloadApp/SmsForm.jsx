import {Box,Button,TextField,Typography,InputAdornment} from "@mui/material";
export default function SmsForm(){
    return (
        <Box mb={5}>
            <Typography fontWeight={600} mb={1}>
                Get the link to download the app
            </Typography>
            <Box component="form" sx={{display:"flex",gap:2,flexDirection:{xs:"column",md:"row"} }}>
                <TextField
                  sx={{flex:1,border:"1px solid #F0F0F0"}}
                  placeholder="Enter phone number"
                  InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            +91
                        </InputAdornment>
                    )
                  }}
                  required
                />
                <Button type="submit" variant="contained" size="large" disableElevation>
                    Send SMS
                </Button>
            </Box>
        </Box>
    )
}
import {Stack,Box,Typography} from "@mui/material";
export default function IconCard({title,img,bgColor,shadow=false,active=false}){
    return (
        <Stack 
          alignItems="center"
          spacing={2}
          p={3}
          borderRadius={2}
          bgcolor={active ? "rgba(42,167,255,0.08)":bgColor}
          border={active ? "1px solid #2AA7FF":"0"}
          boxShadow={shadow ? "0 0 24px rgba(0,0,0,0.09)":"none"}
        >
            <Box component="img" src={img} height={60} width={60} />
            <Typography
              color={active ? "primary.main":"#ABB6C7"}
              fontWeight={active ? 600:400}
              fontSize={18}
            >
                {title}
            </Typography>
        </Stack>
    );
}
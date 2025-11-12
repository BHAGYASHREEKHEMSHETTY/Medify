import {useSwiper} from "swiper/react";
import next from "../../../assets/next.png";
import prev from "../../../assets/prev.png";
import {Box} from "@mui/material";
function SlidePrevButton(){
    const swiper=useSwiper();
    return (
        <Box
          component="img"
          src={prev}
          height={48}
          width={48}
          left={0}
          top={0}
          onClick={()=>swiper.slidePrev()}
          position="absolute"
          sx={{cursor:"pointer"}}
          bgcolor="#fff"
          zIndex={999}
        ></Box>
    );
}
function SlideNextButton(){
    const swiper=useSwiper();
    return (
        <Box
          component="img"
          src={next}
          height={48}
          width={48}
          left={0}
          top={0}
          onClick={()=>swiper.slideNext()}
          position="absolute"
          sx={{cursor:"pointer"}}
          bgcolor="#fff"
          zIndex={999}
        ></Box>
    );
}
export {SlideNextButton,SlidePrevButton}
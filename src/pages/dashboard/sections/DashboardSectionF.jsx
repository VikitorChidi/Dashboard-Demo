import {Box} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

const DashboardSectionF = ({theme, isSmallScreen,isMediumScreen}) => {
    return (
        <Box>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                scrollbar={{ draggable: true }}
                spaceBetween={2}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </Box>
    )
}
export default DashboardSectionF